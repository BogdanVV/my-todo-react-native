import React, { PropsWithChildren } from 'react'
import { Modal, Text, View } from 'react-native'
import { Container, Wrapper } from './styled'

interface IEditTodoModalProps {
    isVisible: boolean,
}

export const EditTodoModal: React.FC<PropsWithChildren<IEditTodoModalProps>> = ({
    isVisible,
}) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
    >
        <Wrapper>
            <Container>
                <Text>MODAL</Text>
            </Container>
        </Wrapper>
    </Modal>
  )
}
