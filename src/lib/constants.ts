export const SITE_CONFIG = {
  name: "Natan Rivera",
  title: "Natan Rivera — Software Engineer",
  description:
    "Personal portfolio of Natan Rivera. Software engineer building things for the web.",
  url: "https://natanrivera.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/natanrivera",
  linkedin: "https://linkedin.com/in/natanrivera",
  email: "mailto:hello@natanrivera.com",
} as const;
