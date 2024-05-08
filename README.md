# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
# nuxt-ecommerce-pet-project

## Project is using prettier and Husky

## Why Use Prettier?
Prettier is a popular code formatter that ensures consistent code style across the project. In a Nuxt.js project, where you often work with JavaScript, Vue components, HTML, and CSS, Prettier helps:
- Maintain a consistent code style, reducing the need for manual code formatting.
- Improve readability, making it easier for developers to understand the codebase.
- Minimize merge conflicts by adhering to a uniform formatting standard.

### Sorting Tailwind CSS Classes
When using Tailwind CSS, you often have long class lists that can become messy. Prettier, with the `prettier-plugin-tailwindcss`, automatically sorts Tailwind CSS classes in a consistent order, enhancing readability and maintainability.

# To format your code, run the format script
```
npm run format
```

## Why Use Husky?
Husky is a tool that allows you to set up Git hooks easily. By integrating Husky, we can ensure that Prettier runs before each commit, enforcing consistent formatting and reducing the chance of committing unformatted code. This promotes a cleaner codebase and prevents code quality issues from reaching the repository.

in this project Husky is running prettier formatting before every commit.
