<template>
    <div class="row g-3">
      <div v-for="(item, index) in items" :key="index" :class="colClass">
        <!-- 부모 컴포넌트에서 아이템이나 인덱스를 사용할수있도록 전달 -->
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
    },
    colClass: {
        type: String,
        default: 'col-4',
    }
})
</script>

<style lang="scss" scoped>

</style>