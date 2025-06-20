// @ts-check
import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    vue: true,
    ignores: [
      "dist",
      "node_modules",
      ".nuxt",
      "pnpm-lock.yaml",
      ".github/workflows",
      "pnpm-workspace.yaml",
    ],
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },
    rules: {
      "no-console": "warn",
    },
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: "prettier",
    },
  }),
);
