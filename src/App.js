import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>인생</Text>
      <Text style={{fontSize: 30, marginBottom: 10}}>Button Componet</Text>
      <Button title="Button" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff',
  },
  title: {
    fontSize: 30,
  },
});

export default App;
