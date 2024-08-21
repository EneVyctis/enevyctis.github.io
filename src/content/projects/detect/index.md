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

This project took place in my second year at Télecom SudParis for the course "Wireless Internet: Concepts, Technologies, Architectures".

### Project requirements

The requirements were as simple as : "Do a project that uses some wireless technologies (Wi-Fi, Bluetooth...) in a limited amount of time(10-20h per team member)"

## Detect

As you can see with the project name, it is eventually just the start of a project. If the project was over, it would be able to make an approximation
of the amount of people present at a specific place over time based on people's connected devices such as their phone, headphone...

Using ESP32-S3 microcontroller, we listen for specific Wi-Fi and Bluetooth packets. The ESP then send the discovered MAC address to a python server that store everything, clean things up every once in a while (5 minutes if I remember well) and can be asked for data such as the amount of people present in the area.

It was a small project and I really don't have much more to say. Since we used as a starter point the [simple_sniffer example](https://github.com/espressif/esp-idf/tree/master/examples/network) from the official esp-idf repository, it was a great experience to get used to understand other people's code. The bonus was that it was written in C, a langage we were not familiar with at that time.
However, I was asked to code the server and I chose to code it in python since there were no need for speed and it was way easier than in C.
