<script setup lang="ts">
import type { AbbrProps } from './types'
const props = withDefaults(defineProps<AbbrProps>(), {})
defineOptions({
  name: 'Abbr_',
})
</script>

<template>
  <abbr :title="props.title" class="html-abbr">
    <slot></slot>
  </abbr>
</template>

<style scoped>
@import url('./Abbr.css');
</style>
