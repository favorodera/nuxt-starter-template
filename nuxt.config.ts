// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  extends: ['@favorodera/nuxt-helper'],
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@vaxee/nuxt',
    '@nuxtjs/seo',
  ],
  imports: {
    dirs: ['./app/stores'],
  },
  devtools: { enabled: true },
  app: {
    rootTag: 'main',
    head: {
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      link: [
        { rel: 'icon', href: '/favicon-dark.ico', media: '(prefers-color-scheme:dark)' },
        { rel: 'icon', href: '/favicon-light.ico', media: '(prefers-color-scheme:light)' },
      ],
    },
    rootAttrs: {
      id: 'app',
    },
    pageTransition: { name: 'fade-out-in', mode: 'out-in' },
    layoutTransition: { name: 'fade-out-in', mode: 'out-in' },
  },
  css: ['~/assets/styles/index.css'],
  site: {
    url: 'https://url.com',
    name: 'Name',
  },
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2025-07-15',
  vite: {
    $server: {
      build: {
        rollupOptions: {
          output: {
            preserveModules: true,
          },
        },
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    mode: 'svg',
    customCollections: [
      { prefix: 'custom', dir: './app/assets/icons' },
    ],
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
    meta: {
      titleTemplate: '%separator %s',
      description: 'Description',
      ogDescription: 'OG description',
      twitterDescription: 'Twitter description',
      twitterCard: 'summary_large_image',
      twitterSite: '@favorodera',
      twitterCreator: '@favorodera',
      colorScheme: 'dark light',
      author: 'Favour Emeka',
      themeColor: [
        { content: '#000000', media: '(prefers-color-scheme: dark)' },
        { content: '#ffffff', media: '(prefers-color-scheme: light)' },
      ],
      appleMobileWebAppStatusBarStyle: 'black-translucent',
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
    },
  },
})
