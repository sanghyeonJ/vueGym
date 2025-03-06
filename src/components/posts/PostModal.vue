<template>
  <!-- <AppModal :show="show" :title="게시글" @close="closeModal"> -->
  <AppModal v-model="show" :title="게시글">
    <!-- name이 없는 경우 default로 넣어준다. -->
    <template #default>
      <div class="row g-3">
        <div class="col-3 text-muted">제목</div>
        <div class="col-9">{{ title }}</div>
        <div class="col-3 text-muted">내용</div>
        <div class="col-9">{{ content }}</div>
        <div class="col-3 text-muted">작성일</div>
        <div class="col-9">{{ createdAt }}</div>
      </div>
    </template>
    <!-- name이 actions인 슬롯을 찾아서 넣어준다. -->
    <template #actions>
      <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>  
    </template>  
  </AppModal>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  title: String,
  content: String,
  createdAt: [String, Number],
})
const emit = defineEmits(['update:modelValue']);

const show = computed({
  get(){
    return props.modelValue;
  },
  set(value){
    emit('update:modelValue', value);
  }
});
const closeModal = () => {
  show.value = false;
}

</script>

<style lang="scss" scoped>

</style>