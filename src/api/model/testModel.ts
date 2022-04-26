export interface testRequest {}
export interface testResponse {
  name: string
  userid: string
  signature: string
  introduction: string
  title: string
  group: string
  tags: Array<object>
  notifyCount: number
  unreadCount: number
  country: string
  address: string
  phone: string
}
