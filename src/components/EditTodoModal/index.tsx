import React, { PropsWithChildren } from 'react'
import { Modal, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { CLoseButton, Container, FormTextInput, FormLabel, SubmitButton, SubmitButtonTitle, Wrapper } from './styled'
import { Formik } from 'formik'
import Icon from 'react-native-vector-icons/Ionicons'
import { ITodo } from '../../types/ITodo'

interface IEditTodoModalProps {
  isVisible: boolean
  toggleModal: (id: string | number | null) => void
  selectedTodo: ITodo | undefined
  handleFormSubmit: (todo: Partial<ITodo>) => void
}

export const EditTodoModal: React.FC<PropsWithChildren<IEditTodoModalProps>> = ({
  isVisible,
  toggleModal,
  selectedTodo,
  handleFormSubmit,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <Wrapper>
        <Container>
          <CLoseButton onPress={toggleModal}>
            <Icon name="close-outline" size={24} color="#fff" />
          </CLoseButton>
          <ScrollView>
            <Formik
              initialValues={{
                id: selectedTodo?.id,
                title: selectedTodo?.title || '',
                description: selectedTodo?.description || '',
              }}
              onSubmit={values => handleFormSubmit(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <FormLabel>Title</FormLabel>
                  <FormTextInput
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                  />
                  <FormLabel>Decription</FormLabel>
                  <FormTextInput
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                  />
                  <SubmitButton onPress={handleSubmit}>
                    <SubmitButtonTitle>Submit</SubmitButtonTitle>
                  </SubmitButton>
                </>
              )}
            </Formik>
          </ScrollView>
        </Container>
      </Wrapper>
    </Modal>
  )
}
