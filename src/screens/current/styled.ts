import styled from 'styled-components/native'

export const Wrapper = styled.View`
  border-width: 0px;
  border-color: green;
  position: relative;
  flex: 1;
  padding-right: 8px;
`
export const ListFooterComponent = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 0 16px 16px;
`
export const TodoList = styled.FlatList`
  padding-right: 8px;
`
export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
export const ListTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  padding: 10px;
  font-weight: 700;
  border-bottom-width: 3px;
  border-color: #fff;
  align-self: flex-start;
`
export const AddButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: #fff;
  border-radius: 20px;
`
export const EmptyListMessage = styled.Text`
  color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-vertical: 30px;
  font-weight: 700;
`
export const ListItemSeparator = styled.View`
  height: 2px;
  background-color: #fff;
`
