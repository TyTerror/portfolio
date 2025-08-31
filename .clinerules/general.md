# Project Overview

This project is a personal portfolio website built with Next.js, React, and TypeScript. It uses Tailwind CSS for styling and Biome for code formatting and linting. The project aims to showcase personal projects, skills, and experience.

## Folder Structure

- `/public`: Contains static assets like images and icons.
- `/src`: Contains the main application source code.
  - `/src/app`: Implements the Next.js App Router structure, including layouts, pages, and global styles.

## Libraries and Frameworks

- **Next.js**: A React framework for building full-stack web applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Biome**: A fast formatter and linter for web projects.

## Coding Standards

- Uses TypeScript for type safety.
- Follows Biome's default formatting and linting rules.
- Next.js App Router conventions for file-based routing and component organization.

## Build and Development

The project uses `pnpm` as the package manager.

- **Install Dependencies:**
  ```bash
  pnpm install
  ```
- **Run Development Server (with Turbopack):**
  ```bash
  pnpm run dev
  ```
  This starts the development server with Turbopack for faster compilation.
- **Build for Production (with Turbopack):**
  ```bash
  pnpm run build
  ```
  This compiles the project for production, also using Turbopack.
- **Start Production Server:**
  ```bash
  pnpm run start
  ```
  This starts the Next.js production server after a successful build.
- **Lint Code:**
  ```bash
  pnpm run lint
  ```
  Checks the codebase for linting errors using Biome.
- **Format Code:**
  ```bash
  pnpm run format
  ```
  Formats the codebase using Biome.
