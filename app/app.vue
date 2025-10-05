<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-default focus:px-3 focus:py-2 focus:text-default"
  >
    Skip to main content
  </a>
  <UApp
    id="main"
    tabindex="-1"
    :toaster="{
      expand: false,
      position: 'top-center',
      progress: false,
      duration: 3000,
    }"
  >
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator
      color="white"
      error-color="red"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s %separator %siteName',
  description: '[description]',
  ogTitle: '[siteName]',
  ogDescription: '[description]',
  ogImage: '[ogImage]',
  ogUrl: '[siteUrl]',
  twitterTitle: '[siteName]',
  twitterDescription: '[description]',
  twitterImage: '[ogImage]',
  twitterCard: 'summary_large_image',
  themeColor: [
    { content: '#000000', media: '(prefers-color-scheme: dark)' },
    { content: '#ffffff', media: '(prefers-color-scheme: light)' },
  ],
  twitterSite: '[twitterSite]',
  twitterCreator: '[twitterCreator]',
  colorScheme: 'dark light',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
})

useHead({
  htmlAttrs: { lang: 'en', dir: 'ltr' },
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  ],
})
</script>