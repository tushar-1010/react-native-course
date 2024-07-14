// import {  } from 'expo-status-bar';
import { StyleSheet, Text,StatusBar, View } from 'react-native';
import Homee from './screens/Homee.jsx';
import Loginform from './screens/Loginform.jsx';
import Reg from './screens/Reg.jsx';
import { useState } from 'react';

export default function App() {
  const [disp,setDisp]=useState('');


  return (
    <View style={styles.container}>
      {disp === ''? <Homee setDisp={setDisp}/>:(disp === 'login' ? <Loginform setDisp={setDisp}/> :<Reg setDisp={setDisp}/>)}
      {/* <Homee></Homee> */}
      {/* <Loginform></Loginform> */}
      {/* <Reg></Reg> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
