import sys; sys.path.insert(0,'/tmp/claude-0/-home-user-STICKITTY-INC/767c719b-0870-5bda-a61d-f34d3bf62c44/scratchpad/tools')
from measure_lib import *
for h in ["On revient sous","24 h ouvrées.","Vous envoyez.","On construit.","Vos contenus arrivent.","Un périmètre écrit.","Un prix ferme.","Ici, bientôt,","votre vitrine.","On vous","la présente.","Vous décidez.","On reste.","Sur mesure.","Vous décrivez","le projet."]:
    print(f"{h:24s}", *[f"{s}:{width(cin,h,s,0.01):.0f}" for s in (88,96,104,112,120,132,140)])
for t,s,tr in [("Studio web & logiciel · Bordj Bou Arréridj, Algérie",24,0.1),("Studio web & logiciel · Bordj Bou Arréridj, Algérie",22,0.14),("Enraciné en Numidie · bâti sur des idées",30,0)]:
    print(t,s,tr, round(width(mono,t.upper(),s,tr)), round(width(gei,t,s,0)))
print('wordmark Num',width(cin,"Num",72,0.04), 'idea', width(gei,"idea",72), 'Labs', width(cin," Labs",72,0.04))
