<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
import { useColorMode } from '@vueuse/core'
import { RouterLink } from 'vue-router'

const mode = useColorMode()

const toggleMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div>
    <div class="fixed left-2 top-2 flex gap-2 text-sm">
      <RouterLink to="/">Main</RouterLink>
      <RouterLink to="/sign-in">Sign In</RouterLink>
      <RouterLink to="/monitor">Monitor</RouterLink>
      <div class="flex items-center gap-2">
        <Switch
          :checked="mode === 'dark' ? true : false"
          :hide-on-off="true"
          @update:checked="toggleMode"
        />
      </div>
    </div>
    <RouterView />
  </div>
</template>
