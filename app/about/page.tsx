import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Portfolio",
  description: "Learn more about me and my background",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        About Me
      </h1>
      <p className="mt-4 text-lg leading-8 text-foreground/60">
        A little bit about who I am and what I do.
      </p>

      <section className="mt-12 space-y-6 text-base leading-7 text-foreground/80">
        <p>
          I&apos;m a software developer with a passion for creating clean,
          performant, and user-friendly applications. I enjoy working across the
          full stack, from crafting pixel-perfect interfaces to designing robust
          backend systems.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new technologies,
          contributing to open-source projects, or learning something new
          entirely outside the world of tech.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "PostgreSQL",
            "Git",
            "Docker",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/15 px-3 py-1 text-sm text-foreground/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
        <div className="mt-6 space-y-8">
          {[
            {
              role: "Senior Developer",
              company: "Company Name",
              period: "2022 — Present",
              description:
                "Leading frontend development and building scalable web applications.",
            },
            {
              role: "Developer",
              company: "Previous Company",
              period: "2019 — 2022",
              description:
                "Built and maintained full-stack features across multiple products.",
            },
          ].map((job) => (
            <div key={job.period} className="border-l-2 border-foreground/10 pl-4">
              <h3 className="font-medium text-foreground">{job.role}</h3>
              <p className="text-sm text-foreground/50">
                {job.company} &middot; {job.period}
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
