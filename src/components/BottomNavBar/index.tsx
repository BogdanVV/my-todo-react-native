import React from 'react'
import { View, Text } from 'react-native'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { CurrentTodosScreen } from '../../screens/current'
import { CompletedTodoScreen } from '../../screens/completed'
import Icon from 'react-native-vector-icons/Ionicons'
import { CustomBottomTab } from '../'

const Tab = createBottomTabNavigator()

export const BottomNavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomBottomTab {...props} />}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          // tabBarIcon: ({ focused, color, size }) => {
          //   if (route.name === 'Current') {
          //     return <Icon name="caret-forward-outline" size={20} color={focused ? 'red' : 'green'} />
          //   } else if (route.name === 'Completed') {
          //     return <Icon name="checkmark-done-outline" size={20} color={focused ? 'red' : 'green'} />
          //   }
          // },
          // tabBarStyle: { backgroundColor: '#393E46', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'red' },
          // tabBarItemStyle: { borderWidth: 1, borderColor: 'orange', flex: 0.5 },
          // tabBarActiveTintColor: 'red',
          // tabBarInactiveTintColor: 'green',
          // tabBarShowLabel: false,
        })}
        sceneContainerStyle={{ flex: 1, backgroundColor: '#222831' }}
      >
        <Tab.Screen name='Current' component={CurrentTodosScreen} />
        <Tab.Screen name='Completed' component={CompletedTodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
