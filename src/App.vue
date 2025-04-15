<script setup lang="ts">
import { ref } from 'vue'
import type { AInstance } from './components/A/types'
import A from './components/A/A.vue'
const a = ref<AInstance | null>(null)
const printA = () => {
  console.log(a.value?.ref)
}
</script>

<template>
  <A
    ref="a"
    @click="printA"
    href="../public/favicon.ico"
    target="_blank"
    type="email"
    icon="phone"
    download="666"
  >
    click me
  </A>
</template>

<style scoped></style>
