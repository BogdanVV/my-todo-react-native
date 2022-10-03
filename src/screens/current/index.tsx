import React, { PropsWithChildren, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TodoItem } from '../../components/TodoItem'
import { EditTodoModal } from '../../components'
import { ITodo } from '../../types/ITodo'
import {
  AddButton,
  EmptyListMessage,
  ListFooterComponent,
  ListHeader,
  ListItemSeparator,
  ListTitle,
  TodoList,
  Wrapper,
} from './styled'
import Icon from 'react-native-vector-icons/Ionicons'
import { useGlobalContext } from '../../context/GlobalState'

interface IHomeScreenProps {}

export const CurrentTodosScreen: React.FC<PropsWithChildren<IHomeScreenProps>> = ({}) => {
  const [isEditModal, setIsEditModal] = useState<boolean>(false)
  const { getTodos, todos, deleteTodo, updateTodo, selectedTodoId, setSelectedTodoId, createTodo } = useGlobalContext()

  const toggleModal = (id: string | number | null) => {
    setSelectedTodoId(id)
    setIsEditModal(prevState => !prevState)
  }

  const markTodoDone = (id: string | number) => {
    updateTodo({ id, isCompleted: true })
  }

  const handleFormSubmit = (todo: Partial<ITodo>) => {
    if (selectedTodoId) {
      updateTodo(todo)
    } else {
      createTodo(todo)
    }

    toggleModal(null)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper>
        <TodoList
          refreshing={false}
          onRefresh={getTodos}
          data={todos.filter(todo => !todo.isCompleted)}
          renderItem={({ item }: { item: ITodo }) => (
            <TodoItem
              onItemSelect={() => toggleModal(item.id)}
              removeTodo={deleteTodo}
              todo={item}
              markTodoDone={markTodoDone}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          ListHeaderComponent={
            <ListHeader>
              <ListTitle>Current Todos</ListTitle>
              <AddButton onPress={() => toggleModal(null)}>
                <Icon name="add" color="#fff" size={30} />
              </AddButton>
            </ListHeader>
          }
          ListEmptyComponent={<EmptyListMessage>No todos yet</EmptyListMessage>}
        />
        <EditTodoModal
          selectedTodo={todos.find(t => t.id === selectedTodoId)}
          toggleModal={() => toggleModal(null)}
          isVisible={isEditModal}
          handleFormSubmit={handleFormSubmit}
        />
      </Wrapper>
    </SafeAreaView>
  )
}
