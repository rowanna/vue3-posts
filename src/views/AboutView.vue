<template>
  <div>AboutView</div>
  {{ $route.path }}
  <button @click="$router.push('/')">Home으로 이동</button>
</template>

<script setup>
import { useRoute } from 'vue-router'
</script>

<style lang="scss" scoped></style>
