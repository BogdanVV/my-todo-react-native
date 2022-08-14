import React, { PropsWithChildren } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuButton } from './styled'

interface IDrawerMenuButtonProps {
    onPress: () => void,
}

export const DrawerMenuButton: React.FC<PropsWithChildren<IDrawerMenuButtonProps>> = ({ onPress }) => {
    return (
        <MenuButton activeOpacity={0.7} onPress={onPress}>
            <Icon name="menu-outline" size={20} color="#fff" />
        </MenuButton>
    )
}
