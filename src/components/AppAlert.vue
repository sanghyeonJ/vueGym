<template>
  <Transition name="slide">
    <div v-if="show" class="alert app-alert" :class="typeStyle" role="alert">
        {{ message }}
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'error',
        validator: (value) => {
            return ['success', 'error'].includes(value);
        }
        // success, error 둘중 하나의 값일 경우에만 true
    }
})

const typeStyle = computed(() => {
    return props.type === 'error' ? 'alert-danger' : 'alert-success'
})
</script>

<style lang="scss" scoped>
.app-alert {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
}
// name이 있는경우 (name)-enter, (name)-leave 형식으로 사용
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
