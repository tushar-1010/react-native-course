import { StyleSheet, Text,StatusBar, View } from 'react-native';
import Homee from './screens/Homee.jsx';
import Register from './screens/Register.jsx';
import Login from './screens/Login.jsx';
import { useState } from 'react';

export default function App() {
  const [display,setDisplay]=useState('');


  return (
    <View style={styles.container}>
      {display === ''? <Homee setDisplay={setDisplay}/>:(display === 'login' ? <Register setDisplay={setDisplay}/> :<Login setDisplay={setDisplay}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
