---
title: "Detect"
description: "a school project on wireless technologies"
date: "Mar 12 2024"
repoURL: "https://github.com/EneVyctis/Detect"
---

## Context

### Team

- Corentin Lombard
- Alicia Thomas
- Mathieu Griffon
- Antonin Champetier
- myself

This project took place during my second year at Télécom SudParis for the course "Wireless Internet: Concepts, Technologies, Architectures."

### Project requirements

The requirements were as simple as: "Do a project that uses some wireless technologies (Wi-Fi, Bluetooth...) in a limited amount of time (10-20h per team member)."

### Detect

As you can tell from the project name, it is essentially just the start of a project. If the project were completed, it would be able to approximate the number of people present at a specific place over time based on people's connected devices such as their phones, headphones...

Using an ESP32-S3 microcontroller, we listen for specific Wi-Fi and Bluetooth packets. The ESP then sends the discovered MAC addresses to a Python server that stores everything, cleans things up every once in a while (every 5 minutes if I remember correctly), and can be queried for data, such as the number of people present in the area.

It was a small project, and I don't really have much more to say. Since we used the simple_sniffer example from [the official ESP-IDF repository](https://github.com/espressif/esp-idf/tree/master/examples/network) as a starting point, it was a great experience to get used to understanding other people's code. The bonus was that it was written in C, a language we were not familiar with at that time. However, I was asked to code the server, and I chose to do it in Python since there was no need for speed and it was much easier than in C.