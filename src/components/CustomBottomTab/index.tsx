import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { PropsWithChildren } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CustomTabButton, AddTodoButton } from '../'
import { DrawerMenuButton } from '../DrawerMenuButton'
import { Wrapper } from './styled'

export const CustomBottomTab: React.FC<PropsWithChildren<BottomTabBarProps>> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={{
        position: 'relative'
      }}
    >

      <Wrapper>

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          let iconName

          if (route.name === 'Current') {
            iconName = isFocused ? 'layers' : 'layers-outline'
          } else {
            iconName = isFocused ? 'checkbox' : 'checkbox-outline'
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              // TODO: fix types
              // @ts-ignore
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <CustomTabButton
              isFocused={isFocused}
              options={options}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.name}
              iconName={iconName}
            />
          );
        })}

      </Wrapper>

        <AddTodoButton onPress={() => console.log('Add button')} />

        <DrawerMenuButton onPress={() => console.log('Menu button')} />
    </View>
  )
}
