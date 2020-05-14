import React from 'react';

import { ThemeProvider as IOSThemeProvider } from 'react-native-ios-kit';
import { Provider as PaperProvider } from 'react-native-paper';
import { Platform } from 'react-native';

type Props = {
  theme?: any;
  children: React.ReactElement;
};
const ThemeProviders = (props: Props) => {
  if (Platform.OS === 'ios') {
    return <IOSThemeProvider>{props.children}</IOSThemeProvider>;
  } else {
    return <PaperProvider theme={props.theme}>{props.children}</PaperProvider>;
  }
};
export default ThemeProviders;
