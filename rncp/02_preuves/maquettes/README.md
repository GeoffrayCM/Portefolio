# Maquettes reconstituées — OG Game Challenge

## Statut du document

Ces maquettes ont été **reconstituées le 5 novembre 2026 à partir de l'application finale**. Elles ne sont pas présentées comme des livrables créés au début du projet.

Elles servent à formaliser les choix d'interface et à démontrer la compétence « Maquetter des interfaces utilisateur web ou web mobile » avec une preuve claire et honnête.

## Périmètre retenu

Le catalogue des jeux a été choisi comme écran représentatif, car il réunit :

- la navigation principale ;
- un titre et une consigne ;
- une liste de contenus chargés dynamiquement ;
- des cartes avec deux actions distinctes ;
- une adaptation desktop et mobile.

Fichiers produits :

- `catalogue_desktop.svg` : disposition en trois colonnes ;
- `catalogue_mobile.svg` : navigation réorganisée et cartes empilées ;
- `parcours_utilisateur.mmd` : enchaînement simplifié des principaux écrans.

## Choix d'interface

### Version desktop

- navigation et identification sur une même ligne ;
- trois cartes visibles côte à côte pour comparer rapidement les jeux ;
- bouton principal « Jouer » et bouton secondaire « Classement » ;
- largeur de contenu limitée pour conserver une lecture confortable.

### Version mobile

- navigation répartie sur deux lignes ;
- titre redimensionné ;
- cartes placées sur une seule colonne ;
- boutons occupant toute la largeur disponible ;
- contenu conservé sans modifier les fonctionnalités.

## Lien avec la réalisation

Les maquettes décrivent l'organisation et le comportement responsive. Les captures placées dans `../captures_front/mobile/` montrent le résultat réellement exécuté sur téléphone.

Les commandes tactiles des jeux ne font pas partie de cette étape : l'adaptation porte ici sur la consultation du site, les formulaires, le catalogue et le classement.
