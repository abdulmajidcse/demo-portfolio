"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Contact
      </h1>
      <p className="mt-4 text-lg leading-8 text-foreground/60">
        Have a question or want to work together? Drop me a message.
      </p>

      {submitted ? (
        <div className="mt-12 rounded-xl border border-green-500/30 bg-green-500/5 p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Thanks for reaching out!
          </p>
          <p className="mt-2 text-sm text-foreground/60">
            I&apos;ll get back to you as soon as I can.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 block w-full rounded-lg border border-foreground/15 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full rounded-lg border border-foreground/15 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 block w-full rounded-lg border border-foreground/15 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
          >
            Send Message
          </button>
        </form>
      )}

      <div className="mt-16 border-t border-foreground/10 pt-8">
        <h2 className="text-lg font-semibold text-foreground">
          Other ways to connect
        </h2>
        <div className="mt-4 flex gap-6 text-sm">
          <a
            href="#"
            className="text-foreground/50 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-foreground/50 transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-foreground/50 transition-colors hover:text-foreground"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
