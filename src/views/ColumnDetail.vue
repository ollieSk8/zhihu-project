<template>
  <div class="column-detail-page w-75 mx-auto">
    <div v-if="column" class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column.avatar.url" :alt="column.title" class="rounded-circle border w-100" />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import PostList from '@/components/PostList.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { GlobalDataProps } from '../typings'
import { onMounted } from 'vue'
const route = useRoute()
const store = useStore<GlobalDataProps>()
const currentId = route.params.id
const column = computed(() => store.getters.getColumnById(currentId))

const list = computed(() => store.getters.getPostsByCid(currentId))

onMounted(() => {
  store.dispatch('fetchColum', currentId)
  store.dispatch('fetchPosts', currentId)
})
</script>

<style lang="less" scoped></style>
