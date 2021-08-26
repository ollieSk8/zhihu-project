<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          v-model="titleVal"
          :rules="titleRules"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          v-model="contentVal"
          rows="10"
          type="text"
          placeholder="请输入文章详情"
          :tag="'textarea'"
          :tag99="'textarea'"
          :rules="contentRules"
        />
      </div>
      <template v-slot:submit>
        <button class="btn btn-primary btn-large">发表文章</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts" setup>
import ValidateForm from '@/components/ValidateForm.vue'
import validateInput from '@/components/validateInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps, RulesProp, PostProps } from '../typings'
const titleVal = ref('')
const titleRules: RulesProp = [{ type: 'required', message: '文章标题不能为空' }]
const contentVal = ref('')
const contentRules: RulesProp = [{ type: 'required', message: '文章详情不能为空' }]
const store = useStore<GlobalDataProps>()
const router = useRouter()
const onFormSubmit = (result: boolean) => {
  if (result) {
    const { columnId } = store.state.user
    if (columnId) {
      const newPost: PostProps = {
        id: new Date().getTime(),
        title: titleVal.value,
        content: contentVal.value,
        columnId,
        createdAt: new Date().toLocaleString(),
      }
      store.commit('createPost', newPost)
      router.push({
        name: 'columnDetail',
        params: { id: columnId },
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
