<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import Logo from '@/components/Logo.vue'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useColorMode } from '@vueuse/core'
import { X } from 'lucide-vue-next'

const mode = useColorMode()

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    idNumber: z.string().min(2).max(50)
  })
)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const toggleMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <div class="fixed right-14 top-4 flex items-center gap-2">
      <span>Light mode</span>
      <Switch
        :checked="mode === 'dark' ? true : false"
        :hide-on-off="true"
        @update:checked="toggleMode"
      />
      <span>Dark mode</span>
    </div>
    <div
      class="flex min-h-[70vh] w-full max-w-[400px] flex-col items-center gap-8 rounded-lg border bg-muted p-4"
    >
      <div class="flex w-full justify-between gap-4">
        <Logo />
        <!-- <span>{{ $t('appTitle') }}</span> -->
        <Button variant="ghost" class="border-none text-muted-foreground" size="iconSm"
          ><X
        /></Button>
      </div>
      <div
        class="flex size-24 items-center justify-center rounded-full border-2 text-2xl text-muted-foreground"
      >
        <div>GA</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <h2 class="text-lg">ADAM ANT</h2>
        <h3>/ Team Leader</h3>
      </div>
      <form class="flex w-full flex-col gap-4 p-4" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormControl>
              <Input
                placeholder="User name"
                v-bind="componentField"
                class="placeholder:text-foreground"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="idNumber">
          <FormItem>
            <FormControl>
              <Input
                placeholder="ID Number"
                v-bind="componentField"
                class="placeholder:text-foreground"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <Button class="self-center" size="fixed" type="submit"> SIGN IN </Button>
      </form>
    </div>
  </div>
</template>
