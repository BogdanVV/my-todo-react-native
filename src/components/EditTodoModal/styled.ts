import styled from 'styled-components/native'

export const Wrapper = styled.View<{ isVisible: boolean }>`
    /* width: 100%; */
    /* height: 60%; */
    flex: 1;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: flex-end;
`
export const Container = styled.View`
    border-width: 2px;
    border-color: red;
    height: 75%;
`