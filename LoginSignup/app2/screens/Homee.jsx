import React from 'react';
import { ImageBackground, Button, TextInput, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import Register from './Register';
import Login from './Login';


const Homee = ({ setDisplay }) => {


  const greet = <>
    <Text>
      Welcome User
    </Text>
  </>

  return (
    <ImageBackground source={require("../images/new1.jpg")}
      resizeMode="cover" style={styles.bg} >
      <View style={[styles.container, styles.theme]}>
        <Text style={styles.txt}>{greet}</Text>
        <Text style={styles.txt2}>Welcome to our new streaming platform. Signup for free and enjoy your favourite shows anywhere anytime</Text>
      </View>
      <View style={[styles.container1, styles.theme]}>
        <Text style={styles.txt2}> New Here?   </Text>
        <Pressable style={{ backgroundColor: 'aqua', padding: 20, width: 150 }} onPress={() => {
          setDisplay('login');
          <Register setDisplay={setDisplay} />;
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}>
          <Text style={{ fontSize: 24, paddingLeft: 25 }}>Signup</Text>
        </Pressable>
        <Text style={styles.txt2}> Already have an account?   </Text>
        <Pressable style={{ backgroundColor: 'aqua', padding: 20, width: 150 }} onPress={() => {
          setDisplay('signup');
          <Login setDisplay={setDisplay} />;
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}>
          <Text style={{ fontSize: 24, paddingLeft: 25 }}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    alignItems: 'center',
    width: "100%",
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
  },
  bg: {
    flex: 1,
    width: "100%",
    height:'100%',
  },
  txt: {
    fontWeight: 'bold',
    paddingBottom:10,
    paddingTop: 150,
    fontSize: 50,
    color: 'aquamarine'
  },
  txt2: {
    paddingTop:10,
    paddingBottom:10,
    color: 'beige',
    fontSize: 24,
    paddingLeft: 20,
    paddingRight: 20,
  },
  txt3: {
    fontSize: 27,
    margin: 3,
    padding: 10,
    borderWidth: 5,
    borderColor: 'aquamarine',
    color: 'purple'
  }
});

export default Homee