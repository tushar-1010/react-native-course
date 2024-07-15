import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomInput from './src/CustomInput';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fullwidth input space 1</Text>
      <CustomInput
        placeholder="Enter text here"
        inputStyle={{ color: 'blue', fontSize: 18 }}
        containerStyle={{borderColor: 'red',width:'100%', borderWidth: 1, borderRadius: 0, marginBottom: 20 }}
        backgroundColor="yellow"
      />
      <Text style={styles.label}>Bordered input space 2</Text>
      <CustomInput
        placeholder="Enter more text"
        inputStyle={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}
        containerStyle={{ borderColor: 'black',width:200, borderWidth: 4, borderRadius: 10, marginBottom: 20 }}
        backgroundColor="lightblue"
      />
      <Text style={styles.label}>Curved input space 3</Text>
      <CustomInput
        placeholder="Another input"
        inputStyle={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}
        containerStyle={{ borderColor: 'gray',width:300, borderWidth: 1, borderRadius: 50, marginBottom: 20 }}
        backgroundColor="#8617FFFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
    justifyContent: 'center',
    alignItems:'center'
  },
  label: {
    color:'crimson',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
