<script setup lang="ts">
import { Button } from '@renderer/components/ui/button'
</script>

<template>
  <div class="flex w-[12.25rem] flex-col items-center gap-16">
    <div class="flex flex-col gap-4 text-border dark:text-[#d0d1d5]">
      <Button variant="ghost" class="size-16 justify-start rounded-full border-2 p-0">
        <svg
          width="49"
          height="28"
          viewBox="0 0 49 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11.5H18.2135C18.5894 11.5 18.9336 11.7108 19.1044 12.0458L25.7817 25.1417C26.2274 26.0157 27.534 25.7922 27.6638 24.8198L30.5642 3.10059C30.6931 2.13559 31.9848 1.90499 32.4396 2.76579L36.7728 10.9672C36.946 11.2949 37.285 11.5 37.6557 11.5C39.0482 11.5 42.5614 11.5 45 11.5"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="square"
          />
          <circle
            cx="3.5"
            cy="3.5"
            r="3.5"
            transform="matrix(1 0 0 -1 42 15)"
            fill="currentColor"
          />
        </svg>
      </Button>
      <Button variant="ghost" class="relative size-16 rounded-full border-2 p-0">
        <svg
          width="19"
          height="9"
          viewBox="0 0 19 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-[0.625rem] top-[0.625rem] -rotate-12"
        >
          <path
            d="M17.9998 1C11.5156 1 5.65805 3.68327 1.47705 8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 13C24 19.0751 19.0751 24 13 24C9.29588 24 6.01883 22.1711 4.02236 19.3581C3.35923 18.4237 2.83908 17.3826 2.49252 16.2664C2.1729 15.2369 2 14.1405 2 13C2 6.92487 6.92487 2 13 2C19.0751 2 24 6.92487 24 13Z"
            stroke="currentColor"
            stroke-width="4"
          />
        </svg>
      </Button>
    </div>
    <slot />
  </div>
</template>
