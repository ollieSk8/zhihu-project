<template>
  <div class="container">
    <div class="role-tree-content">
      <TreeNode :tree-data="treeNodeData" :all-tree-data="treeNodeData"></TreeNode>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { computed } from 'vue'
import { ref } from 'vue'
import TreeNode from './TreeNode.vue'
import type { treeNode } from './type'
// import { GlobalDataProps } from '../../typings'
// import { useStore } from 'vuex'
// const store = useStore<GlobalDataProps>()
const treeData: treeNode[] = [
  {
    treeNodeId: '1',
    treeNodeName: '一级菜单01',
    treeType: 1,
    checked: false,
    indeterminate: false,
    children: [
      {
        treeNodeId: '1-1',
        treeNodeName: '二级菜单01',
        treeType: 1,
        checked: false,
        indeterminate: false,
        children: [
          {
            treeNodeId: '1-1-1',
            treeNodeName: '三级菜单01',
            treeType: 1,
            checked: false,
            indeterminate: false,
            children: [
              {
                treeNodeId: '1-1-1-1',
                treeNodeName: '四级菜单01',
                treeType: 2,
                checked: false,
                indeterminate: false,
                children: [],
              },
              {
                treeNodeId: '1-1-1-2',
                treeNodeName: '四级菜单02',
                treeType: 2,
                checked: false,
                indeterminate: false,
                children: [],
              },
              {
                treeNodeId: '1-1-1-3',
                treeNodeName: '四级菜单03',
                treeType: 1,
                checked: false,
                indeterminate: false,
                children: [
                  {
                    treeNodeId: 'xxxxxx',
                    treeNodeName: 'xxxxxxxx',
                    treeType: 2,
                    checked: false,
                    indeterminate: false,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            treeNodeId: '1-1-2',
            treeNodeName: '三级菜单02',
            treeType: 1,
            checked: false,
            indeterminate: false,
            children: [],
          },
        ],
      },
      {
        treeNodeId: '1-2',
        treeNodeName: '二级菜单02',
        treeType: 1,
        checked: false,
        indeterminate: false,
        children: [
          {
            treeNodeId: '1-2-1',
            treeNodeName: '三级菜单01',
            treeType: 1,
            checked: false,
            indeterminate: false,
            children: [],
          },
          {
            treeNodeId: '1-2-2',
            treeNodeName: '三级菜单02',
            treeType: 1,
            checked: false,
            indeterminate: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    treeNodeId: '2',
    treeNodeName: '一级菜单02',
    treeType: 1,
    checked: false,
    indeterminate: false,
    children: [],
  },
  {
    treeNodeId: '3',
    indeterminate: false,
    treeNodeName: '一级菜单03',
    treeType: 1,
    checked: false,
    children: [],
  },
]
const treeNodeData = ref<any>(treeData)
</script>
<style lang="less">
.container {
  width: 100%;
  .role-tree-content {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 2px;
  }
}
</style>
