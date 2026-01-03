import json
import re
import html
from pathlib import Path

root = Path(__file__).resolve().parents[1] / "docs"
public_dir = root / "public"
public_dir.mkdir(parents=True, exist_ok=True)

entries = []
seen = set()

heading_pattern = re.compile(r"^(#{1,3})\s+(.+)$")
anchor_pattern = re.compile(r"\s*\{#([^}]+)\}\s*$")


def strip_md(value: str) -> str:
    value = re.sub(r"`([^`]+)`", r"\1", value)
    value = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", value)
    value = re.sub(r"\*\*([^*]+)\*\*", r"\1", value)
    value = re.sub(r"\*([^*]+)\*", r"\1", value)
    value = re.sub(r"<[^>]+>", " ", value)
    value = re.sub(r"\s+", " ", value).strip()
    return html.unescape(value)


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^\w\s-]", "", value, flags=re.UNICODE)
    value = re.sub(r"\s+", "-", value)
    value = re.sub(r"-{2,}", "-", value)
    return value or "section"


def extract_summary(lines: list[str]) -> str:
    buffer = []
    for line in lines:
        line = line.strip()
        if not line:
            if buffer:
                break
            continue
        if line.startswith("```"):
            break
        buffer.append(line)
    return strip_md(" ".join(buffer))


def add_entry(rel_base: str, section_id: str, title: str, summary: str, text: str) -> None:
    key = (rel_base, section_id)
    if key in seen:
        return
    seen.add(key)

    url = f"{rel_base}.html#{section_id}"
    entries.append(
        {
            "id": section_id,
            "title": title,
            "summary": summary,
            "text": text,
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

    lines = text.splitlines()
    headings = []
    for idx, line in enumerate(lines):
        match = heading_pattern.match(line)
        if not match:
            continue
        level = len(match.group(1))
        title_raw = match.group(2).strip()
        anchor_match = anchor_pattern.search(title_raw)
        anchor = None
        if anchor_match:
            anchor = anchor_match.group(1)
            title_raw = title_raw[: anchor_match.start()].strip()
        headings.append(
            {
                "index": idx,
                "level": level,
                "title": title_raw,
                "anchor": anchor,
            }
        )

    if not headings:
        continue

    rel_base = md_file.relative_to(root).with_suffix("").as_posix()
    used_ids: set[str] = set()

    for i, heading in enumerate(headings):
        start = heading["index"] + 1
        end = len(lines)
        for j in range(i + 1, len(headings)):
            if headings[j]["level"] <= heading["level"]:
                end = headings[j]["index"]
                break

        section_lines = lines[start:end]
        title = strip_md(heading["title"])
        section_id = heading["anchor"] or slugify(title)
        if section_id in used_ids:
            suffix = 2
            while f"{section_id}-{suffix}" in used_ids:
                suffix += 1
            section_id = f"{section_id}-{suffix}"
        used_ids.add(section_id)

        summary = extract_summary(section_lines)
        text_content = strip_md(" ".join(section_lines)).lower()
        add_entry(rel_base, section_id, title or section_id, summary, text_content)

entries.sort(key=lambda item: (item["url"], item["id"]))

output_path = public_dir / "search-index.json"
output_path.write_text(json.dumps(entries, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Wrote {output_path} with {len(entries)} entries")
