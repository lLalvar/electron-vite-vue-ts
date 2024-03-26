<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

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
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <div
      class="flex flex-col items-center justify-center gap-8 rounded-lg border border-stone-500 bg-stone-100 p-8 pb-32"
    >
      <div
        class="flex size-24 items-center justify-center rounded-full border border-stone-500 text-2xl text-muted-foreground"
      >
        <div>GA</div>
      </div>
      <div class="flex flex-col items-center gap-1 text-muted-foreground">
        <h2>Adam Ant</h2>
        <h3>/ Team Leader</h3>
      </div>
      <form class="flex flex-col gap-4" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormControl>
              <Input placeholder="User name" v-bind="componentField" />
            </FormControl>
            <!-- <FormMessage /> -->
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="idNumber">
          <FormItem>
            <FormControl>
              <Input placeholder="ID Number" v-bind="componentField" />
            </FormControl>
            <!-- <FormMessage /> -->
          </FormItem>
        </FormField>
        <Button class="self-center px-8 shadow-md" type="submit" variant="outline">
          Sign In
        </Button>
      </form>
    </div>
  </div>
</template>
