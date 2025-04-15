<script setup lang="ts">
import type { AProps } from './types'
const props = withDefaults(defineProps<AProps>(), {
  target: '_self',
  type: 'link',
  href: '#',
})
const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    e.preventDefault()
    e.stopPropagation()
  }
}
</script>

<template>
  <a
    :href="props.href"
    :target="props.target"
    class="html-a"
    :class="{ 'html-a--disabled': props.disabled }"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<style scoped>
@import url('./A.css');
</style>
