<script setup lang="ts">
import Logo from '@renderer/components/Logo.vue'
import MonitorSidebar from '@renderer/components/sidebar/MonitorSidebar.vue'
import { Button } from '@renderer/components/ui/button'
</script>

<template>
  <div class="text-center">
    <header class="flex items-center justify-between gap-4 px-[1.125rem] py-5">
      <Logo />
      <div class="flex items-center gap-8">
        <div class="flex items-center divide-x">
          <div class="px-8 text-lg">GAL ASHKENAZI</div>
          <div class="px-8 text-lg">OSEM / YOKNEAM</div>
          <div class="px-8 text-lg">05/07/2023</div>
          <div class="px-8 text-3xl">01:13:24</div>
        </div>
        <Button
          variant="ghost"
          class="flex size-16 items-center justify-center rounded-full border-2 text-[2rem] font-extralight"
        >
          GA
        </Button>
      </div>
    </header>
    <MonitorSidebar />
  </div>
</template>
