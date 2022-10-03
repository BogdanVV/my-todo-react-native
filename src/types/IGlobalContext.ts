import { ITodo } from './ITodo'

export interface IGlobalContext {
  todos: ITodo[]
  deleteTodo: (id: string | number) => void
  addTodo: (newTodo: ITodo) => void
  updateTodo: (todo: Partial<ITodo>) => void
  createTodo: (todo: Partial<ITodo>) => void
  selectedTodoId: string | number | null
  setSelectedTodoId: (todoId: number | string | null) => void
  getTodos: () => void
}
