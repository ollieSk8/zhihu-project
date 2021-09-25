<template>
  <div
    v-for="item in props.treeData"
    :key="item.treeNodeId"
    :class="{ inline: item.treeType === 2 }"
  >
    <a-checkbox :checked="item.checked" @change="nodeChange(item)">{{
      item.treeNodeName
    }}</a-checkbox>
    <div :class="['tree-node']">
      <TreeNode :tree-data="item.children" :all-tree-data="props.allTreeData"></TreeNode>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import type { treeNode } from './type'
import TreeNode from './TreeNode.vue'
import { checkedNodes } from './checkedNodes'
const props = defineProps({
  treeData: {
    type: Array as PropType<treeNode[]>,
    required: true,
  },
  allTreeData: {
    type: (Array as PropType<treeNode[]>) || [],
    required: true,
  },
})
const nodeChange = (node) => {
  node.checked = !node.checked
  if (node.checked && isNotExit(node.treeNodeId)) {
    checkedNodes.push(node.treeNodeId)
  } else {
    const index = getNodeIndex(node.treeNodeId)
    checkedNodes.splice(index, 1)
  }
  console.log(node.treeNodeName)
  getLeafCountNodes(node, node.checked)
  console.log(checkedNodes)
  console.log(checkedNodes.length)
}
//是否存在
const isNotExit = (treeNodeId) => {
  return checkedNodes.indexOf(treeNodeId) === -1
}
const getNodeIndex = (treeNodeId) => {
  return checkedNodes.indexOf(treeNodeId)
}
const getLeafCountNodes = (node, status) => {
  if (node.children) {
    node.children.map((child) => {
      if (status) {
        child.checked = true
      } else {
        child.checked = false
      }
      if (status) {
        if (isNotExit(child.treeNodeId)) {
          checkedNodes.push(child.treeNodeId)
        }
      } else {
        const index = getNodeIndex(child.treeNodeId)
        checkedNodes.splice(index, 1)
      }
      getLeafCountNodes(child, status)
    })
  }
}
// const refreshAllSonNodes = (node, status) => {
//   node.children.map((child, index) => {
//     child.checked = !child.checked
//     refreshAllSonNodes(child, status)
//   })
// }

// function treeFindPath(tree: treeNode[], func, path = []) {
//   if (!tree) return []
//   for (const data of tree) {
//     if (func(data)) return path
//     path.push(data)
//     if (data.children) {
//       const findChildren = treeFindPath(data.children, func, path)
//       if (findChildren.length) return findChildren
//     }
//     path.pop()
//   }
//   return []
// }
// const refreshAllParentsNodes = (tree, node) => {
//   for (const data of tree) {
//     data.indeterminate = true
//     if (data.treeNodeId !== node.treeNodeId) {
//       return refreshAllParentsNodes(data.children, node)
//     }
//     data.indeterminate = false
//     // if (data.children) {
//     //   refreshAllParentsNodes(data.children, node)
//     // }
//   }
// }
</script>
<style lang="less">
.tree-node {
  padding-left: 20px;
}
.inline {
  display: inline-block;
}
</style>
