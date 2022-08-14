import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'
import { ITodo } from '../../types/ITodo'
import { Container, DeleteButton, DeleteButtonTitle, InfoLabel } from './styled'

interface ICurrentTodoProps {
  todo: ITodo,
  removeTodo: (id: string | number) => void,
}

export const CurrentTodo: React.FC<PropsWithChildren<ICurrentTodoProps>> = ({
  todo: { title, id, isCompleted },
  removeTodo
}) => {
  return (
    <Container>
      <View>
        <InfoLabel>title: {title}</InfoLabel>
        <InfoLabel>id: {id}</InfoLabel>
        <InfoLabel>isCompleted: {isCompleted.toString()}</InfoLabel>
      </View>
      <DeleteButton onPress={() => removeTodo(id)} activeOpacity={0.7}>
        <DeleteButtonTitle>X</DeleteButtonTitle>
      </DeleteButton>
    </Container>
  )
}
