<template>
  <div>AboutView</div>
  {{ $route.path }}
  <button @click="$router.push('/')">Home으로 이동</button>
  <h2>Store</h2>
  <p>
    {{ counter }}
  </p>
  <p>
    {{ doubleCount }}
  </p>
  <button @click="increment()">increase</button>
  <p>
    {{ increment }}
  </p>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
// reactive 객체를 구조분해할당하여 뽑아오면 반응성을 잃게 됨.
// console.log(store, '===')

const { counter, doubleCount } = storeToRefs(store) // 값은 반응성을 씌워주며 구조분해할당을 통해서 가져왔음
const { increment } = store // aactions. 메서드는 바로 구조분해할당 가능
counter.value = 100 // 값 바로 할당도 가능.
</script>

<style lang="scss" scoped></style>
