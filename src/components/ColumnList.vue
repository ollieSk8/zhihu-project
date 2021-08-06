<template>
  <div>
    <ul>
      <li v-for="column in list" :key="column.id">
        <img :src="column.avatar" alt="" />
        <h5>{{ column.title }}</h5>
        <p>{{ column.description }}</p>
        <a href="#">进入专栏</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ColumnProps } from '../typings'

export default defineComponent({
  name: 'ColumnList',
})
</script>
<script lang="ts" setup>
import { defineComponent, PropType } from 'vue'

defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },
})
</script>

<style lang="less" scoped></style>
