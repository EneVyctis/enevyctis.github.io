---
company: "MFP Michelin"
role: "[Stage] Developper Sécurité offensive CERT"
lang: "en"
dateStart: "03/03/2025"
dateEnd: "14/09/2025"
repoURL: "https://github.com/certmichelin"
---

<kbd>Golang</kbd> <kbd>Git</kbd> <kbd>Open Source</kbd> <kbd>Ansible</kbd> <kbd>Azure</kbd> <kbd>Nginx</kbd> <kbd>Méthode agile</kbd>

As part of my engineering studies at TélécomSudParis, and more specifically during my final-year internship, I had the opportunity to join the Red Team CERT (Computer Emergency Response Team) as an open-source tools developer.

My mission was to get familiar with and then contribute to open-source tools such as AzureHound and BloodHound by adding new features tailored to Michelin CERT’s needs. During this highly rewarding internship, I worked on all aspects of software development, from requirements analysis to design, automation, and testing the solution on production data. Without detailing every step, the key points of my mission were:

- Learning and documenting the BloodHound and AzureHound tools, as well as the Azure Entra ID environment.
- Adding the features requested by the Michelin CERT team, namely the integration of Microsoft 365 groups and user-to-user interactions (see Michelin CERT’s forks of AzureHound and BloodHound for more details).
- Ensuring contributions were compliant in view of a pull request to the main project. This included writing the necessary tests and documentation, as well as opening a GitHub issue. Unfortunately, at the time of writing, I still have not received any response from the maintainers who were supposed to get back to me.
- Creating a side project, DelveHound (private project), to handle user interactions. This new collector, developed in Python, leverages an API different from GraphAPI (used by AzureHound) and makes it possible to list user interactions with fewer privileges.
- Setting up CI/CD pipelines for the releases of our AzureHound and BloodHound forks, as well as for DelveHound. All software is available as Docker images on DockerHub at [this location](https://hub.docker.com/search?q=deddobifu)
- Building a simple Nginx-based website to make AzureHound and DelveHound data available to Michelin analysts. Access to the site was restricted by certificate and basic authentication.
- Developing an Ansible script to automate the data collection process (Docker containers are launched automatically once a week on the infrastructure, data is published on the site, and cleaned monthly according to dataset-specific policies).
- Writing documentation on data usage, including how to install BloodHound on Michelin workstations, keeping in mind that non-technical staff should be able to follow it.
- Drafting a "Threat Advisory" on the potential risks posed by guest users in an Azure environment. This was not directly part of my mission but came in addition, after I came across this [article](https://www.beyondtrust.com/blog/entry/restless-guests) while working with a guest account for privilege testing on DelveHound. The advisory is largely based on the article, with some personal additions stemming from tests I conducted on the Azure portal.

From this internship, I take away the challenges of software development without proper documentation (the BloodHound project in particular lacks comments and documentation), the inertia that can exist when contributing to open-source projects (in our case, the official project integration was abandoned even though the issue [is still open](https://github.com/SpecterOps/BloodHound/issues/1359)) but also the fact that motivation and the will to learn can take you very far. I successfully completed this mission despite having no prior knowledge of several of the tools I used: Go, Azure, BloodHound and AzureHound of course, but also Ansible, Nginx, and CI/CD, which I had only briefly touched upon during my studies.