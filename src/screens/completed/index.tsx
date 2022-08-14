import React, { PropsWithChildren } from 'react'
import { Text } from 'react-native'

interface ISecondScreenProps {}

export const CompletedTodoScreen: React.FC<PropsWithChildren<ISecondScreenProps>> = ({}) => {
  return (
    <Text>CompletedTodoScreen</Text>
  )
}
