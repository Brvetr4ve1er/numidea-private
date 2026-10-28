import sys
from fontTools.ttLib import TTFont
D='/tmp/claude-0/-home-user-STICKITTY-INC/767c719b-0870-5bda-a61d-f34d3bf62c44/scratchpad/ds/numidea/project/fonts/'
def load(names):
    fonts=[TTFont(D+n) for n in names]
    return fonts
def width(fonts, text, size, track=0.0):
    tot=0
    for ch in text:
        cp=ord(ch)
        for f in fonts:
            cmap=f.getBestCmap()
            if cp in cmap:
                g=cmap[cp]; adv=f['hmtx'][g][0]; upm=f['head'].unitsPerEm
                tot+=adv/upm*size + track*size
                break
        else:
            tot+=0.5*size
    return tot
cin=load(['cinzel-700-latin.woff2','cinzel-700-latin-ext.woff2'])
gei=load(['geist-latin.woff2','geist-latin-ext.woff2'])
mono=load(['geist-mono-latin.woff2','geist-mono-latin-ext.woff2'])
cin=load(['cinzel-700-latin.woff2','cinzel-700-latin-ext.woff2'])
gei=load(['geist-latin.woff2','geist-latin-ext.woff2'])
mono=load(['geist-mono-latin.woff2','geist-mono-latin-ext.woff2'])
