export interface children {
  treeNodeId: string
  treeNodeName: string
  treeType: number
  checked: boolean
  indeterminate: boolean
  children: [] | any
}
export interface treeNode {
  treeNodeId: string
  treeNodeName: string
  treeType: number
  checked: boolean
  indeterminate: boolean
  children: children | [] | any
}
