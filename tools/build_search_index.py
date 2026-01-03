import json
import re
import html
from pathlib import Path

root = Path(__file__).resolve().parents[1] / "docs"
public_dir = root / "public"
public_dir.mkdir(parents=True, exist_ok=True)

entries = []
seen = set()

section_pattern = re.compile(r'<section[^>]*id="([^"]+)"[^>]*>(.*?)</section>', re.S)
header_pattern = re.compile(r'<header[^>]*id="([^"]+)"[^>]*>(.*?)</header>', re.S)


def strip_tags(value: str) -> str:
    value = re.sub(r'<[^>]+>', ' ', value)
    value = re.sub(r'\s+', ' ', value).strip()
    return html.unescape(value)


def extract_title(block_html: str) -> str:
    for tag in ("h2", "h1", "h3"):
        match = re.search(fr'<{tag}[^>]*>(.*?)</{tag}>', block_html, re.S)
        if match:
            return strip_tags(match.group(1))
    return ""


def extract_summary(block_html: str) -> str:
    match = re.search(r'<p[^>]*>(.*?)</p>', block_html, re.S)
    if match:
        return strip_tags(match.group(1))
    return ""


def add_blocks(rel_base: str, pattern, text: str) -> None:
    for match in pattern.finditer(text):
        section_id = match.group(1)
        body = match.group(2)
        key = (rel_base, section_id)
        if key in seen:
            continue
        seen.add(key)

        title = extract_title(body) or section_id
        summary = extract_summary(body)
        text_content = strip_tags(body).lower()
        url = f"{rel_base}.html#{section_id}"

        entries.append(
            {
                "id": section_id,
                "title": title,
                "summary": summary,
                "text": text_content,
                "url": url,
            }
        )


for md_file in root.rglob("*.md"):
    if ".vitepress" in md_file.parts or "public" in md_file.parts:
        continue

    text = md_file.read_text(encoding="utf-8")
    if text.lstrip().startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            text = parts[2]

    rel_base = md_file.relative_to(root).with_suffix("").as_posix()

    if md_file.name == "index.md":
        add_blocks(rel_base, header_pattern, text)

    add_blocks(rel_base, section_pattern, text)

entries.sort(key=lambda item: (item["url"], item["id"]))

output_path = public_dir / "search-index.json"
output_path.write_text(json.dumps(entries, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Wrote {output_path} with {len(entries)} entries")
