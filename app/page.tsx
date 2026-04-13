import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Abdul Majid</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/60">
        A full-stack engineer passionate about building great web experiences.
        Welcome to my corner of the internet.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/projects"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
        >
          Get in Touch
        </Link>
      </div>

      <section className="mt-24 grid w-full gap-6 sm:grid-cols-3">
        {[
          {
            title: "About",
            description: "Learn more about my background, skills, and what drives me.",
            href: "/about",
          },
          {
            title: "Projects",
            description: "Check out the things I've built and the technologies I use.",
            href: "/projects",
          },
          {
            title: "Contact",
            description: "Have a question or want to work together? Reach out.",
            href: "/contact",
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-foreground/10 p-6 text-left transition-colors hover:border-foreground/25 hover:bg-foreground/[.02]"
          >
            <h2 className="text-lg font-semibold text-foreground">
              {card.title}
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-foreground/60">
              {card.description}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
