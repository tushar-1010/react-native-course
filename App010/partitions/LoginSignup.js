import { StyleSheet, Text,StatusBar, View } from 'react-native';
import Home from '.././screens/Home.jsx';
import Register from '.././screens/Register.jsx';
import Login from '.././screens/Login.jsx';
import { useState } from 'react';

export default function LoginSignup() {
  const [display,setDisplay]=useState('');


  return (
    <View style={styles.container}>
      {display === ''? <Home setDisplay={setDisplay}/>:(display === 'login' ? <Register setDisplay={setDisplay}/> :<Login setDisplay={setDisplay}/>)}
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
