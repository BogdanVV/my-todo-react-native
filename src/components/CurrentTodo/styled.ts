import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
    border-bottom-width: 1px;
    border-color: #fff;
`
export const InfoLabel = styled.Text`
    color: #fff;
`
export const DeleteButton = styled.TouchableOpacity`
    border-width: 1px;
    border-color: red;
    padding: 5px 10px;
`
export const DeleteButtonTitle = styled.Text`
    color: #fff;
`