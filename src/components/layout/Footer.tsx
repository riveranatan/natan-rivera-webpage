import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: FaGithub },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: FaLinkedinIn },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: FaInstagram },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: FaYoutube },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: FaFacebookF },
  { label: "Email", href: SOCIAL_LINKS.email, icon: FaEnvelope },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="font-body text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
              className="text-text-secondary transition-colors hover:text-primary"
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
