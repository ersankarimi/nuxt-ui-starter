import process from "node:process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-21",
  devtools: { enabled: true },
  spaLoadingTemplate: true,
  css: ["~/assets/css/app.css"],
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      htmlAttrs: {
        lang: "id",
      },
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/seo",
    "nuxt-security",
    "@nuxt/eslint",
  ],

  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      exclude: ["./github/workflows"],
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  // Nuxt Icon Configuration (https://github.com/nuxt/icon?tab=readme-ov-file)
  icon: {
    collections: ["heroicons"],
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
      icons: ["heroicons"],
      // includeCustomCollections: true,
    },
    // customCollections: [
    //   {
    //     dir: "./assets/icons",
    //     prefix: "custom",
    //   },
    // ],
  },

  // Nuxt Font Configuration (https://fonts.nuxt.com)
  fonts: {
    defaults: {
      subsets: ["latin"],
      weights: [400, 700],
    },
    families: [
      {
        name: "Inter",
        display: "swap",
        provider: "google",
      },
    ],
  },

  // Nuxt Site Configuration (https://nuxtseo.com/docs/site-config/getting-started/introduction)
  site: {
    // enabled: false,
    // * DEFAULT: siteConfig.env === 'production' || process.env.NODE_ENV === 'production'
    indexable: process.env.NUXT_SITE_ENV === "production",
    // * DEFAULT: siteName.env || process.env.NUXT_SITE_NAME
    // name: process.env.NUXT_SITE_NAME,
    defaultLocale: "id",
  },

  // Nuxt Security Configuration (https://nuxt-security.vercel.app/getting-started/configuration)
  security: {
    // strict: true,
    sri: false,
    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      contentSecurityPolicy: {
        "upgrade-insecure-requests": true,
        "img-src": ["'self'", "data:"],
        "connect-src": ["'self'"],
      },
    },
  },

  // Nuxt Robots Configuration (https://nuxtseo.com/docs/robots/getting-started/introduction)
  robots: {
    // enabled: false,
    // blockAiBots: true,
    // blockNonSeoBots: true,
    // credits: true,
    // sitemap: `${process.env.NUXT_SITE_URL}/sitemap.xml`,
  },

  // Nuxt OG Image Configuration (https://nuxtseo.com/docs/og-image/getting-started/introduction)
  ogImage: {
    enabled: false,
  },

  // Nuxt Sitemap Configuration (https://nuxtseo.com/docs/link-checker/getting-started/introduction)
  linkChecker: {
    enabled: false,
  },

  // Nuxt Sitemap Configuration (https://nuxtseo.com/docs/sitemap/getting-started/installation)
  sitemap: {
    enabled: false,
  },

  // Nuxt Schema.org Configuration (https://nuxtseo.com/docs/schema-org/getting-started/introduction)
  schemaOrg: {
    enabled: false,
  },

  // Nuxt SEO Utils Configuration (https://nuxtseo.com/docs/seo-utils/guides/nuxt-config-seo-meta)
  seo: {
    // enabled: false
    fallbackTitle: true,
    meta: {
      xUaCompatible: "IE=edge",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt + UI Starter",
      description: "Nuxt + UI Starter",

      creator: "Ersan Karimi",
      author: "Ersan Karimi",
      publisher: "Ersan Karimi",
      applicationName: process.env.NUXT_SITE_NAME,

      // Nuxt SEO Utils already sets the below tags for you
      ogLocale: "id_ID",
      ogType: "website",
      // ...
    },
  },
});
