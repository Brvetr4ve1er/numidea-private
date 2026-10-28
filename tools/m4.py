import sys; sys.path.insert(0,'/tmp/claude-0/-home-user-STICKITTY-INC/767c719b-0870-5bda-a61d-f34d3bf62c44/scratchpad/tools')
from measure_lib import *
N=' '
for t in ["Si c'est oui, la page d'accueil","est déjà faite"+N+": on enchaîne sur le reste.","Votre page d'accueil"+N+": 5"+N+"jours ouvrés","à réception de vos contenus.","Dès que le cadrage est","validé ensemble.","Jamais un modèle tout fait","repeint à vos couleurs.","Votre page d'accueil,","en visio de 30"+N+"min.","Faites glisser"+N+":","elle se construit sous vos yeux.","Pas de «"+N+"bonne chance"+N+"» le jour","de la mise en ligne.","Pas de «"+N+"bonne chance"+N+"»","le jour de la mise en ligne.","La décision vous revient."]:
    print(f"{t:50s} {width(gei,t,52):.0f}")
for t in ["NOTRE RÉPONSE →","VOTRE DÉCISION →","VOS CONTENUS →"]:
    print(t, round(width(mono,t,36,0.14)))
print('kicker', round(width(mono,"À VOUS, PUIS À NOUS",40,0.14)))
