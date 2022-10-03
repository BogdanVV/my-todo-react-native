export interface ITodo {
  id: string | number
  title: string
  isCompleted: boolean
  createdAt: Date
  description?: string
}
