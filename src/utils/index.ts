import mitt from 'mitt'
export type ValidateFunc = () => boolean
export interface Events {
  'form-item-created': ValidateFunc
}
export const emitter = mitt<Events>()
