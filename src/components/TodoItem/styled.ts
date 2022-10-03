import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0 20px 10px;
  align-items: center;
`
export const InfoContainer = styled.View`
  flex: auto;
`
export const InfoLabel = styled.Text`
  color: #fff;
  margin-bottom: 4px;
`
export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-bottom: 4px;
`
export const OptionButton = styled.TouchableOpacity`
  background-color: #546278;
  border-radius: 10px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
export const OptionsContainer = styled.View`
  margin-left: 16px;
  flex-direction: row;
  position: relative;
`
export const OptionalOptionsContainer = styled.View`
  flex-direction: row;
  position: absolute;
  right: 48px;
`
export const CreationDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const CreationDate = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 4px;
`
