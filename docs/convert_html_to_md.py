#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Convert HTML tags in Markdown files to pure Markdown format
"""

import os
import re
import html
from pathlib import Path

def decode_html_entities(text):
    """Decode HTML entities like &quot;, &gt;, &amp;, etc."""
    return html.unescape(text)

def convert_html_to_markdown(content):
    """Convert HTML tags to Markdown format"""

    # Store frontmatter
    frontmatter_match = re.match(r'^---\n.*?\n---\n', content, re.DOTALL)
    frontmatter = frontmatter_match.group(0) if frontmatter_match else ''
    content_without_fm = content[len(frontmatter):] if frontmatter else content

    # Remove HTML comments
    content_without_fm = re.sub(r'<!--.*?-->', '', content_without_fm, flags=re.DOTALL)

    # Convert <section id="xxx"> to ## heading with {#xxx}
    def section_replacer(match):
        section_id = match.group(1)
        # Find the first h2 inside this section
        section_content = match.group(2)
        h2_match = re.search(r'<h2>(.*?)</h2>', section_content, re.DOTALL)
        if h2_match:
            h2_text = h2_match.group(1).strip()
            # Remove the h2 from section content
            section_content = section_content.replace(h2_match.group(0), '', 1)
            return f'\n## {h2_text} {{#{section_id}}}\n{section_content}'
        return f'\n## {{#{section_id}}}\n{match.group(2)}'

    content_without_fm = re.sub(
        r'<section[^>]*id="([^"]+)"[^>]*>(.*?)</section>',
        section_replacer,
        content_without_fm,
        flags=re.DOTALL
    )

    # Convert <header> tags - special handling for hero section
    def header_replacer(match):
        header_id = match.group(1) if match.group(1) else ''
        header_content = match.group(2)
        # Find h1 inside header
        h1_match = re.search(r'<h1>(.*?)</h1>', header_content, re.DOTALL)
        if h1_match:
            h1_text = h1_match.group(1).strip()
            header_content = header_content.replace(h1_match.group(0), '', 1)
            id_attr = f' {{#{header_id}}}' if header_id else ''
            return f'\n# {h1_text}{id_attr}\n{header_content}'
        return header_content

    content_without_fm = re.sub(
        r'<header[^>]*(?:id="([^"]+)")?[^>]*>(.*?)</header>',
        header_replacer,
        content_without_fm,
        flags=re.DOTALL
    )

    # Convert h2, h3, h4 tags
    content_without_fm = re.sub(r'<h2>(.*?)</h2>', r'## \1', content_without_fm, flags=re.DOTALL)
    content_without_fm = re.sub(r'<h3>(.*?)</h3>', r'### \1', content_without_fm, flags=re.DOTALL)
    content_without_fm = re.sub(r'<h4>(.*?)</h4>', r'#### \1', content_without_fm, flags=re.DOTALL)

    # Convert <pre><code> to markdown code blocks
    def code_block_replacer(match):
        code_content = match.group(1)
        # Remove any nested HTML tags
        code_content = re.sub(r'<[^>]+>', '', code_content)
        return f'\n```\n{code_content}\n```\n'

    content_without_fm = re.sub(
        r'<pre><code>(.*?)</code></pre>',
        code_block_replacer,
        content_without_fm,
        flags=re.DOTALL
    )

    # Convert inline <code> tags
    content_without_fm = re.sub(r'<code>(.*?)</code>', r'`\1`', content_without_fm)

    # Convert <ul> and <ol> lists
    def list_replacer(match):
        list_type = match.group(1)  # ul or ol
        list_content = match.group(2)

        # Extract all <li> items
        li_items = re.findall(r'<li>(.*?)</li>', list_content, re.DOTALL)

        result = '\n'
        for i, item in enumerate(li_items, 1):
            item = item.strip()
            # Remove any extra newlines in the item
            item = re.sub(r'\n+', ' ', item)
            if list_type == 'ul':
                result += f'- {item}\n'
            else:
                result += f'{i}. {item}\n'
        result += '\n'
        return result

    content_without_fm = re.sub(
        r'<(ul|ol)[^>]*>(.*?)</\1>',
        list_replacer,
        content_without_fm,
        flags=re.DOTALL
    )

    # Convert <table> to markdown table
    def table_replacer(match):
        table_content = match.group(1)

        # Extract thead
        thead_match = re.search(r'<thead>(.*?)</thead>', table_content, re.DOTALL)
        # Extract tbody
        tbody_match = re.search(r'<tbody>(.*?)</tbody>', table_content, re.DOTALL)

        result = '\n'

        if thead_match:
            thead_content = thead_match.group(1)
            headers = re.findall(r'<th>(.*?)</th>', thead_content, re.DOTALL)
            headers = [h.strip() for h in headers]
            result += '| ' + ' | '.join(headers) + ' |\n'
            result += '| ' + ' | '.join(['---'] * len(headers)) + ' |\n'

        if tbody_match:
            tbody_content = tbody_match.group(1)
            rows = re.findall(r'<tr>(.*?)</tr>', tbody_content, re.DOTALL)
            for row in rows:
                cells = re.findall(r'<td>(.*?)</td>', row, re.DOTALL)
                cells = [c.strip().replace('\n', ' ') for c in cells]
                if cells:
                    result += '| ' + ' | '.join(cells) + ' |\n'

        result += '\n'
        return result

    content_without_fm = re.sub(
        r'<table>(.*?)</table>',
        table_replacer,
        content_without_fm,
        flags=re.DOTALL
    )

    # Convert <a href> to markdown links
    content_without_fm = re.sub(
        r'<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>',
        r'[\2](\1)',
        content_without_fm,
        flags=re.DOTALL
    )

    # Convert <strong> and <b> to **bold**
    content_without_fm = re.sub(r'<(strong|b)>(.*?)</\1>', r'**\2**', content_without_fm)

    # Convert <em> and <i> to *italic*
    content_without_fm = re.sub(r'<(em|i)>(.*?)</\1>', r'*\2*', content_without_fm)

    # Convert <p> tags - just remove them and add spacing
    content_without_fm = re.sub(r'<p>(.*?)</p>', r'\n\1\n', content_without_fm, flags=re.DOTALL)

    # Convert <br> and <br/> to line breaks
    content_without_fm = re.sub(r'<br\s*/?>', '\n', content_without_fm)

    # Remove common div wrappers and structural elements
    div_classes_to_remove = [
        'section-head', 'card-grid', 'card', 'two-col', 'code-block',
        'code-title', 'step-grid', 'step-card', 'callout', 'table-wrap',
        'hero', 'hero-inner', 'hero-copy', 'hero-card', 'hero-actions',
        'hero-chips', 'hero-divider', 'hero-stats', 'anchor-grid',
        'token-list', 'nested-list', 'stat-label', 'stat-value'
    ]

    # Remove divs with specific classes
    for cls in div_classes_to_remove:
        content_without_fm = re.sub(
            rf'<div class="{cls}"[^>]*>',
            '\n',
            content_without_fm
        )

    # Remove all remaining div and span tags (opening and closing)
    content_without_fm = re.sub(r'</?div[^>]*>', '\n', content_without_fm)
    content_without_fm = re.sub(r'</?span[^>]*>', '', content_without_fm)

    # Handle callout boxes - convert to blockquotes with special markers
    callout_patterns = [
        (r'tip', '> **Tip:**'),
        (r'warn', '> **Warning:**'),
        (r'info', '> **Info:**'),
        (r'note', '> **Note:**'),
    ]

    for pattern, prefix in callout_patterns:
        # This is a simple approach - content should already be extracted from divs
        pass

    # Remove any remaining HTML tags
    content_without_fm = re.sub(r'<[^>]+>', '', content_without_fm)

    # Decode HTML entities
    content_without_fm = decode_html_entities(content_without_fm)

    # Clean up excessive newlines (more than 2 consecutive)
    content_without_fm = re.sub(r'\n{4,}', '\n\n\n', content_without_fm)

    # Clean up spaces before newlines
    content_without_fm = re.sub(r' +\n', '\n', content_without_fm)

    # Combine frontmatter and content
    result = frontmatter + content_without_fm

    return result

def process_file(file_path):
    """Process a single markdown file"""
    print(f"Processing: {file_path}")

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Convert HTML to Markdown
        converted = convert_html_to_markdown(content)

        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(converted)

        print(f"  OK Converted successfully")
        return True
    except Exception as e:
        print(f"  ERROR: {e}")
        return False

def main():
    """Main function to process all markdown files"""
    docs_dir = Path(__file__).parent

    # Find all .md files
    md_files = list(docs_dir.rglob('*.md'))

    print(f"Found {len(md_files)} markdown files\n")

    success_count = 0
    fail_count = 0

    for md_file in md_files:
        if process_file(md_file):
            success_count += 1
        else:
            fail_count += 1

    print(f"\n{'='*60}")
    print(f"Conversion complete!")
    print(f"  Success: {success_count}")
    print(f"  Failed: {fail_count}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
