import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does. Replace with your actual project details.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/project-1.png",
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "Another project description. Add your real projects here with screenshots.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/images/project-2.png",
    github: "#",
  },
  {
    title: "Project Three",
    description:
      "One more project to showcase your skills. Swap the placeholder image with your own.",
    tags: ["Python", "Docker", "AWS"],
    image: "/images/project-3.png",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <p className="mb-2 font-body text-sm tracking-widest text-amber">
            // PROJECTS
          </p>
          <h2 className="mb-12 font-heading text-3xl text-text-primary sm:text-4xl">
            Things I&apos;ve Built
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <AnimateOnScroll key={project.title} delay={idx * 0.1}>
              <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-bg-card transition-all hover:border-border-hover hover:shadow-[0_0_30px_rgba(74,246,38,0.05)]">
                {/* Project image placeholder */}
                <div className="relative aspect-video w-full overflow-hidden bg-bg-elevated">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-heading text-lg text-text-muted">
                      {project.title}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 font-heading text-lg text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 font-body text-xs leading-relaxed text-text-secondary">
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
          ))}
        </div>
      </div>
    </section>
  );
}
