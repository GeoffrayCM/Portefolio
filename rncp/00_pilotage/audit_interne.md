# Audit RNCP 5 - OG Game Challenge

Date de l'audit : 3 novembre 2026

## Conclusion

Le projet constitue une bonne base full-stack pour le titre DWWM : front HTML/CSS/JavaScript, API REST Flask, persistance SQLAlchemy/SQLite, authentification JWT et trois jeux intégrés. Les six compétences devant obligatoirement être montrées par le projet sont présentes dans le code, mais plusieurs preuves et sécurisations manquent encore avant la présentation au jury.

## Matrice des compétences DWWM

| Compétence | État | Preuves existantes | Travail restant |
|---|---|---|---|
| 1. Installer et configurer l'environnement | Partiel | `requirements.txt`, structure front/back | Ajouter `.env.example`, procédure d'installation reproductible et configurations dev/prod |
| 2. Maquetter les interfaces | À documenter | Interfaces et captures possibles | Fournir maquettes desktop/mobile et parcours entre les écrans |
| 3. Réaliser les interfaces statiques | Couvert | Pages HTML, CSS global et responsive | Sélectionner des extraits commentés et contrôler l'accessibilité |
| 4. Développer les interfaces dynamiques | Couvert | Appels API, session, classements, jeux JavaScript | Ajouter des tests front et expliquer les flux utilisateur |
| 5. Mettre en place une base relationnelle | Couvert | Modèles User, Game, Score et relations SQLAlchemy | Produire MCD/MLD, schéma physique et script/migration |
| 6. Développer l'accès aux données | Couvert | Repository SQLAlchemy et requêtes métier | Ajouter tests, transactions/rollback et expliquer la protection contre les injections |
| 7. Développer les composants métier serveur | Couvert mais fragile | Façade, authentification et gestion du meilleur score | Corriger l'endpoint users, protéger les scores par JWT et renforcer la validation |
| 8. Documenter le déploiement | Insuffisant | README généraux | Ajouter procédure de déploiement, variables, serveur WSGI, HTTPS et diagnostic |

## Défauts techniques prioritaires

### P0 - À corriger avant la soutenance

Les quatre défauts P0 relevés lors du premier audit ont été corrigés :

1. l'inscription passe uniquement par `POST /api/v1/auth/register` ;
2. les scores utilisent l'identité du JWT et non un `user_id` fourni par le navigateur ;
3. les secrets Flask et JWT sont chargés depuis un fichier `.env` ignoré par Git ;
4. sept tests d'intégration automatisés couvrent les principaux parcours API et de sécurité.

### P1 - Fortement recommandé

1. CORS est ouvert à toutes les origines.
2. La configuration ne sépare pas proprement développement, test et production.
3. Le projet utilise `db.create_all()` mais pas de migrations versionnées.
4. L'API front utilise une URL locale fixe (`127.0.0.1:5001`).
5. Le déploiement de production n'est pas documenté et aucun serveur WSGI n'est configuré.
6. La politique de mot de passe est trop faible et les messages/validations peuvent être renforcés.
7. Il manque une démonstration formelle RGPD : mentions légales, politique de conservation et suppression de compte/données.

## Space Runner

La version intégrée a été alignée sur les fonctionnalités de la version standalone :

- miroir du dragon et réflexion des tirs ;
- calcul de précision ;
- boucle de simulation stabilisée ;
- gestion améliorée des musiques et des reprises ;
- commandes AZERTY et QWERTY ;
- écran final et crédits ;
- panneau des touches et améliorations d'accessibilité ;
- portail final enrichi ;
- conservation de la soumission des scores vers l'API du portfolio.

Les fichiers JavaScript passent le contrôle de syntaxe et la page a été chargée localement avec tous ses modules et ressources. Le panneau des commandes et le démarrage ont été vérifiés dans le navigateur.

## Ordre de travail conseillé

1. Produire MCD, MLD, schéma physique et procédure de déploiement.
2. Transformer les tests existants en jeu d'essai présenté dans le dossier.
3. Réaliser un contrôle ciblé sécurité/accessibilité/RGPD avec preuves avant-après.
4. Construire le dossier de 30 à 50 pages à partir des preuves retenues.
5. Préparer le diaporama de 35 minutes et les questions techniques.
