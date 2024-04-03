<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SignInSignUpWrapper from '@renderer/components/SignInSignUpWrapper.vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import * as z from 'zod'

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    idNumber: z.string().min(2).max(50)
  })
)

const currentPath = useRoute().path

const isSwitchUser = ref(currentPath === '/sign-in' ? false : true)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const handleLogOff = () => {
  console.log('Log off')
}
</script>

<template>
  <SignInSignUpWrapper>
    <div v-if="isSwitchUser" class="flex flex-col gap-4 pt-4">
      <Button class="self-center uppercase" size="fixed" @click="isSwitchUser = true"
        >{{ $t('switch') }} {{ $t('user') }}</Button
      >
      <Button class="self-center uppercase" size="fixed" @click="handleLogOff">{{
        $t('logOff')
      }}</Button>
    </div>
    <form v-else class="flex w-full flex-col gap-4 p-4" @submit="onSubmit">
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
      <Button class="self-center uppercase" size="fixed" type="submit">{{ $t('singIn') }}</Button>
    </form>
  </SignInSignUpWrapper>
</template>
