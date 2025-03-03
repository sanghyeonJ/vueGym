<template>
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" :value="title" @input="$emit('update:title', $event.target.value)" />
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
</script>

<style lang="scss" scoped>

</style>