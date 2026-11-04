# Matrice des compétences DWWM

Document de pilotage interne - version initiale vérifiée le 3 novembre 2026.

## Règle de lecture

- **Couvert** : la compétence est réellement mise en œuvre dans le code.
- **Partiellement documenté** : la compétence existe, mais la preuve destinée au jury n'est pas encore prête.
- **À produire** : le document ou la capture manque ; cela ne signifie pas nécessairement que le code manque.

Les compétences 2 à 7 doivent obligatoirement être démontrées par le projet. Les compétences 1 et 8 peuvent également être approfondies pendant l'entretien technique.

## Vue d'ensemble

| N° | Compétence officielle | Mise en œuvre | Preuve RNCP | Priorité |
|---:|---|---|---|---|
| 1 | Installer et configurer son environnement de travail | Couvert | Partiellement documentée | Moyenne |
| 2 | Maquetter des interfaces utilisateur web ou web mobile | À confirmer | À produire | Haute |
| 3 | Réaliser des interfaces utilisateur statiques web ou web mobile | Couvert | À sélectionner | Haute |
| 4 | Développer la partie dynamique des interfaces utilisateur web ou web mobile | Couvert | À sélectionner | Haute |
| 5 | Mettre en place une base de données relationnelle | Couvert | Diagrammes à refaire | Haute |
| 6 | Développer des composants d'accès aux données SQL et NoSQL | Couvert | À sélectionner | Haute |
| 7 | Développer des composants métier côté serveur | Couvert | À sélectionner | Haute |
| 8 | Documenter le déploiement d'une application dynamique web ou web mobile | Partiel | À produire | Moyenne |

## 1. Installer et configurer son environnement de travail

### Éléments existants

- dépendances Python dans `og-game-challenge/backend/requirements.txt` ;
- configuration Flask dans `og-game-challenge/backend/config.py` ;
- modèle de variables dans `og-game-challenge/backend/.env.example` ;
- protection du fichier `.env` par `.gitignore` ;
- instructions d'installation et de test dans le README du backend ;
- séparation claire `frontend`, `backend`, `docs` et `tests`.

### État

**Compétence couverte et partiellement documentée.**

### Minimum restant

- vérifier les instructions sur une installation propre ;
- ajouter une courte fiche recensant versions, commandes de lancement et ports ;
- conserver une capture de l'API lancée ou de Swagger comme preuve secondaire.

### Justification

Il n'est pas nécessaire d'ajouter Docker ou une chaîne CI/CD pour démontrer cette compétence. Une installation locale reproductible et expliquée suffit pour le projet présenté.

## 2. Maquetter des interfaces utilisateur web ou web mobile

### Éléments existants

- interfaces finales desktop et responsive ;
- parcours fonctionnel entre accueil, inscription, connexion, jeux et classement ;
- anciennes documentations de conception et user stories.

### État

**À confirmer.** Aucune maquette source clairement identifiable n'a été trouvée dans le dépôt actuel.

### Minimum restant

- rechercher les maquettes réalisées au début du projet dans Canva, Figma, les anciens chats ou les fichiers personnels ;
- retenir une ou deux interfaces représentatives ;
- montrer au minimum une adaptation desktop et mobile ;
- produire un schéma simple de l'enchaînement des écrans.

### Justification

Une capture du site terminé ne remplace pas complètement une maquette. Il faut démontrer une étape de conception antérieure ou, à défaut, reconstituer honnêtement un document de conception correspondant à l'application finale, sans prétendre qu'il s'agit d'un original ancien.

## 3. Réaliser des interfaces utilisateur statiques

### Éléments existants

- huit pages HTML dans `frontend/html` ;
- feuilles CSS globales et spécifiques ;
- navigation, formulaires, cartes de jeux, tableau de classement et interface des jeux ;
- balises viewport, règles responsive et premiers attributs d'accessibilité ;
- panneau des commandes Space Runner et prise en charge de la réduction des animations.

### État

**Compétence couverte, preuves à sélectionner.**

### Minimum restant

- sélectionner deux interfaces significatives plutôt que toutes les pages ;
- préparer une capture desktop et une capture mobile ;
- choisir un court extrait HTML et un court extrait CSS ;
- expliquer responsive, sémantique et accessibilité sans prétendre à une conformité RGAA complète.

### Justification

Le dossier doit montrer les choix les plus significatifs. Multiplier les captures ou reproduire des fichiers entiers affaiblirait l'explication.

## 4. Développer la partie dynamique des interfaces utilisateur

### Éléments existants

- appels API centralisés dans `frontend/js/api.js` ;
- inscription et connexion dynamiques ;
- session utilisateur et navigation adaptée ;
- chargement des jeux et des classements depuis l'API ;
- soumission des scores ;
- trois jeux JavaScript interactifs ;
- Space Runner découpé en modules spécialisés.

### État

**Compétence couverte, preuves à sélectionner.**

### Minimum restant

