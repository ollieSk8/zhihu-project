<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emialVal"
          placeholder="请输入邮箱"
          type="text"
        ></ValidateInput>
        {{ emialVal }}
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <ValidateInput
          :rules="passwordRules"
          v-model="passwordVal"
          placeholder="请输入邮箱"
          type="password"
        ></ValidateInput>
      </div>
      <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'form',
}
</script>
<script lang="ts" setup>
import ValidateInput from '@/components/ValidateInput.vue'
import type { RuleProp } from '../typings'
import { ref } from 'vue'
const emailRules: RuleProp[] = [
  {
    type: 'required',
    message: '电子邮箱地址不能为空',
  },
  {
    type: 'email',
    message: '请输入正确的电子邮箱格式',
  },
]
const passwordRules: RuleProp[] = [
  {
    type: 'required',
    message: '请输入密码',
  },
]
const emialVal = ref('')
const passwordVal = ref('')
</script>

<style lang="less" scoped></style>
