<template>
    <div v-if="show" class="alert app-alert" :class="styleClass" role="alert">
        {{ message }}
    </div>
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

const styleClass = computed(() => {
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
</style>