import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Button Component</Text>
      <MyButton title="Button" onPress={() => alert('props')} />
      <MyButton title="Button" onPress={() => alert('props')}>
        Children Props
      </MyButton>
      <MyButton onPress={() => alert('Default')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default App;
