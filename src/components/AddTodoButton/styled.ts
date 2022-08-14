import styled from 'styled-components/native'

export const AddButtonContainer = styled.View`
    overflow: visible;
    position: absolute;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex: 1;
    height: 100%;
    align-self: center;
    align-items: flex-start
`
export const AddButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    flex-shrink: 0;
    background-color: #393E46;
    border-width: 1px;
    border-color: #fff;
    position: relative;
    top: -10px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
`