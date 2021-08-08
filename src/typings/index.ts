export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}
export interface UserProps {
  isLogin: boolean
  name: string
}
export interface RuleProp {
  type:'required' | 'email';
  message:string;
}