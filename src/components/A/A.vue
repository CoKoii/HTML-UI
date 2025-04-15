<script setup lang="ts">
import type { AProps } from './types'
import { computed, ref } from 'vue'
import Icon from '../Icon/index.vue'
const props = withDefaults(defineProps<AProps>(), {
  target: '_self',
  type: 'link',
  href: '#',
})
// disabled禁止点击
const emit = defineEmits(['click'])
const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    e.preventDefault()
    e.stopImmediatePropagation()
    return
  }
  emit('click', e)
}
// 自定义图标
const iconName = computed(() => {
  if (props.icon === false) return null
  if (typeof props.icon === 'string') return props.icon
  if (props.type === 'phone') return 'phone-volume'
  if (props.type === 'email') return 'paper-plane'
  return null
})
const aRef = ref<HTMLAnchorElement>()
const href = computed(() => {
  if (props.type === 'link') {
    return props.href
  } else if (props.type === 'phone') {
    return `tel:${props.href}`
  } else if (props.type === 'email') {
    return `mailto:${props.href}`
  } else {
    return props.href
  }
})
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
    :href="href"
    :target="props.target"
    class="html-a"
    :class="{ 'html-a--disabled': props.disabled }"
    :rel="props.target === '_blank' ? 'noopener noreferrer' : undefined"
    @click="handleClick"
  >
    <Icon v-if="iconName" :icon="['fas', iconName]" />
    <slot />
  </a>
</template>

<style scoped>
@import url('./A.css');
</style>
