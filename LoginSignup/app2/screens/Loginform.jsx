import React from 'react';
import {ImageBackground, TextInput,Image,StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const Loginform = ({setDisp}) => {

    const logo="https://upload.wikimedia.org/wikipedia/en/c/cb/Monkey_D_Luffy.png";
    const greet=<>
        <Text>
        Welcome
        </Text>
        
    </>

    
  return (
    <ImageBackground source={{
        uri: 'https://img.freepik.com/free-vector/teal-green-curve-background_53876-113110.jpg?t=st=1720773125~exp=1720773725~hmac=81d5dfceb608543efe5003e5512da6c034ca85c17729ddd918c90d687716aadd'
        }} resizeMode="cover" style={styles.bg} >
      <View style={[styles.container,styles.theme]}>
    <Text style={styles.txt}>{greet}</Text>
    <Text>   </Text>
    <Text>   </Text>
  
  <View style={[styles.container1,styles.theme]}>
        <Text style={styles.txt2}>Sign Up</Text>
    {/* <Text  style={styles.txt3}>Name:-</Text> */}
    <TextInput
          placeholder='Enter your Name'
          style={styles.input}
         //  secureTextEntry={true}
          />
    <Text>    </Text>
    <Text>    </Text>
    {/* <Text style={styles.txt3}>Email:-</Text> */}
    <TextInput
          placeholder='Enter your mail'
          style={styles.input}
         //  secureTextEntry={true}
          />
    <Text>    </Text>
    <Text>    </Text>
    {/* <Text style={styles.txt3}>Phone no.:-</Text> */}
    <TextInput
          placeholder='Enter your phone number'
          style={styles.input}
         //  secureTextEntry={true}
          />
    <Text>    </Text>
    <Text>    </Text>
    {/* <Text style={styles.txt3}>Password:-</Text> */}
    <TextInput
          placeholder='Enter your passsword'
          style={styles.input}
          secureTextEntry={true}
          />
    <Text>    </Text>
    <Text>    </Text>
    {/* <Button onPress={() => { 
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}
          title="Register Now"/> */}
          <Button
        title="Register Now"
        // onPress={() => Alert.alert('Registered')}
        buttonStyle={styles.primaryButton}
        textStyle={styles.primaryButtonText}
        br={8}
        cb="flower-outline"
      />
          <Text>  </Text>
          <Text>  </Text>
          <Text>  </Text>
          {/* <Button onPress={() => { 
          setDisp('');
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}
        title="Back"/> */}
        <Button
        title="Back"
        onPress={() => { 
          setDisp('');
          console.log('================');
          console.log("Button Clicked");
          console.log('================');}}
        // onPress={() => Alert.alert('Registered')}
        buttonStyle={styles.primaryButton1}
        textStyle={styles.primaryButtonText}
        br={8}
        cb="arrow-back-outline"
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
        width:"100%",
      },
    container1: {
        flex: 1,
        paddingLeft:20,
        alignItems: 'center',
        justifyContent:'center',
        paddingRight:20,
        // alignItems: 'center',
        width:"100%",
      },
    bg:{
        flex: 1,
         width:"100%" ,
        },
    txt:{
        paddingTop:20,
        fontSize:38,
        color:'green'
    },
    txt2:{
        // paddingLeft: 108,
        fontSize:28,
        paddingTop:10,
        paddingBottom:20,
        padding:10,
        fontWeight:'bold',
        color:'crimson'
    },
    txt3:{
        paddingLeft: 10,
        fontSize:22,
    },
    input:{
        width:300,
        backgroundColor: '#FFFFFF',
        elevation: 5,
        padding: 10,
        margin: 10
      },
      primaryButton: {
        width:200,
        backgroundColor: '#007bff',
      },
      primaryButton1: {
        width:100,
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

export default Loginform