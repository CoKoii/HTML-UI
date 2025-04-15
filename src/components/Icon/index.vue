<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name: 'Icon',
})
const props = defineProps<IconProps>()
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<template>
  <i
    class="html-icon"
    :class="{ [`html-icon--${props.color}`]: props.color }"
    :style="customStyles"
  >
    <font-awesome-icon v-bind="props" />
  </i>
</template>

<style scoped>
@import './style.css';
</style>
