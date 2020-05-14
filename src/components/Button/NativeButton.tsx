import { Platform } from 'react-native';

const Button = Platform.select({
  ios: () => require('react-native-ios-kit/src/components/Button').default,
  default: () => require('react-native-paper/src/components/Button').default,
})();

export default Button;
