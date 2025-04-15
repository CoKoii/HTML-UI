<script setup lang="ts">
import A from './components/A/A.vue'
const a = () => {
  console.log('click')
}
</script>

<template>
  <A href="https://www.baidu.com" disabled @click="a">hahaha</A>
  <A href="#" @click="a">hahaha</A>
</template>

<style scoped></style>
