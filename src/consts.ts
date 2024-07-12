import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Basile's Portfolio",
  EMAIL: "roux.basi@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Basile Roux's Portfolio, feel free to explore my projects, look at my cv, contact me...",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Curriculum Vitae",
  DESCRIPTION: "Where I have worked and what I have done, discover more about my life.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/EneVyctis"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/basile-roux-23066224b/",
  }
];
