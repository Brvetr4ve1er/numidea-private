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
heads=["Ici, bientôt,","votre vitrine.","Vous décrivez","le projet.","On revient","sous 24 h ouvrées.","Un périmètre écrit.","Un prix ferme.","Vos contenus","arrivent.","Les murs montent.","Vous envoyez.","Sur mesure.","On vous","la présente.","On vous la présente.","Vous décidez.","On reste.","Puis un prix ferme."]
for size in (96,104,112,120,132):
    print('--',size)
    for h in heads:
        print(f"{h:24s} {width(cin,h,size,0.01):7.0f}")
subs=["Faites glisser : elle se construit sous vos yeux.","Deux minutes, par écrit ou de vive voix. En français, anglais ou arabe.","D'abord avec nos questions.","Dès que le cadrage est validé ensemble.","Votre page d'accueil : 5 jours ouvrés à réception de vos contenus.","Jamais un modèle tout fait repeint à vos couleurs.","Votre page d'accueil, en visio de 30 min.","Si c'est oui, la page d'accueil est déjà faite : on enchaîne sur le reste.","Pas de « bonne chance » le jour de la mise en ligne."]
print('== geist 52 per-word wrap at 972')
def wrap(fonts,text,size,maxw):
    words=text.split(' ');lines=[];cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if width(fonts,t,size)<=maxw: cur=t
        else: lines.append(cur);cur=w
    lines.append(cur);return lines
for s in subs:
    for size in (52,56):
        L=wrap(gei,s,size,972)
        print(size,len(L),[round(width(gei,l,size)) for l in L],L)
print('mono 30 widths')
for t in ["Studio web & logiciel · Bordj Bou Arréridj, Algérie","Enraciné en Numidie · bâti sur des idées","À vous","À vous, puis à nous","Vous et nous","LIEN EN BIO","FR · EN · AR"]:
    print(t, round(width(mono,t.upper(),30,0.14)), round(width(mono,t.upper(),26,0.14)))
