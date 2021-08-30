<template>
  <div class="post-list">
    <article v-for="post in postList" :key="post._id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3">
            <img :src="post.image.url" :alt="post.title" class="rounded-lg w-100" />
          </div>
          <p :class="{ 'col-9': post?.image?.url }">{{ post.content }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { PostProps } from '../typings'
const props = defineProps({
  list: {
    required: true,
    type: Array as PropType<PostProps[]>,
  },
})
const postList = computed(() =>
  props.list.map((column) => {
    if (!column.image) {
      column.image = {
        url: new URL('../assets/column.jpg', import.meta.url).href,
      }
    } else {
      column.image.url = column.image.url
    }
    return column
  }),
)
</script>

<style lang="less" scoped></style>
