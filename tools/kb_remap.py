"""Remap 'path › N' line citations in the hand-written KB from BASE_REV to the working tree."""
import re, subprocess, sys, difflib, glob, os
W = sys.argv[1]; BASE_REV = sys.argv[2]; APPLY = '--apply' in sys.argv
os.chdir(W)
changed = subprocess.run(['git', 'diff', '--name-only', BASE_REV, '--'], capture_output=True, text=True).stdout.split()
changed = [c for c in changed if not c.startswith('knowledge-base/')]
maps = {}
for f in changed:
    try: old = subprocess.run(['git', 'show', f'{BASE_REV}:{f}'], capture_output=True, text=True, check=True).stdout.split('\n')
    except subprocess.CalledProcessError: continue
    new = open(f, encoding='utf8').read().split('\n')
    m = {}
    for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(None, old, new, autojunk=False).get_opcodes():
        for k in range(i1, i2):
            if tag == 'equal' or (tag == 'replace' and i2 - i1 == j2 - j1): m[k + 1] = j1 + (k - i1) + 1
            else: m[k + 1] = None   # the cited line itself changed: report, do not guess
    maps[f] = m
files = ['knowledge-base/Home.md'] + sorted(glob.glob('knowledge-base/Maps/*.md'))
cite = re.compile(r'(?<![\w/.-])([\w./-]+\.(?:html|mjs|js|css|md|txt|xml|json)) › ([0-9][0-9]*(?:\s*[–-]\s*[0-9]+)?(?:,\s*[0-9]+(?:\s*[–-]\s*[0-9]+)?)*)')
num = re.compile(r'[0-9]+')
total = 0
for kb in files:
    src = open(kb, encoding='utf8').read()
    def sub(mo):
        global total
        path, nums = mo.group(1), mo.group(2)
        if path not in maps: return mo.group(0)
        # a section anchor ("› 01 HERO", "› 08 FAQ"), not a line number
        if re.match(r'0\d', nums) or re.match(r'\s+[A-Z]', mo.string[mo.end():]): return mo.group(0)
        m = maps[path]
        def one(n):
            v = m.get(int(n.group(0)))
            if v is None: print(f'  !! {kb}: {path} › {n.group(0)} — the cited line changed; check by hand'); return n.group(0)
            return str(v)
        out = num.sub(one, nums)
        if out != nums:
            total += 1; print(f'  {kb}: {path} › {nums} → {out}')
        return f'{path} › {out}'
    res = cite.sub(sub, src)
    if APPLY and res != src: open(kb, 'w', encoding='utf8').write(res)
print('citations remapped:', total, '(applied)' if APPLY else '(dry run)')
