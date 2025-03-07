<template>
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-focus v-color="'red'" :value="title" @input="$emit('update:title', $event.target.value)" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3" :value="content" @input="$emit('update:content', $event.target.value)"></textarea>
      </div>
      <slot name="actions"></slot>
    </form>
</template>

<script setup>
defineProps({
    title: String,
    content: String
});

defineEmits(['update:title', 'update:content']);

// 커스텀 디렉티브 (v-if, v-for와 같은것들을 필요에 맞게 만들어서 사용할 수 있음)
// v로 시작하는 카멜케이스로 등록
// const vFocus = {
//   mounted: (el) => {
//     el.focus();
//   }
// }
// 디렉티브 폴더로 옮겨서 관리 -> 글로벌 디렉티브로 관리
</script>

<style lang="scss" scoped>

</style>