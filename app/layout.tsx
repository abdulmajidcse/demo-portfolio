import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-black/[.08] bg-background/80 backdrop-blur-sm dark:border-white/[.145]">
          <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              AM
            </Link>
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-black/[.08] dark:border-white/[.145]">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-6 text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
