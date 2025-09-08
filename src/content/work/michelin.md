---
company: "MFP Michelin"
role: "[Stage] Developper Sécurité offensive CERT"
lang: "fr"
dateStart: "03/03/2025"
dateEnd: "14/09/2025"
repoURL: "https://github.com/certmichelin"
---

<kbd>Golang</kbd> <kbd>Git</kbd> <kbd>Open Source</kbd> <kbd>Ansible</kbd> <kbd>Azure</kbd> <kbd>Nginx</kbd> <kbd>Méthode agile</kbd>

Dans le cadre de ma formation d'ingénieur à TélécomSudParis, et plus précisément à l'occasion de mon stage de fin d'études. J'ai pu être intégré à l'équipe Red Team CERT
(Computer Emergency Response Team) en tant que développeur d'outils open source.  

Ma mission était de prendre en main puis de contribuer à des outils open source tels qu'AzureHound et BloodHound en y ajoutant des fonctionnalités inédites conformément aux besoins du CERT Michelin. Lors de ce stage très enrichissant, j'ai pu travailler sur toutes les facettes du développement logiciel, de l'étude du besoin à la conception, l'automatisation et le test de la solution sur des données de production. Sans détailler la totalité des étapes, les points clefs de ma mission ont été


- Prise en main et documentation des outils BloodHound et AzureHound, ainsi que de l'environnement Azure Entra ID
- Ajout des fonctionnalités voulues par l'équipe du CERT Michelin, à savoir l'ajout des groupes Microsoft 365 et des interactions entre utilisateurs (voir les forks AzureHound et BloodHound du CERT Michelin pour plus de détails)
- Mise en conformité des contributions en vue d'une pull request vers le projet principal. Celle-ci inclut les tests et la documentation nécessaire à la contribution ainsi que l'ouverture d'une issue GitHub. À la date où j'écris ces lignes, je n'ai malheureusement toujours pas eu de réponse des mainteneurs qui étaient supposés revenir vers moi.
- Création d'un projet annexe, DelveHound (projet privé) pour les interactions utilisateurs. Ce nouveau récolteur, que j'ai fait en python, exploite une API différente de la GraphAPI (utilisée par AzureHound) et permet de lister les interactions utilisateurs avec moins de droits. 
- Création des CI/CD pour les releases de nos forks AzureHound et BloodHound, ainsi que pour DelveHound. Tous les logiciels sont disponibles en version Docker sur DockerHub à [cet emplacement](https://hub.docker.com/search?q=deddobifu).
- Création d'un site très simple via Nginx pour mettre à disposition des analystes Michelin les données récoltées par AzureHound et DelveHound. L'accès à ce site est restreint par certificat et basic auth.
- Création d'un script Ansible pour automatiser le déploiement de la récolte (les dockers sont automatiquement lancés 1 fois par semaine sur l'infrastructure, les données sont mises à disposition sur le site automatiquement et nettoyer tous les mois selon une politique propre à chaque jeu de données).
- Création de documentation sur l'exploitation des données et notamment sur l'installation de Bloodhound sur les postes Michelin en gardant à l'esprit que des personnes non techniques doivent pouvoir le faire.
- Rédaction d'un "Threat Advisory" ou avis de menace sur les potentiels risques que représente un utilisateur invité dans un environnement Azure. Ce point n'est pas directement lié à ma mission mais s'est fait en plus de celle-ci lorsque je suis tombé sur [cet article](https://www.beyondtrust.com/blog/entry/restless-guests) alors que j'avais en mes mains un compte invité dû à des tests de droits d'exécution que je réalisais sur DelveHound. L'avis de menace se repose très largement sur l'article avec quelques ajouts personnels dus à des tests que j'ai effectué sur le portail azure.

Je retiens de ce stage la difficulté qu'est le développement logiciel sans documentation adéquate (le projet Bloodhound manque particulièrement de commentaires et de documentation). L'inertie qui peut exister lorsque l'on souhaite contribuer à un projet (dans notre cas, l'ajout des fonctionnalités au projet officiel a été abandonné [même si l'issue existe encore](https://github.com/SpecterOps/BloodHound/issues/1359)). Mais également que la motivation et l'envie d'apprendre peuvent porter très loin puisque j'ai mené cette mission à bien sans connaissance préalable de plusieurs des outils utilisés : le Go, Azure, BloodHound et AzureHound bien sûr, mais également Ansible et Nginx ainsi que la CI/CD que je n'avais que survolé lors de mes études. 