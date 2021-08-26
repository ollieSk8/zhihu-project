<template>
  <div>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput
          v-model="emialVal"
          :rules="emailRules"
          placeholder="请输入邮箱"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <ValidateInput
          v-model="passwordVal"
          :rules="passwordRules"
          placeholder="请输入邮箱"
          type="password"
        />
      </div>
      <template v-slot:submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </ValidateForm>
  </div>
</template>
<script lang="ts" setup>
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput from '@/components/ValidateInput.vue'
import type { RuleProp } from '../typings'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
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
const onFormSubmit = (result: boolean) => {
  if (result) {
    router.push({ name: 'home' })
    store.commit('login')
  }
}
</script>

<style lang="less" scoped></style>
