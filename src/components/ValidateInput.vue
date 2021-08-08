<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      v-model="inputRef.val"
      :class="{ 'is-invalid': inputRef.error }"
      @blur="validateInput"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ValidateInput',
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
})
const inputRef = reactive({
  val: '',
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
          passed = inputRef.val.trim() !== ''
          break
        case 'email':
          passed = emailReg.test(inputRef.val)
          break
        default:
          break
      }
      return passed
    })
    inputRef.error = !allPassed
  }
}
</script>

<style lang="less" scoped></style>
