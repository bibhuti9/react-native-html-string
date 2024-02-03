import React, { useState } from 'react';
import { convertHTML } from 'react-native-html-string';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [convertToString, setConvertToString] = useState('');
  const html = `<h1>Hey this is react  native</h1>`;

  const onPress = async () => {
    const result = await convertHTML(html);
    setConvertToString(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{html}</Text>
      <Text style={styles.text}>After HTML to String : {convertToString}</Text>

      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>Convert to String</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  btn: {
    marginTop: 40,
    backgroundColor: '#e4aa3f',
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
});
