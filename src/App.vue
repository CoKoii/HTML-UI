<script setup lang="ts">
import A from './components/A/A.vue'
import { ref } from 'vue'
import type { AInstance } from './components/A/types'
const a = ref<AInstance | null>(null)
const printA = () => {
  console.log(a.value?.ref)
}
</script>

<template>
  <A ref="a" @click="printA" href="https://www.baidu.com" target="_blank">click me</A>
</template>

<style scoped></style>
