// 事件总线应当做到统一的去处理

import mitt from './mitt'
import type {EventType,Handler} from './mitt'
const emitter = mitt()


// test 
export const emitMsg =(type: EventType,msg:any):void => {
  emitter.emit(type,msg)
}
// 
export const onMsg = (type: EventType,handler:Handler):void => {
  emitter.on(type,handler)
}

