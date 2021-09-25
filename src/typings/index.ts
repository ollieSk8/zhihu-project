export interface ImageProps {
  _id?: string
  url?: string
  createdAt?: string
  fitUrl?: string
}
export interface ColumnProps {
  _id: string
  title: string
  avatar?: ImageProps
  description: string
}
export type RulesProp = RuleProp[]
export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
  columnId?: number
}
export interface RuleProp {
  type: 'required' | 'email'
  message: string
}

export interface PostProps {
  _id: string
  title: string
  excerpt?: string
  content?: string
  image?: ImageProps
  createdAt: string
  column: string
}
export interface children {
  treeNodeId: string
  treeNodeName: string
  treeType: number
  checked: boolean
  children: [] | any
}
export interface treeNode {
  treeNodeId: string
  treeNodeName: string
  treeType: number
  checked: boolean
  children: children | [] | any
}

export interface GlobalDataProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
  treeData: treeNode[]
}
