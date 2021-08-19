<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts" setup>
const emit = defineEmits(['form-submit'])
const submitForm = () => {
  emit('form-submit', true)
}
</script>

<style lang="less" scoped></style>
