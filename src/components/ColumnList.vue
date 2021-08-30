<template>
  <div class="row">
    <div v-for="column in columnList" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column?.avatar?.url"
            :alt="column.title"
            class="rounded-circle border border-light my-3"
          />
          <h5 class="card-title">
            {{ column.title }}
          </h5>
          <p class="card-text text-left">
            {{ column.description }}
          </p>
          <router-link :to="`/column/${column._id}`" class="btn btn-outline-primary">
            进入专栏
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import type { ColumnProps } from '../typings'
import { computed } from 'vue'
const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },
})

const columnList = computed(() =>
  props.list.map((column) => {
    if (!column.avatar) {
      column.avatar = {
        url: new URL('../assets/column.jpg', import.meta.url).href,
      }
    } else {
      column.avatar.url = column.avatar.url + '?x-oss-process=image/resize,m_pad,h_50,w_50'
    }
    return column
  }),
)
</script>

<style lang="less" scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
