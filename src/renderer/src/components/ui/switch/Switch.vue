<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  SwitchRoot,
  SwitchThumb,
  useForwardPropsEmits,
  type SwitchRootEmits,
  type SwitchRootProps
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
  SwitchRootProps & { class?: HTMLAttributes['class']; variant?: 'primary'; hideOnOff?: boolean }
>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer relative inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-[9px] shadow-inner-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ',
        props.variant === 'primary'
          ? 'data-[state=checked]:bg-selection data-[state=unchecked]:bg-selection'
          : 'data-[state=checked]:bg-[#c3c8d6] data-[state=unchecked]:bg-[#c3c8d6]',
        props.class
      )
    "
  >
    <template v-if="!props.hideOnOff">
      <span class="absolute left-2 top-1/2 -translate-y-1/2 tracking-tighter">ON</span>
      <span class="absolute right-2 top-1/2 -translate-y-1/2 tracking-tighter">OFF</span>
    </template>

    <SwitchThumb
      :class="
        cn(
          'pointer-events-none flex h-7 w-7 items-center justify-center rounded-md bg-[#1e1e1e] shadow-md shadow-black/30 ring-0 transition-transform data-[state=checked]:translate-x-[45px] data-[state=unchecked]:translate-x-[6px]'
        )
      "
    >
      <div class="flex gap-1">
        <div class="h-4 w-0.5 rounded-full bg-[#303030]" />
        <div class="h-4 w-0.5 rounded-full bg-[#303030]" />
      </div>
    </SwitchThumb>
  </SwitchRoot>
</template>
