import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="font-body text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-text-secondary transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-text-secondary transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.email}
            className="font-body text-xs text-text-secondary transition-colors hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
