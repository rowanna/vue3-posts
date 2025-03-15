<template>
  <div>HomeView</div>
  {{ $route.path }}
  <button @click="$router.push('/about')">about으로 이동</button>
</template>

<script setup></script>

<style lang="scss" scoped></style>
