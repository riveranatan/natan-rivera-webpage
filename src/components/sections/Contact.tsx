import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SOCIAL_LINKS } from "@/lib/constants";

const SOCIALS = [
  { label: "GitHub", href: SOCIAL_LINKS.github },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "YouTube", href: SOCIAL_LINKS.youtube },
  { label: "Facebook", href: SOCIAL_LINKS.facebook },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <AnimateOnScroll>
          <p className="mb-2 font-body text-sm tracking-widest text-amber">
            // CONTACT
          </p>
          <h2 className="mb-6 font-heading text-3xl text-text-primary sm:text-4xl">
            Let&apos;s Build Something
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="mx-auto mb-10 max-w-md font-body text-sm leading-relaxed text-text-secondary">
            Looking for an AI product engineer, have a project in mind, or just
            want to connect — my inbox is always open.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <a
            href={SOCIAL_LINKS.email}
            className="inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-8 py-3 font-body text-sm text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(74,246,38,0.15)]"
          >
            Say Hello
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {SOCIALS.map((social, idx) => (
              <span key={social.label} className="flex items-center gap-6">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-text-muted transition-colors hover:text-primary"
                >
                  {social.label}
                </a>
                {idx < SOCIALS.length - 1 && (
                  <span className="text-text-muted">/</span>
                )}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
