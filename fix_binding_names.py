#!/usr/bin/env python3
"""Fix binding names with spaces in markdown files."""

import os
import re
from pathlib import Path

def fix_binding_names(file_path):
    """Fix binding names that contain spaces by replacing spaces with underscores."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Pattern to match binding_name with spaces
    # Matches: "binding_name": "#word word", "binding_name": "#word word word", etc.
    pattern = r'"binding_name":\s*"(#[a-z_]+)\s+([a-z_]+[^"]*)"'

    def replace_space_with_underscore(match):
        prefix = match.group(1)  # #word
        rest = match.group(2)     # word word...
        # Replace all spaces with underscores in the rest
        fixed_rest = rest.replace(' ', '_')
        return f'"binding_name": "{prefix}_{fixed_rest}"'

    content = re.sub(pattern, replace_space_with_underscore, content)

    # Also fix in summary tags
    summary_pattern = r'<summary><strong>(#[a-z_]+)\s+([a-z_]+[^<]*)</strong></summary>'

    def replace_summary_space(match):
        prefix = match.group(1)  # #word
        rest = match.group(2)     # word word...
        fixed_rest = rest.replace(' ', '_')
        return f'<summary><strong>{prefix}_{fixed_rest}</strong></summary>'

    content = re.sub(summary_pattern, replace_summary_space, content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """Fix all binding files."""
    binding_dir = Path(r'C:\Users\user\Documents\git\jsonui\jsonui-\docs\binding')

    fixed_count = 0
    for md_file in binding_dir.glob('*.md'):
        if fix_binding_names(md_file):
            print(f"Fixed: {md_file.name}")
            fixed_count += 1
        else:
            print(f"No changes: {md_file.name}")

    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == '__main__':
    main()
