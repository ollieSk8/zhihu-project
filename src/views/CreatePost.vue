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
                    tag="textarea"
                    placeholder="请输入文章详情"
                    :rules="contentRules"
                />
            </div>
            <template #submit>
                <button class="btn btn-primary btn-large">发表文章</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RulesProp } from '../typings'
const titleVal = ref('')
const titleRules: RulesProp = [{ type: 'required', message: '文章标题不能为空' }]
const contentVal = ref('')
const contentRules: RulesProp = [{ type: 'required', message: '文章详情不能为空' }]
const onFormSubmit = (result: boolean) => {
    if (result) {
        console.log('验证成功')
    }
}
</script>

<style lang="less" scoped></style>
