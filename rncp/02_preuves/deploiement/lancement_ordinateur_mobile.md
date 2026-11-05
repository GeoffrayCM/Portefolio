# Lancement local sur ordinateur et téléphone

## Objectif

Cette procédure lance le frontend, l'API Flask et la base SQLite sur un
ordinateur. Un téléphone connecté au même Wi-Fi peut ensuite ouvrir le site et
utiliser les pages générales.

Les jeux restent conçus en priorité pour le clavier. Cette procédure n'ajoute
pas de commandes tactiles.

## 1. Lancer l'API

Dans un premier terminal :

```bash
cd /chemin/vers/Portefolio/og-game-challenge/backend
python3 -m pip install -r requirements.txt
python3 run.py
```

Contrôle attendu :

```text
Running on http://127.0.0.1:5001
```

L'API écoute également sur l'adresse privée de l'ordinateur grâce à la
configuration `host="0.0.0.0"` de `run.py`.

## 2. Lancer le frontend

Dans un second terminal :

```bash
cd /chemin/vers/Portefolio/og-game-challenge/frontend
python3 -m http.server 8000 --bind 0.0.0.0
```

## 3. Ouvrir sur l'ordinateur

```text
http://127.0.0.1:8000/html/index.html
```

Le frontend contacte automatiquement :

```text
http://127.0.0.1:5001/api/v1
```

## 4. Ouvrir sur un téléphone

Le téléphone et l'ordinateur doivent être connectés au même Wi-Fi.

Sur macOS, rechercher l'adresse locale :

```bash
ipconfig getifaddr en0
```

Exemple de résultat :

```text
192.168.1.55
```

Ouvrir ensuite sur le téléphone :

```text
http://192.168.1.55:8000/html/index.html
```

Le JavaScript utilise le nom d'hôte présent dans l'adresse du navigateur. Dans
cet exemple, les appels sont donc envoyés à :

```text
http://192.168.1.55:5001/api/v1
```

## 5. Contrôles

Vérifier successivement :

1. affichage de l'accueil sans défilement horizontal ;
2. navigation vers l'inscription et la connexion ;
3. création ou connexion d'un utilisateur ;
4. affichage du catalogue des jeux ;
5. consultation du classement ;
6. adaptation des cartes et du tableau à la largeur du téléphone.

Si le site s'affiche mais que l'API ne répond pas :

- vérifier que Flask fonctionne toujours sur le port 5001 ;
- accepter l'autorisation du pare-feu macOS sur le réseau privé ;
- vérifier que les deux appareils utilisent le même Wi-Fi ;
- vérifier l'adresse IP locale, qui peut changer après une reconnexion.

## 6. Limites déclarées

- le site complet n'est accessible que lorsque l'ordinateur et les deux
  serveurs locaux sont allumés ;
- GitHub Pages peut héberger les fichiers statiques, mais pas l'API Flask ou la
  base SQLite côté serveur ;
- Space Runner peut être redimensionné, mais il ne possède pas encore de
  commandes tactiles ;
- le déploiement public du backend fera l'objet d'une documentation distincte
  seulement s'il devient nécessaire.
