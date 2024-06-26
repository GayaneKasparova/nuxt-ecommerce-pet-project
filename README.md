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

## Running Prettier for Formatting

> For tailwind class sorting prettier-plugin-tailwindcss is installed. Check
>
> out [how classes are sorted](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted).
>
> Highly recommended to format code on save.
>
> Use "prettier-vscode" for VSCode or "Prettier" plugin for IntelliJ IDEA to run prettier on file save / on "Format
> code" action
>
> To run Prettier on save, tick the "Run on save for files" option in Preferences/Settings | Languages & Frameworks |
> JavaScript | Prettier.

### To format your code manually, run the format script

```
npm run format:check // for checking
npm run format:write // for changing files
```

## Why Use Husky?

Husky is a tool that allows you to set up Git hooks easily.
we can ensure that Prettier runs before each commit, enforcing consistent formatting and reducing the chance of committing unformatted code.
This promotes a cleaner codebase and prevents code quality issues from reaching the repository.

In this project, we use Husky to run Prettier before every Git commit. This ensures that our code is consistently formatted, reducing style discrepancies.

If Prettier makes any changes to the code, you'll see them in your Git status as modified files.
You can then review these changes and decide whether to include them in a new commit or amend them to your last commit.
This workflow helps maintain a clean and consistent codebase, while allowing you to keep control over what gets committed.
