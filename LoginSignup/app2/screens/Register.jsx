import React from 'react';
import { ImageBackground, TextInput, Image, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const Register = ({ setDisplay }) => {

  const greet = <>
    <Text>
      Welcome
    </Text>

  </>


  return (
    <ImageBackground source={{
      uri: 'https://img.freepik.com/free-vector/teal-green-curve-background_53876-113110.jpg?t=st=1720773125~exp=1720773725~hmac=81d5dfceb608543efe5003e5512da6c034ca85c17729ddd918c90d687716aadd'
    }} resizeMode="cover" style={styles.bg} >
      <View style={[styles.container, styles.theme]}>
        <Text style={styles.txt}>{greet}</Text>


        <View style={[styles.container1, styles.theme]}>
          <Text style={styles.txt2}>Sign Up</Text>
          <TextInput
            placeholder='Enter your Name'
            style={styles.input}
          />

          <TextInput
            placeholder='Enter your mail'
            style={styles.input}
          />

          <TextInput
            placeholder='Enter your phone number'
            style={styles.input}
          />

          <TextInput
            placeholder='Enter your passsword'
            style={styles.input}
            secureTextEntry={true}
          />

          <Button
            title="Register Now"
            buttonStyle={styles.primaryButton}
            textStyle={styles.primaryButtonText}
            borderradius={8}
            icontype="flower-outline"
          />

          <Button
            title="Back"
            onPress={() => {
              setDisplay('');
              console.log('================');
              console.log("Button Clicked");
              console.log('================');
            }}
            buttonStyle={styles.primaryButton1}
            textStyle={styles.primaryButtonText}
            borderradius={8}
            icontype="arrow-back-outline"
          />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
  },
  container1: {
    flex: 1,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    width: "100%",
  },
  bg: {
    flex: 1,
    width: "100%",
  },
  txt: {
    paddingTop: 10,
    fontSize: 38,
    color: 'green'
  },
  txt2: {
    fontSize: 28,
    paddingTop: 0,
    paddingBottom: 20,
    padding: 10,
    fontWeight: 'bold',
    color: 'crimson'
  },
  txt3: {
    paddingLeft: 10,
    fontSize: 22,
  },
  input: {
    width: 300,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    padding: 10,
    margin: 10
  },
  primaryButton: {
    width: 200,
    backgroundColor: '#007bff',
  },
  primaryButton1: {
    width: 100,
    backgroundColor: '#007bff',
  },
  primaryButtonText: {
    color: '#ffffff',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  secondaryButtonText: {
    color: '#ffffff',
  },
  Button3: {
    backgroundColor: '#dc3545',
  },
  dangerButtonText: {
    color: '#ffffff',
  },
});

export default Register