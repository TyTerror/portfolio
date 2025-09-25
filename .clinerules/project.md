# Project Instructions: Justin's Portfolio

This document provides an overview and instructions for working with Justin's Portfolio, a Gatsby.js-based personal portfolio website.

## Project Overview

This is a personal portfolio website built with Gatsby.js, React, and Sass. It showcases projects and provides information about the author. The site uses Font Awesome for icons and Google Analytics for tracking.

## Technologies Used

- **Gatsby.js**: A React-based framework for creating fast, modern websites.
- **React**: A JavaScript library for building user interfaces.
- **Sass**: A CSS pre-processor for writing more maintainable and powerful stylesheets.
- **Font Awesome**: A popular icon library.
- **ESLint & Prettier**: For code linting and formatting.

## Setup Instructions

To get the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/jchi2241/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    The project **primarily uses `pnpm`** as a package manager. If you don't have `pnpm` installed, you can install it globally:

    ```bash
    npm install -g pnpm
    ```

    Then, install the project dependencies using `pnpm`:

    ```bash
    pnpm install
    ```

    _(While `npm install` might work, `pnpm` is the recommended package manager for this project.)_

3.  **Run the development server:**
    To start the local development server, which includes hot-reloading for changes, use `pnpm`:

    ```bash
    pnpm start
    ```

    _(Avoid using `npm start` as `pnpm` is preferred.)_
    The site will typically be available at `http://localhost:8000`.

4.  **Build the project:**
    To create a production-ready build of the site, use `pnpm`:

    ```bash
    pnpm build
    ```

    _(Avoid using `npm run build` as `pnpm` is preferred.)_
    The static files will be generated in the `public/` directory.

5.  **Serve the built project:**
    To serve the production build locally, use `pnpm`:
    ```bash
    pnpm serve
    ```
    _(Avoid using `npm run serve` as `pnpm` is preferred.)_

## Project Structure Highlights

- `src/pages/`: Contains top-level pages (e.g., `index.js` for the homepage, `404.js` for the 404 page).
- `src/layouts/`: Defines the main layout component (`index.js`) that wraps all pages, including `Navbar` and `Footer`.
- `src/components/`: Reusable React components (e.g., `Hero.js`, `About.js`, `Projects.js`, `Navbar.js`, `Footer.js`).
- `src/content/`: Data files for content, such as `about-me.js` and `projects.js`.
- `src/scss/`: Sass stylesheets, including global styles, variables, and component-specific styles.
- `src/images/`: Image assets used throughout the site.
- `design/`: Design assets like `Desktop.png`, `Projects_1.pdf`, and `Projects_1.sketch`.
- `static/`: Static assets like `justinchi_resume.pdf`.
- `gatsby-config.js`: Gatsby configuration, including site metadata and plugins (Sass, Google Analytics, Manifest).

## Updating Content

Most of the dynamic content for the "About Me" section and "Projects" section is managed through JavaScript files in the `src/content/` directory:

- **About Me**: Edit `src/content/about-me.js` to update the statements displayed in the About section.
- **Projects**: Edit `src/content/projects.js` to add, remove, or modify project details.

## Styling

The project uses Sass for styling. All `.scss` files are located in `src/scss/` and `src/components/`. Global styles and variables are defined in `src/scss/`, while component-specific styles are co-located with their respective components (e.g., `src/components/_Hero.scss`).

## Deployment

The project is configured for deployment, likely to Netlify given the `.netlify` directory. The `gatsby build` command generates the static assets required for deployment.

## Code Quality

The project uses `eslint` and `prettier` to maintain code quality and consistent formatting. You can run `pnpm prettier` to format JavaScript files.

---
