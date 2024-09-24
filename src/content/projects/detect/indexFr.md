---
title: "Detect"
description: "a school project on wireless technologies"
date: "Mar 12 2024"
lang: "fr"
repoURL: "https://github.com/EneVyctis/Detect"
---

## Contexte

### Équipe

- Corentin Lombard
- Alicia Thomas
- Mathieu Griffon
- Antonin Champetier
- moi-même

Ce projet a été réalisé durant ma deuxième année à Télécom SudParis pour le cours "Internet sans fil : Concepts, Technologies, Architectures."

## Exigences du projet

Les exigences étaient aussi simples que : "Réalisez un projet qui utilise certaines technologies sans fil (Wi-Fi, Bluetooth...) dans un temps limité (10 à 20h par membre de l'équipe)."

## Detect

Comme vous pouvez le deviner d'après le nom du projet, il s'agit essentiellement du début d'un projet. S'il avait été mené à bien, il aurait permis d'estimer le nombre de personnes présentes à un endroit spécifique au fil du temps, en se basant sur les appareils connectés des gens tels que leurs téléphones, écouteurs, etc.

À l'aide d'un microcontrôleur ESP32-S3, nous écoutions des paquets Wi-Fi et Bluetooth spécifiques. L'ESP envoyait ensuite les adresses MAC découvertes à un serveur Python qui stockait toutes les données, les nettoyait de temps en temps (toutes les 5 minutes si je me souviens bien), et pouvait être interrogé pour obtenir des données, comme le nombre de personnes présentes dans la zone.

C'était un petit projet, et je n'ai pas vraiment beaucoup plus à dire à ce sujet. Puisque nous avons utilisé l'exemple simple_sniffer du dépôt officiel ESP-IDF comme point de départ, c'était une excellente occasion de s'habituer à comprendre le code d'autres personnes. En bonus, le code était écrit en C, un langage que nous ne maîtrisions pas encore à ce moment-là. Cependant, j'ai été chargé de coder le serveur, et j'ai choisi de le faire en Python, car la rapidité n'était pas nécessaire et c'était bien plus simple qu'en C.