- choisir un flux principal : inscription/connexion ou fin de partie/enregistrement du score ;
- produire un schéma de séquence à jour ;
- sélectionner un extrait de l'appel API et un extrait de mise à jour de l'interface ;
- prévoir une démonstration courte et reproductible.

### Justification

Space Runner constitue une preuve forte de JavaScript dynamique, mais le flux score-classement montre mieux l'intégration complète entre le navigateur et l'API.

## 5. Mettre en place une base de données relationnelle

### Éléments existants

- SQLite configuré avec Flask-SQLAlchemy ;
- tables `users`, `games` et `scores` ;
- clés primaires UUID ;
- clés étrangères de `scores` vers `users` et `games` ;
- relations SQLAlchemy et contraintes d'unicité ;
- initialisation et données de départ pour les jeux.

### État

**Compétence couverte, preuves actuelles incohérentes.**

### Point de vigilance

Le fichier existant `docs/diagrams/er_diagram.mmd` décrit encore une table `PLAYER_PROFILE` et des identifiants numériques. Ce schéma ne correspond plus aux modèles finaux et ne doit pas être remis au jury en l'état.

### Minimum restant

- produire un MCD correspondant exactement aux trois modèles actuels ;
- produire un MLD ou schéma relationnel avec types, clés et cardinalités ;
- fournir un schéma physique ou script SQL représentatif ;
- vérifier tous les noms avec les modèles SQLAlchemy avant validation.

### Justification

Il n'est pas utile de remplacer SQLite par PostgreSQL pour le RNCP. L'objectif est de démontrer une base relationnelle cohérente, ses contraintes et son utilisation.

## 6. Développer des composants d'accès aux données SQL et NoSQL

### Éléments existants

- repository générique dans `backend/app/repositories/sqlalchemy_repository.py` ;
- création, lecture, liste et suppression via SQLAlchemy ;
- requêtes filtrées par email, nom d'utilisateur, jeu et utilisateur ;
- tri décroissant du classement ;
- utilisation de `db.session.get`, `add`, `commit` et `delete` ;
- tests d'intégration exécutés sur une base SQLite temporaire.

### État

**Compétence couverte, preuves à sélectionner.**

### Minimum restant

- sélectionner le repository et la requête de classement comme exemples ;
- expliquer le rôle de l'ORM et la séparation avec la logique métier ;
- fournir les résultats d'un ou deux tests liés à la persistance ;
- expliquer pourquoi le projet utilise SQL sans inventer un usage NoSQL absent.

### Justification

Le libellé mentionne « SQL et NoSQL », mais le projet n'a pas besoin d'ajouter artificiellement une base NoSQL. La preuve doit rester centrée sur les composants d'accès réellement développés.

## 7. Développer des composants métier côté serveur

### Éléments existants

- façade métier dans `backend/app/services/facade.py` ;
- inscription avec contrôle d'unicité ;
- authentification et vérification du mot de passe chiffré ;
- génération et vérification JWT ;
- autorisation de consultation du profil ;
- association sécurisée d'un score à l'identité du JWT ;
- conservation du meilleur score ;
- calcul du classement ;
- tests automatisés des principaux comportements et refus d'accès.

### État

**Compétence couverte, preuves à sélectionner.**

### Minimum restant

- retenir deux règles métier : authentification et meilleur score ;
- montrer la séparation route, façade, repository et modèle ;
- intégrer un résultat de test nominal et un résultat de sécurité ;
- préparer une explication simple du JWT et du hachage Bcrypt.

### Justification

Ces éléments sont plus pertinents pour le jury que l'ajout de nouvelles fonctionnalités. Ils démontrent déjà logique métier, validation et sécurité côté serveur.

## 8. Documenter le déploiement d'une application dynamique

### Éléments existants

- instructions locales du backend ;
- dépendances listées ;
- configuration par variables d'environnement ;
- endpoint de santé ;
- séparation front/API/base de données.

### État

**Partiellement couvert.** Le lancement local est documenté, mais il n'existe pas encore de procédure complète de déploiement ou de mise en production.

### Minimum restant

- documenter les prérequis et l'ordre de démarrage ;
- expliquer la configuration de l'URL de l'API et des variables d'environnement ;
- décrire sauvegarde de la base, HTTPS, serveur WSGI et contrôle de santé à un niveau raisonnable ;
- indiquer clairement ce qui a réellement été déployé et ce qui constitue une recommandation de production.

### Justification

Une documentation honnête et reproductible est suffisante. Il n'est pas nécessaire d'ajouter Docker, Kubernetes ou une CI/CD uniquement pour enrichir le dossier.

## Conclusion de la matrice

Le projet couvre techniquement les compétences 1 et 3 à 7. La compétence 2 dépend de la récupération ou de la production transparente des maquettes. La compétence 8 nécessite une documentation ciblée, pas une refonte du projet.

Avant de rédiger le dossier, les trois preuves prioritaires sont donc :

1. les maquettes et le parcours des écrans ;
2. le MCD/MLD conforme aux modèles finaux ;
3. la procédure de déploiement minimale et vérifiée.

La liste détaillée des captures sera établie seulement après validation de cette matrice.
