import React, { PropsWithChildren } from 'react'
import { AddButton, AddButtonContainer } from './styled'
import Icon from 'react-native-vector-icons/Ionicons'

interface IAddTodoButtonProps {
    onPress: () => void,
}

export const AddTodoButton: React.FC<PropsWithChildren<IAddTodoButtonProps>> = ({ onPress }) => {
    return (
        <AddButtonContainer>
            <AddButton activeOpacity={0.7} onPress={onPress}>
                <Icon name="add-outline" size={35} color="#fff" />
            </AddButton>
        </AddButtonContainer>
    )
}
