<template>
  <form class="validate-form-container">
    <slot name="default" />
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { onUnmounted } from 'vue'
import { emitter } from '../utils'

type ValidateFunc = () => boolean
interface Events {
  'form-item-created': ValidateFunc
}

//手记来自ValidateInput的事件函数
let funcArr: ValidateFunc[] = []
const callback = (func: ValidateFunc) => {
  if (func) {
    funcArr.push(func)
  }
}
emitter.on('form-item-created', callback)
onUnmounted(() => {
  emitter.off('form-item-created', callback)
})
//点击提交按钮时候 向外部发送 form-submit事件
const emit = defineEmits(['form-submit'])
const submitForm = () => {
  const result = funcArr.map((func) => func()).every((result) => result)
  emit('form-submit', result)
}
</script>
<style lang="less" scoped></style>
