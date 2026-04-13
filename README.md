# Portfolio - Abdul Majid

A testing-purpose portfolio website used to implement Docker for development and deployment on a VPS with Caddy, along with GitHub Actions for CI/CD.

## Pages

- **Home** — Hero section with introduction and quick navigation cards
- **About** — Bio, skills, and work experience timeline
- **Projects** — Showcase of projects
- **Contact** — Contact form and social links

## Tech Stack

- [Next.js](https://nextjs.org) 16
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Docker](https://www.docker.com) — containerized production builds
- [Caddy](https://caddyserver.com) — reverse proxy on VPS
- [GitHub Actions](https://github.com/features/actions) — CI/CD pipeline

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Local Development (Docker)

```bash
docker compose -f compose.dev.yml up
```

This mounts the project directory into the container with hot reload. The app runs on port `3001` by default. Set the `APP_PORT` environment variable to change it.

### Production (Docker)

```bash
docker compose -f compose.prod.yml up -d --build
```

The app runs on port `3001` by default. Set the `APP_PORT` environment variable to change it.
