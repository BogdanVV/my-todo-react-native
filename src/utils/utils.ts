export const getBottomTabIconName = (routeName: string, isFocused: boolean) => {
  switch (routeName) {
    case 'Current':
      return `bookmark${isFocused ? '' : '-outline'}`
    case 'Completed':
      return `checkmark-circle${isFocused ? '' : '-outline'}`
    case 'ShopList':
      return `cart${isFocused ? '' : '-outline'}`
    case 'Settings':
      return `settings${isFocused ? '' : '-outline'}`
    default:
      return 'help-outline'
  }
}
