# Nuxt + UI Starter – `nuxt3-ui2`

> 🧩 This branch contains the **Nuxt 3 + Nuxt UI 2** starter template.
> For other setups, see the [available branches](https://github.com/ersankarimi/nuxt-ui-starter/branches).

A minimal **Nuxt 3** starter template using **Nuxt UI v2**, with essential configurations for building modern web applications. Includes useful Nuxt modules, security enhancements, and predefined scripts for easy development and deployment.

---

## ⚡️ Quick Start with `create-ersn-app`

The easiest way to use this template is with
[`create-ersn-app`](https://www.npmjs.com/package/create-ersn-app). Just run:

```bash
npx create-ersn-app
# or
pnpm dlx create-ersn-app
# or
yarn dlx create-ersn-app
# or
bunx create-ersn-app
```

Then select the **Nuxt + UI Starter** template from the list. 🚀

---

## 📦 Manual Installation

If you prefer to set up manually, you can clone the repository and install dependencies:

```bash
git clone https://github.com/ersankarimi/nuxt-ui-starter.git your-project
cd your-project
pnpm install
# or
npm install
# or
yarn install
# or
bun install
```

Then checkout the correct branch:

```bash
git checkout nuxt3-ui3
```

---

## 🔧 Development

Run the development server using the `.env.local` configuration:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun run dev
```

---

## 🛠 Environment Files

This template supports multiple environment configurations. Make sure to create the necessary `.env` files before running the project:

- **`.env.local`** → Used for local development (`pnpm dev`)
- **`.env.development`** → Used for development builds (`pnpm dev:build`, `pnpm dev:generate`)
- **`.env.production`** → Used for production builds (`pnpm prod:build`, `pnpm prod:generate`)
- **`.env.example`** → Provides a reference for required environment variables

---

## 🔨 Build & Generate

### **Build for Production**

```bash
pnpm build
# or
npm run build
# or
yarn build
# or
bun run build
```

### **Generate Static Site**

```bash
pnpm generate
# or
npm run generate
# or
yarn generate
# or
bun run generate
```

> You can also use environment-specific builds:

```bash
pnpm prod:build    # Production build
pnpm dev:build     # Development build

pnpm prod:generate # Generate static site with production env
pnpm dev:generate  # Generate static site with development env
```

---

## 👀 Preview

After building or generating, you can preview the site using:

```bash
pnpm preview
# or
npm run preview
# or
yarn preview
# or
bun run preview
```

> Or combine with generate/build:

```bash
pnpm prod:generate:preview
pnpm dev:generate:preview
pnpm prod:build:preview
pnpm dev:build:preview
```

---

## 🔍 Linting & Formatting

This project follows a strict linting and formatting setup using **ESLint** with **Antfu's ESLint config**.

If you have Prettier installed in your editor, we recommend disabling it to avoid conflicts.

### **Run Lint Check**

```bash
pnpm lint
# or
npm run lint
# or
yarn lint
# or
bun run lint
```

### **Fix Linting Issues**

```bash
pnpm lint:fix
# or
npm run lint:fix
# or
yarn lint:fix
# or
bun run lint:fix
```

---

## ⚙ Configuration

Edit `nuxt.config.ts` to customize the setup, enable/disable modules, and tweak performance settings.

---

## 📂 Other Templates

This repository contains multiple Nuxt + UI setups. To use a different one, switch to the corresponding branch:

| Template               | Branch                                                                       |
| ---------------------- | ---------------------------------------------------------------------------- |
| **Nuxt 3 + Nuxt UI 2** | `nuxt3-ui2` ← you are here                                                   |
| Nuxt 3 + Nuxt UI 3     | [`nuxt3-ui3`](https://github.com/ersankarimi/nuxt-ui-starter/tree/nuxt3-ui3) |
| Nuxt 4 + Nuxt UI 3     | [`nuxt4-ui3`](https://github.com/ersankarimi/nuxt-ui-starter/tree/nuxt4-ui3) |

---

## ⚖ License

This project is licensed under the **MIT License**.
Created by [@ersankarimi](https://github.com/ersankarimi)
