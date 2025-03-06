<template>
  <Transition>
    <div v-if="modelValue">
      <!-- <div v-if="show" class="modal-backdrop fade show"></div> -->
      <div class="modal-backdrop fade show"></div>
      <!-- Modal -->
      <!-- <div v-if="show" class="modal fade show d-block" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> -->
      <div class="modal fade show d-block" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button> -->
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('update:modelValue', false)"></button>
              </slot>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  // show: Boolean,
  modelValue: Boolean,
  title: String
});

defineEmits(['close', 'update:modelValue']);
</script>

<style lang="scss" scoped>
.v-enter{
  &-from{
    opacity: 0;
  }
  &-active{
    transition: all 0.5s ease;
  }
  &-to{
    opacity: 1;
  }
}

.v-leave{
  &-from{
    opacity: 1;
  }
  &-active{
    transition: all 0.5s ease;
  }
  &-to{
    opacity: 0;
  }
}
</style>