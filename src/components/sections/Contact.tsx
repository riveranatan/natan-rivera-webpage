import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SOCIAL_LINKS } from "@/lib/constants";

const SOCIALS = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: FaGithub },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: FaLinkedinIn },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: FaInstagram },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: FaYoutube },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: FaFacebookF },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-16">
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
            Need AI solutions or custom hardware for your business, have a
            project in mind, or just want to connect — reach out.
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
          <div className="mt-12 flex items-center justify-center gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(74,246,38,0.1)]"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
