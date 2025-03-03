<template>
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="isPrevPage">
          <!-- <a class="page-link" href="#" aria-label="Previous" @click.prevent="--currentPage"> -->
          <!-- prop로 전달받은 내용이기 때문에 자식 컴포넌트에서 직접 변경해주면 안된다 -->
          <!-- 따라서 emit을 이용해서 부모 컴포넌트에 이벤트를 전달해줘야한다 -->
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="$emit('page', currentPage - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in pageCount" :key="page" class="page-item" :class="{active: currentPage === page}">
          <a class="page-link" href="#" @click.prevent="$emit('page', page)">{{ page }}</a> <!-- prevent를 넣으면 기본동작을 막는다 -->
        </li>
        <li class="page-item" :class="isNextPage">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="$emit('page', currentPage + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
</template>

<script setup>
import { computed } from 'vue';

// 부모 컴포넌트로 부터 현재페이지와 총페이지수를 받아온다.
const props = defineProps({
    currentPage: {
        type: Number,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
})

// props로 전달받은 내용을 변경하려면 emit을 이용해야한다.
defineEmits(['page']);

const isPrevPage = computed(() => ({disabled: props.currentPage === 1}) );
const isNextPage = computed(() => ({disabled: props.currentPage === props.pageCount}) );

</script>

<style lang="scss" scoped>

</style>