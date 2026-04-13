import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Portfolio",
  description: "A showcase of my work and side projects",
};

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with modern technologies for managing tasks and collaboration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "An open-source CLI tool that automates repetitive development workflows and boosts productivity.",
    tags: ["Node.js", "CLI", "Open Source"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A responsive dashboard interface with real-time data visualization and interactive charts.",
    tags: ["React", "D3.js", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "A mobile-first e-commerce platform with fast search, filtering, and a seamless checkout flow.",
    tags: ["Next.js", "Stripe", "Redis"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mt-4 text-lg leading-8 text-foreground/60">
        Things I&apos;ve built — from side projects to production apps.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-foreground/10 p-6 transition-colors hover:border-foreground/25"
          >
            <h2 className="text-xl font-semibold text-foreground">
              {project.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-6 text-foreground/60">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              <a
                href={project.liveUrl}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Live Demo
              </a>
              <a
                href={project.sourceUrl}
                className="text-foreground/50 hover:underline"
              >
                Source Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
