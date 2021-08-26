/* eslint-disable vue/require-default-prop */
<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag === 'input'"
      class="form-control"
      :value="inputRef.val"
      :class="{ 'is-invalid': inputRef.error }"
      v-bind="$attrs"
      @blur="validateInput"
      @input="updateValue"
    />
    <textarea
      v-else
      class="form-control"
      :value="inputRef.val"
      :class="{ 'is-invalid': inputRef.error }"
      v-bind="$attrs"
      @blur="validateInput"
      @input="updateValue"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>
<script lang="ts" setup>
import { defineComponent, onMounted, reactive } from 'vue'
import type { PropType } from 'vue'
import type { RuleProp } from '../typings'
import { emitter } from '../utils'
type TagType = 'input' | 'textarea'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const props = defineProps({
  rules: {
    type: Array as PropType<RuleProp[]>,

    required: true,
  },
  modelValue: String,
  tag: {
    type: String as PropType<TagType>,
    default: 'input',
  },
  tag99: {
    type: String as PropType<TagType>,
    default: 'textarea',
  },
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
    return allPassed
  } else {
    return true
  }
}
onMounted(() => {
  emitter.emit('form-item-created', validateInput)
})
const updateValue = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  inputRef.val = targetValue
  emit('update:modelValue', targetValue)
}
</script>

<style lang="less" scoped></style>
