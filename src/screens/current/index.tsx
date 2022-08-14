import React, { PropsWithChildren, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { CurrentTodo } from '../../components/CurrentTodo'
import { EditTodoModal } from '../../components'
import { ITodo } from '../../types/ITodo'
import { TodoList, Wrapper } from './styled'

interface IHomeScreenProps {}

export const CurrentTodosScreen: React.FC<PropsWithChildren<IHomeScreenProps>> = ({}) => {
  const [mockTodos, setMockTodos] = useState<ITodo[]>([
    {
      id: 1,
      isCompleted: false,
      title: 'Do some stuff 1'
    },
    {
      id: 2,
      isCompleted: true,
      title: 'Do some stuff 2'
    },
    {
      id: 3,
      isCompleted: true,
      title: 'Do some stuff 3'
    },
    {
      id: 4,
      isCompleted: false,
      title: 'Do some stuff 4'
    },
    {
      id: 5,
      isCompleted: false,
      title: 'Do some stuff 5'
    },
    {
      id: 6,
      isCompleted: true,
      title: 'Do some stuff 6'
    },
    {
      id: 7,
      isCompleted: true,
      title: 'Do some stuff 7'
    },
    {
      id: 8,
      isCompleted: false,
      title: 'Do some stuff 8'
    },
    {
      id: 9,
      isCompleted: false,
      title: 'Do some stuff 9'
    },
    {
      id: 10,
      isCompleted: true,
      title: 'Do some stuff 10'
    },
    {
      id: 11,
      isCompleted: true,
      title: 'Do some stuff 11'
    },
    {
      id: 12,
      isCompleted: false,
      title: 'Do some stuff 12'
    },
  ])
  const [isEditModal, setIsEditModal] = useState<boolean>(true)

  const removeTodo: (id: number | string) => void = (id: number | string) => {
    setMockTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  return (
    <Wrapper>
      <TodoList
        data={mockTodos}
        renderItem={({ item }: { item: ITodo }) => (
          <CurrentTodo removeTodo={removeTodo} todo={item} />
        )}
      />

      <EditTodoModal isVisible={isEditModal} />
    </Wrapper>
  )
}
