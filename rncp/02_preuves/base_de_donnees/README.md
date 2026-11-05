# Modélisation de la base de données

Ces diagrammes correspondent aux modèles SQLAlchemy vérifiés le 5 novembre 2026 dans :

- `backend/app/models/base_model.py` ;
- `backend/app/models/user.py` ;
- `backend/app/models/game.py` ;
- `backend/app/models/score.py`.

Ils remplacent l'ancien schéma qui présentait à tort une entité `PLAYER_PROFILE` et des identifiants numériques.

## MCD — modèle conceptuel de données

Le fichier `mcd.mmd` décrit les objets métier sans dépendre de leur implémentation SQL.

### Entités

- **UTILISATEUR** : personne inscrite sur la plateforme ;
- **JEU** : jeu proposé dans le catalogue ;
- **SCORE** : résultat obtenu par un utilisateur pour un jeu.

### Cardinalités

- du côté de l'utilisateur, la relation accepte de zéro à plusieurs scores ;
- du côté du jeu, la relation accepte de zéro à plusieurs scores ;
- chaque score appartient obligatoirement à un seul utilisateur et concerne obligatoirement un seul jeu.

## MLD — modèle logique de données

Le fichier `mld.mmd` traduit le MCD en trois tables relationnelles :

- `users`, dont `id` est la clé primaire et dont `email` et `username` sont uniques ;
- `games`, dont `id` est la clé primaire ;
- `scores`, dont `id` est la clé primaire et dont `user_id` et `game_id` sont des clés étrangères obligatoires.

Les identifiants sont des UUID enregistrés sous forme de chaînes de 36 caractères. Les champs `created_at` et `updated_at` proviennent du modèle abstrait `BaseModel` partagé par les trois tables.

## Règle du meilleur score

La façade recherche un score existant pour le couple `user_id` / `game_id`. Elle ne remplace sa valeur que si le nouveau résultat est supérieur. L'application conserve donc fonctionnellement le meilleur score de chaque utilisateur pour chaque jeu.

Cette règle est actuellement appliquée par le code métier. La table `scores` ne possède pas de contrainte SQL `UNIQUE(user_id, game_id)`. Le MLD n'affiche donc volontairement pas cette contrainte.

## Suppression et relations

SQLAlchemy configure une suppression en cascade des scores associés lorsqu'un objet utilisateur ou jeu est supprimé par l'ORM. Le schéma SQLite actuellement généré ne déclare toutefois pas de clause SQL `ON DELETE CASCADE`. Cette différence ne doit pas être confondue avec une contrainte physique de la base.

## Légende

- `PK` : clé primaire ;
- `FK` : clé étrangère ;
- `UK` : valeur unique ;
- `||` : exactement un ;
- `o{` : de zéro à plusieurs.
