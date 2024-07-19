import { StatusBar } from 'expo-status-bar';
import {   StyleSheet, Text, View } from 'react-native';
import LoginSignup from './partitions/LoginSignup';
import Scrollview from './partitions/Scrollview';
import Cardcomp from './partitions/Cardcomp';
import ReusbaleInput from './partitions/ReusableInput';
import ReusableButton from './partitions/ReusableButton';
import CartOptions from './partitions/CartOptions';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginSignup/> */}
      {/* <Scrollview/> */}
      {/* <Cardcomp/> */}
      {/* <ReusbaleInput/> */}
      {/* <ReusableButton/> */}
      <CartOptions/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
