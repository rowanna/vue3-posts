<template>
  <div>HomeView</div>
  {{ $route.path }}
  <button @click="$router.push('/about')">about으로 이동</button>
  <h2>{{ $person.name }}</h2>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name)
    // this.$person.sayHello()
  },
}
</script>
<script setup>
import { inject } from 'vue'

const person = inject('person')
console.log(person.name)
</script>

<style lang="scss" scoped></style>
