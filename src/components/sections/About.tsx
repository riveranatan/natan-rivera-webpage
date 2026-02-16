import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <p className="mb-2 font-body text-sm tracking-widest text-amber">
            // ABOUT
          </p>
          <h2 className="mb-8 font-heading text-3xl text-text-primary sm:text-4xl">
            Who I Am
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-12 md:grid-cols-2">
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-4 font-body text-sm leading-relaxed text-text-secondary">
              <p>
                I&apos;m a software engineer who loves building things that live
                on the web. I care about clean architecture, good developer
                experience, and shipping products that people actually use.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, tinkering with side projects, or diving deep into
                systems design.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div>
              <p className="mb-4 font-body text-xs tracking-widest text-text-muted">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border bg-bg-card px-3 py-1.5 font-body text-xs text-text-secondary transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
