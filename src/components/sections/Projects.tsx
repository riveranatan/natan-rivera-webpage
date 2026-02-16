import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { PROJECTS, ENGINEERING_PROJECTS } from "@/lib/constants";
import type { Project } from "@/lib/constants";

const STATUS_STYLES = {
  live: { label: "LIVE", color: "text-primary border-primary/30 bg-primary/5" },
  building: {
    label: "BUILDING",
    color: "text-amber border-amber/30 bg-amber/5",
  },
  archived: {
    label: "ARCHIVED",
    color: "text-text-muted border-border bg-bg-elevated",
  },
} as const;

function PhoneCollage({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="flex h-full items-center justify-center py-6 px-4">
      <div className="relative flex items-end justify-center gap-3 sm:gap-4">
        {images.map((src, i) => {
          const transforms = [
            "-rotate-6 -translate-x-2 translate-y-1",
            "z-10 scale-105",
            "rotate-6 translate-x-2 translate-y-1",
          ];
          return (
            <div
              key={src}
              className={`relative w-[100px] sm:w-[130px] overflow-hidden rounded-xl border-2 border-border/50 bg-bg-primary shadow-lg transition-transform duration-500 group-hover:scale-[1.02] ${transforms[i]}`}
            >
              <div className="relative aspect-[9/19.5]">
                <Image
                  src={src}
                  alt={`${alt} screenshot ${i + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MasonryCollage({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-1.5 p-1.5">
      <div className="relative col-span-2 row-span-1 overflow-hidden rounded-sm">
        <Image
          src={images[0]}
          alt={`${alt} 1`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative overflow-hidden rounded-sm">
        <Image
          src={images[1]}
          alt={`${alt} 2`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative overflow-hidden rounded-sm">
        <Image
          src={images[2]}
          alt={`${alt} 3`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

function SplitCollage({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="grid h-full grid-cols-2 gap-1.5 p-1.5">
      <div className="relative overflow-hidden rounded-sm">
        <Image
          src={images[0]}
          alt={`${alt} 1`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative overflow-hidden rounded-sm">
        <Image
          src={images[1]}
          alt={`${alt} 2`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  const images = project.images;

  if (images && images.length >= 3 && project.title === "WORKA") {
    return <PhoneCollage images={images} alt={project.title} />;
  }

  if (images && images.length >= 3) {
    return <MasonryCollage images={images} alt={project.title} />;
  }

  if (images && images.length === 2) {
    return <SplitCollage images={images} alt={project.title} />;
  }

  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="flex h-full items-center justify-center">
      <span className="font-heading text-xl text-text-muted">
        {project.title}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <p className="mb-2 font-body text-sm tracking-widest text-amber">
            // PROJECTS
          </p>
          <h2 className="mb-4 font-heading text-3xl text-text-primary sm:text-4xl">
            Things I&apos;ve Built
          </h2>
          <p className="mb-12 max-w-xl font-body text-sm text-text-secondary">
            From AI coaching agents to BLE heart rate sensors on Raspberry Pi —
            I like building across the full stack.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, idx) => {
            const statusStyle = STATUS_STYLES[project.status];
            const isFeatured = idx === 0;
            const hasCollage = project.images && project.images.length > 1;
            return (
              <AnimateOnScroll
                key={project.title}
                delay={idx * 0.08}
                className={
                  isFeatured ? "md:col-span-2" : ""
                }
              >
                <div
                  className={`group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-bg-card transition-all hover:border-border-hover hover:shadow-[0_0_30px_rgba(74,246,38,0.05)] ${
                    isFeatured ? "md:flex-row" : ""
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-bg-elevated ${
                      isFeatured
                        ? hasCollage
                          ? "md:w-1/2 min-h-[280px]"
                          : "aspect-video md:aspect-auto md:w-1/2"
                        : hasCollage
                          ? "min-h-[220px]"
                          : "aspect-video"
                    }`}
                  >
                    <ProjectImage project={project} />
                  </div>

                  <div
                    className={`flex flex-1 flex-col p-6 ${
                      isFeatured ? "md:w-1/2" : ""
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <h3 className="font-heading text-xl text-text-primary">
                        {project.title}
                      </h3>
                      <span
                        className={`rounded border px-2 py-0.5 font-body text-[10px] tracking-wider ${statusStyle.color}`}
                      >
                        {statusStyle.label}
                      </span>
                    </div>

                    <p className="mb-5 flex-1 font-body text-xs leading-relaxed text-text-secondary">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-primary/5 px-2 py-0.5 font-body text-[10px] text-primary-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-xs text-text-muted transition-colors hover:text-primary"
                        >
                          GitHub &rarr;
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-xs text-text-muted transition-colors hover:text-amber"
                        >
                          Live &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Engineering Projects */}
        <AnimateOnScroll>
          <p className="mb-2 mt-16 font-body text-sm tracking-widest text-amber">
            // ENGINEERING
          </p>
          <h3 className="mb-4 font-heading text-2xl text-text-primary sm:text-3xl">
            Construction &amp; MEP
          </h3>
          <p className="mb-8 max-w-xl font-body text-sm text-text-secondary">
            Data centers, gigafactories, and advanced manufacturing — the
            physical side of engineering.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-4 md:grid-cols-3">
          {ENGINEERING_PROJECTS.map((project, idx) => (
            <AnimateOnScroll key={project.title} delay={idx * 0.08}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-bg-card p-5 transition-all hover:border-border-hover hover:shadow-[0_0_20px_rgba(245,166,35,0.05)]">
                <p className="mb-1 font-body text-[10px] tracking-widest text-amber uppercase">
                  {project.role}
                </p>
                <h4 className="mb-3 font-heading text-lg text-text-primary">
                  {project.title}
                </h4>
                <p className="mb-4 flex-1 font-body text-xs leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-amber/5 px-2 py-0.5 font-body text-[10px] text-amber-dim"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
