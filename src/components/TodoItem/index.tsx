import React, { PropsWithChildren, useState } from 'react'
import { Text, View } from 'react-native'
import { ITodo } from '../../types/ITodo'
import {
  Container,
  OptionButton,
  InfoLabel,
  OptionsContainer,
  OptionalOptionsContainer,
  InfoContainer,
  Title,
  CreationDate,
  CreationDateContainer,
} from './styled'
import Icon from 'react-native-vector-icons/Ionicons'
import { format } from 'date-fns'

interface ITodoItemProps {
  todo: ITodo
  removeTodo: (id: string | number) => void
  markTodoDone: (id: string | number) => void
  onItemSelect: () => void
}

export const TodoItem: React.FC<PropsWithChildren<ITodoItemProps>> = ({
  todo: { title, id, createdAt, description },
  removeTodo,
  onItemSelect,
  markTodoDone,
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)

  return (
    <Container onPress={onItemSelect} onLongPress={() => setIsOptionsVisible(prevState => !prevState)}>
      <InfoContainer>
        <Title numberOfLines={1}>{title}</Title>
        {description && <InfoLabel numberOfLines={1}>{description}</InfoLabel>}
        {createdAt && (
          <CreationDateContainer>
            <Icon name="time-outline" color="#fff" size={14} />
            <CreationDate>{format(createdAt, 'd.MM.y H:mm')}</CreationDate>
          </CreationDateContainer>
        )}
      </InfoContainer>
      <OptionsContainer>
        {isOptionsVisible && (
          <OptionalOptionsContainer>
            <OptionButton onPress={() => setIsOptionsVisible(prevState => !prevState)}>
              <Icon name="close-outline" size={20} color="#fff" />
            </OptionButton>
            <OptionButton onPress={() => removeTodo(id)}>
              <Icon name="trash-outline" size={20} color="red" />
            </OptionButton>
            <OptionButton onPress={onItemSelect}>
              <Icon name="create-outline" size={20} color="#fff" />
            </OptionButton>
          </OptionalOptionsContainer>
        )}
        <OptionButton onPress={() => markTodoDone(id)} activeOpacity={0.7}>
          <Icon name="checkmark-circle-outline" size={20} color="#fff" />
        </OptionButton>
      </OptionsContainer>
    </Container>
  )
}
