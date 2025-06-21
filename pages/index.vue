<script lang="ts" setup>
const site = useSiteConfig();
</script>

<template>
  <div
    class="bg-gray-900 h-screen w-screen flex flex-col items-center justify-center gap-5"
  >
    <div class="flex flex-col gap-4 items-center justify-center">
      <UBadge
        size="sm"
        class="w-fit"
        variant="subtle"
      >
        Nuxt 3 + Nuxt UI 3
      </UBadge>
      <h1
        class="font-bold text-2xl text-primary md:text-3xl"
      >
        Welcome to {{ site.name }}
      </h1>
    </div>
    <div class="flex items-center gap-4">
      <UButton
        label="Nuxt Docs"
        icon="i-heroicons-document-text"
        to="https://nuxt.com"
        target="_blank"
        external
      />
      <UButton
        label="Nuxt UI Docs"
        variant="outline"
        icon="i-heroicons-book-open"
        to="https://ui.nuxt.com"
        target="_blank"
        external
      />
    </div>
  </div>
</template>
