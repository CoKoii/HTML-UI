<script setup lang="ts">
import type { AProps } from './types'
import { ref } from 'vue'
const props = withDefaults(defineProps<AProps>(), {
  target: '_self',
  type: 'link',
  href: '#',
})
const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    e.preventDefault()
    e.stopImmediatePropagation()
    return
  }
}
const aRef = ref<HTMLAnchorElement>()
defineExpose({
  ref: aRef,
})
defineOptions({
  name: 'A_',
})
</script>

<template>
  <a
    ref="aRef"
    :href="props.href"
    :target="props.target"
    :class="{ 'html-a--disabled': props.disabled }"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<style scoped>
@import url('./A.css');
</style>
