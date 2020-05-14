import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-platform-styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={() => {}}>Test</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
