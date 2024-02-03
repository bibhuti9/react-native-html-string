import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { convertHTML } from 'react-native-html-string';

export default function App() {
  React.useEffect(() => {
    const html = '<p>demo</p>';
    console.log(convertHTML(html));
  }, []);

  return (
    <View style={styles.container}>
      <Text>demo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
