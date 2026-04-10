# Antigravity Project Overview

This project is a modern web application built with a cutting-edge version of **Next.js (v16.2.3)** and **React (v19.2.4)**. It follows the Next.js **App Router** architecture and uses **Tailwind CSS v4** for styling.

## Project Structure

The main application resides in the `my-app/` directory:

- `my-app/app/`: Contains the application's routes, layouts, and components (App Router).
- `my-app/public/`: Static assets such as images and fonts.
- `my-app/package.json`: Project metadata, dependencies, and scripts.
- `my-app/tsconfig.json`: TypeScript configuration.
- `my-app/AGENTS.md`: **CRITICAL:** Contains important warnings about breaking changes in this version of Next.js.

## Technologies

- **Framework:** Next.js 16.2.3 (App Router)
- **Library:** React 19.2.4
- **Styling:** Tailwind CSS 4 (using `@tailwindcss/postcss`)
- **Language:** TypeScript
- **Fonts:** Geist and Geist Mono (via `next/font/google`)
- **Linting:** ESLint 9

## Building and Running

Commands should be executed within the `my-app/` directory:

- **Development Server:**
  ```bash
  cd my-app
  npm run dev
  ```
- **Build for Production:**
  ```bash
  cd my-app
  npm run build
  ```
- **Start Production Server:**
  ```bash
  cd my-app
  npm run start
  ```
- **Linting:**
  ```bash
  cd my-app
  npm run lint
  ```

## Development Conventions

- **Next.js v16 Specifics:** Refer to `my-app/AGENTS.md`. This version may have breaking changes compared to earlier versions of Next.js. Always check `node_modules/next/dist/docs/` for relevant guides if available.
- **Type Safety:** TypeScript is strictly enforced. Avoid using `any` and prefer interface/type definitions for all components and data structures.
- **Styling:** Use Tailwind CSS 4 utility classes. Global styles are managed in `my-app/app/globals.css`.
- **Components:** Functional components with React 19 features are preferred.
- **File Naming:** Follow standard Next.js conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, etc.).
