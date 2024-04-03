<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-vue-next'
</script>

<template>
  <div
    class="flex min-h-[70vh] w-full max-w-[400px] flex-col items-center gap-8 rounded-lg border bg-muted p-4"
  >
    <div class="flex w-full justify-between gap-4">
      <Logo />
      <Button variant="ghost" class="border-none text-muted-foreground" size="iconSm"><X /></Button>
    </div>
    <div
      class="flex size-28 items-center justify-center rounded-full border-2 text-[2rem] font-extralight"
    >
      <div>GA</div>
    </div>
    <div class="flex flex-col items-center gap-1">
      <h2 class="text-lg">ADAM ANT</h2>
      <h3>/ Team Leader</h3>
    </div>
    <slot />
  </div>
</template>
