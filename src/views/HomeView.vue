<template>
  <div>HomeView</div>
  {{ $route.path }}
  <button @click="$router.push('/about')">about으로 이동</button>
  <h2>{{ $person.name }}</h2>
  {{ position }}
  {{ x }}
  {{ y }}
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
import { inject, reactive, toRef, toRefs } from 'vue'

const person = inject('person')

// console.log(person.name)

const position = reactive({
  x: 100,
  y: 1000,
})

// const x = toRef(position, 'x')
// const y = toRef(position, 'y')

const { x, y } = toRefs(position)
</script>

<style lang="scss" scoped></style>
