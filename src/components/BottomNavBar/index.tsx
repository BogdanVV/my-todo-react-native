import React from 'react'
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { CurrentTodosScreen } from '../../screens/current'
import { CompletedTodoScreen } from '../../screens/completed'
import Icon from 'react-native-vector-icons/Ionicons'
import { ShopListScreen } from '../../screens/shop-list'
import { getBottomTabIconName } from '../../utils/utils'

const Tab = createBottomTabNavigator()

const labels: { [char: string]: string } = {
  Current: 'Current',
  ShopList: 'Shopping List',
  Completed: 'Completed',
  Settings: 'Settings',
}

export const BottomNavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={getBottomTabIconName(route.name, focused)}
              size={focused ? 25 : 20}
              color={'#fff'}
            />
          ),
          tabBarStyle: {
            backgroundColor: '#393E46',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: labels[route.name],
          tabBarLabelStyle: { fontSize: 12 },
          // tabBarShowLabel: false,
        })}
        sceneContainerStyle={{ flex: 1, backgroundColor: '#222831' }}>
        <Tab.Screen name="Current" component={CurrentTodosScreen} />
        <Tab.Screen name="ShopList" component={ShopListScreen} />
        <Tab.Screen name="Completed" component={CompletedTodoScreen} />
        <Tab.Screen name="Settings" component={CompletedTodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
