<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :value="inputRef.val"
      :class="{ 'is-invalid': inputRef.error }"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ValidateInput',
  inheritAttrs: false,
}
</script>
<script lang="ts" setup>
import { reactive } from 'vue'
import type { PropType } from 'vue'
import type { RuleProp } from '../typings'
const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const props = defineProps({
  rules: {
    type: Array as PropType<RuleProp[]>,
    required: true,
  },
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
const inputRef = reactive({
  val: props.modelValue,
  error: false,
  message: '',
})
const validateInput = () => {
  if (props.rules) {
    const allPassed = props.rules.every((rule) => {
      let passed = true
      inputRef.message = rule.message
      switch (rule.type) {
        case 'required':
          passed = (inputRef.val as string).trim() !== ''
          break
        case 'email':
          passed = emailReg.test(inputRef.val as string)
          break
        default:
          break
      }
      return passed
    })
    inputRef.error = !allPassed
  }
}
const updateValue = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  inputRef.val = targetValue
  emit('update:modelValue', targetValue)
}
</script>

<style lang="less" scoped></style>
