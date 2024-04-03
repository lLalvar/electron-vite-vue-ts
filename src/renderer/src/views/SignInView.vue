<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
import SignIn from '@renderer/components/SignIn.vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()

const toggleMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <div class="fixed right-14 top-4 flex items-center gap-2">
      <span
        ><span class="capitalize">{{ $t('light') }}</span> {{ $t('mode') }}</span
      >
      <Switch
        :checked="mode === 'dark' ? true : false"
        :hide-on-off="true"
        @update:checked="toggleMode"
      />
      <span
        ><span class="capitalize">{{ $t('dark') }}</span> {{ $t('mode') }}</span
      >
    </div>
    <SignIn />
  </div>
</template>
