import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const SKILLS = [
  "TypeScript",
  "React / React Native",
  "Next.js",
  "Python",
  "Node.js",
  "LangGraph",
  "RAG / Vector DBs",
  "Neo4j",
  "Tailwind CSS",
  "Three.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Raspberry Pi",
  "BLE / ANT+",
  "Expo",
];

const HIGHLIGHTS = [
  {
    label: "Pole Vault",
    value: "National Record Holder",
    detail: "El Salvador",
  },
  {
    label: "Education",
    value: "Rice University",
    detail: "B.S. Mechanical Engineering",
  },
  {
    label: "Day Job",
    value: "MEP Asst. PM",
    detail: "Data Centers & Advanced Manufacturing",
  },
  {
    label: "Building",
    value: "5 Products",
    detail: "AI, Fitness, Fintech",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <p className="mb-2 font-body text-sm tracking-widest text-amber">
            // ABOUT
          </p>
          <h2 className="mb-12 font-heading text-3xl text-text-primary sm:text-4xl">
            Who I Am
          </h2>
        </AnimateOnScroll>

        {/* Photo + Highlight cards row */}
        <div className="mb-16 grid gap-6 md:grid-cols-[240px_1fr]">
          <AnimateOnScroll>
            <div className="space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/me.JPG"
                  alt="Natan Rivera"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/polevault_medal.JPG"
                  alt="Pole vault national record"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item, idx) => (
              <AnimateOnScroll key={item.label} delay={idx * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-border bg-bg-card p-5 transition-all hover:border-border-hover hover:shadow-[0_0_20px_rgba(74,246,38,0.05)]">
                  <p className="mb-1 font-body text-[10px] tracking-widest text-text-muted uppercase">
                    {item.label}
                  </p>
                  <p className="font-heading text-lg text-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 font-body text-xs text-text-secondary">
                    {item.detail}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-4 font-body text-sm leading-relaxed text-text-secondary">
              <p>
                I&apos;m a mechanical engineer turned builder. I graduated from
                Rice University and represented El Salvador in pole vault — I
                still hold the national record.
              </p>
              <p>
                By day, I work as an MEP Assistant Project Manager on data
                center and advanced manufacturing projects. By night, I build
                software — AI-powered fitness apps, fintech tools for Central
                America, and hardware systems that bridge the physical and
                digital.
              </p>
              <p>
                I believe in owning the full stack — from BLE sensors on a
                Raspberry Pi to the AI agent that coaches your workout. If it
                can be built, I want to build it.
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
