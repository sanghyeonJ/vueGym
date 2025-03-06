<template>
  <!-- <Transition name="slide">
    <div v-if="show" class="alert app-alert" :class="typeStyle" role="alert">
        {{ message }}
    </div>
  </Transition> -->
  
  <!-- <div class="app-alert">
    <div v-for="({message, type}, index) in items" :key="index" class="alert" :class="typeStyle(type)" role="alert">{{ message }}</div>
  </div> -->
  <div class="app-alert">
    <TransitionGroup name="slide">
      <div v-for="({message, type}, index) in items" :key="index" class="alert" :class="typeStyle(type)" role="alert">{{ message }}</div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
  items: {
    type: Array,
  }
})

// 매개변수로 type을 받아야 하기 때문에 computed를 사용할수 없다
const typeStyle = (type) => {
    return type === 'error' ? 'alert-danger' : 'alert-success'
}

// const props = defineProps({
//     show: {
//         type: Boolean,
//         default: false
//     },
//     message: {
//         type: String,
//         required: true
//     },
//     type: {
//         type: String,
//         default: 'error',
//         validator: (value) => {
//             return ['success', 'error'].includes(value);
//         }
//         // success, error 둘중 하나의 값일 경우에만 true
//     }
// })

// const typeStyle = computed(() => {
//     return props.type === 'error' ? 'alert-danger' : 'alert-success'
// })
</script>

<style lang="scss" scoped>
.app-alert {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
}
// Transition 태그에 name 속성이 있는경우 (name)-enter, (name)-leave 형식으로 사용
// name이 없는경우 v-enter, v-leave 형식으로 사용
.slide-enter{
  &-from{
    opacity: 0;
    transform: translateY(-30px);
  }
  &-active{
    transition: all 0.5s ease;
  }
  &-to{
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-leave{
  &-from{
    opacity: 1;
    transform: translateY(0);
  }
  &-active{
    transition: all 0.5s ease;
  }
  &-to{
    opacity: 0;
    transform: translateY(-30px);
  }
}

</style>
