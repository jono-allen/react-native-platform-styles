import React from 'react';
import { Platform } from 'react-native';

import { Button as PaperButton } from 'react-native-paper';
import { Button as IOSButton } from 'react-native-ios-kit';

type PropTypes = React.ComponentProps<typeof PaperButton | typeof IOSButton>;
type PropsWithOutTheme = Omit<PropTypes, 'theme'>;

const Button = (props: PropsWithOutTheme) => {
  if (Platform.OS === 'ios') {
    return React.createElement(IOSButton, props);
  }
  return React.createElement(PaperButton, props);
};
export default Button;
