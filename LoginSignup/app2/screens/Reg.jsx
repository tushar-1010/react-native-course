import React from 'react'
import {ImageBackground,Button,Pressable, TextInput,Image,StyleSheet, Text, View } from 'react-native';

const Reg = ({setDisp}) => {
  return (
    <ImageBackground source={{
        uri:'https://img.freepik.com/free-photo/natural-abstract-shadows_23-2149054687.jpg?w=360&t=st=1720777503~exp=1720778103~hmac=1053eacd2a4ac97b7abf5494298c5eb003ac95ac8a84f105fb0ebf8d4bdeac6c'
       }} resizeMode="cover" style={styles.bg} >
      <View style={[styles.container,styles.theme]}>
    <Text style={styles.txt}>AnimaX</Text>
    <Text>   </Text>
    <Text>   </Text>
  
  <View style={[styles.container1,styles.theme]}>
        <Text style={styles.txt2}>Login to your account</Text>
        <Text style={styles.txt6}>(Enter your Credentials)</Text>
    <Text  style={styles.txt3}>Username/email:-</Text>
    <TextInput
          placeholder='Enter your Username or Email'
          style={styles.input}
         //  secureTextEntry={true}
          />
    <Text>    </Text>
    <Text>    </Text>
    <Text  style={styles.txt3}>Password:-</Text>
    <TextInput
          placeholder='Enter your passsword'
          style={styles.input}
          secureTextEntry={true}
          />
    <Text>    </Text>
    <Text>    </Text>
    {/* <Button  onPress={() => { 
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}
          title="Register Now"/> */}
  </View>
  <Text>  </Text>
  <Text>  </Text>
  <Text>  </Text>
    <Pressable
          style={styles.button}
          onPress={() => {
            console.log('================');
            console.log("Button Clicked");
            console.log('================');
          }}
          title="Login"
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={{ color:'white' ,fontSize: 15 }}>Login</Text>
    </Pressable>
    
    <Button onPress={() => { 
          setDisp('');
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}
        title="Back"/>
  </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width:"100%",
        paddingBottom:320,
      },
    container1: {
        flex: 1,
        paddingLeft:20,
        paddingRight:20,
        alignItems: 'center',
        width:"100%",
      },
    bg:{
        flex: 1,
         width:"100%" ,
        },
    txt:{
        paddingTop:20,
        fontSize:50,
        color:'yellow',
        fontWeight:'bold',

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 36,
        borderRadius: 10,
        elevation: 3,
        width:200,
        backgroundColor: 'green',
        marginBottom:10
      },
    txt2:{
        paddingLeft: 50,
        fontSize:28,
        paddingTop:10,
        padding:10,
        fontWeight:'bold',
        color:'skyblue'
    },
    txt6:{
        paddingLeft: 50,
        paddingBottom:20,
        fontSize:16,
        color:'skyblue',
    },
    txt3:{
        paddingTop:20,
        paddingLeft: 20,
        fontSize:22,
        color:'lightgreen'
    },
    input:{
        width:332,
        backgroundColor: '#FFFFFF',
        elevation: 5,
        padding: 10,
        paddingLeft:20,
        margin: 10
      }
  });


export default Reg