// event bus 重写

// event name
export type EventType = string | symbol
// event
export type Handler<T = any> = (event?: T) => void
export type EventHandleList = Array<Handler>

export type WildcardHandler = (type: EventType, handler: any) => void
export type WildCardEventHandlerList = Array<WildcardHandler>

export type EventHandlerMap = Map<EventType, EventHandleList | WildCardEventHandlerList>
export interface Emitter {
  all: EventHandlerMap
  on<T = any>(type: EventType, handler: Handler<T>): void

  off<T = any>(type: EventType, handler: Handler<T>): void

  emits<T = any>(type: EventType, handler: Handler<T>): void
  clear(): void
}

export default function mitt(all?: EventHandlerMap) {
  all = all || new Map()
  return {
    all,
    // on handler
    on<T = any>(type: EventType, handler: Handler<T>) {
      
      const handlers = all?.get(type)
      
      // 追加进去
      const added = handlers && handlers.push(handler)
      // 如果  handlers 不存在 则需要在type当中追加进去
      if (!added) {
        all?.set(type, [handler])
      }
      console.log("this is on",all);
    },
    // off handler
    off<T = any>(type: EventType, handler: Handler<T>) {
      const handlers = all?.get(type)
      if (handlers) {
        //  >>> 0 ????? maybe 转为数字
        handlers.splice(handlers.indexOf(handler) >>> 0, 1)
      }
    },
    // emit event
    emit<T = any>(type: EventType, e: T) {
      console.log("this is emit",all);
      
      ((all?.get(type) || []) as EventHandleList).map((item) => {
        item(e)
      });
      ((all?.get('*') || []) as WildCardEventHandlerList).map((item) => {
        item(type, e)
      })
    },

    clear() {
      this.all.clear()
    },
  }
}
