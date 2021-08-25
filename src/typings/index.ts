export interface ImageProps {
    _id?: string
    url?: string
    createdAt?: string
    fitUrl?: string
}
export interface ColumnProps {
    id: number
    title: string
    avatar?: string
    description: string
}
export type RulesProp = RuleProp[]
export interface UserProps {
    isLogin: boolean
    name?: string
    id?: number
}
export interface RuleProp {
    type: 'required' | 'email'
    message: string
}

export interface PostProps {
    id: number
    title: string
    content: string
    image?: string
    createdAt: string
    columnId: number
}

export interface GlobalDataProps {
    columns: ColumnProps[]
    posts: PostProps[]
    user: UserProps
}
