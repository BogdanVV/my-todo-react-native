import React, { PropsWithChildren } from 'react'
import { Wrapper } from './styled'
import Icon from 'react-native-vector-icons/Ionicons'

// TODO: fix types
interface ICustomTabButtonProps {
    isFocused: any,
    options: any,
    onPress: any,
    onLongPress: any,
    iconName: string,
}

export const CustomTabButton: React.FC<PropsWithChildren<ICustomTabButtonProps>> = ({
    isFocused,
    options,
    onPress,
    onLongPress,
    iconName,
}) => {
  return (
    <Wrapper
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        activeOpacity={1}
    >
        <Icon
            name={iconName}
            size={isFocused ? 25 : 20}
            color="#fff"
        />
    </Wrapper>
    )
}
