import styled from 'styled-components/native'

export const Wrapper = styled.View<{ isVisible: boolean }>`
  /* width: 100%; */
  /* height: 60%; */
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: flex-end;
`
export const Container = styled.View`
  height: 75%;
  background-color: #4c6793;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-horizontal: 16px;
`
export const CLoseButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
export const FormLabel = styled.Text`
  color: #fff;
  font-size: 20px;
`
export const FormTextInput = styled.TextInput`
  border-bottom-width: 2px;
  border-color: #fff;
  padding: 4px;
  margin-bottom: 16px;
  color: #fff;
`
export const SubmitButton = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 8px 16px;
  border-width: 2px;
  border-color: #fff;
  align-self: center;
  border-radius: 100px;
`
export const SubmitButtonTitle = styled.Text`
  font-size: 20px;
  color: #fff;
`
