import React from 'react';
import {ImageBackground,Button, TextInput,Image,StyleSheet, Text, View, Pressable } from 'react-native';
import Loginform from './Loginform';
import Reg from './Reg';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


const Homee = ({setDisp}) => {


    const logo="https://upload.wikimedia.org/wikipedia/en/c/cb/Monkey_D_Luffy.png";
    const greet=<>
        <Text>
        Welcome User
        </Text>
        
    </>

    const clickHandler=()=>{
        
    }
  return (
    <ImageBackground source={require("../images/new1.jpg")}
        // uri: 'https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114611.jpg?w=996&t=st=1720766092~exp=1720766692~hmac=2a519591150638544f7d972c7880429c5b407ccce45d325527d5891524563e9a'     
          resizeMode="cover" style={styles.bg} >
      <View style={[styles.container,styles.theme]}>
    <Text style={styles.txt}>{greet}</Text>
    <Text>   </Text>
    <Text>   </Text>
    <Text>   </Text>
    <Text style={styles.txt2}>Welcome to our new streaming platform. Signup for free and enjoy your favourite shows anywhere anytime</Text>
  </View>
  <View style={[styles.container1,styles.theme]}>
    {/* <Text onClick={()=>{setDisp('signup'); console.log("Kush")}}  style={styles.txt3}>Sign Up</Text> */}
    {/* <Button onPress={() => { 
          setDisp('login');
          <Loginform setDisp={setDisp}/>;
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}
          title="Sign Up"/> */}
          <Text style={styles.txt2}> New Here?   </Text>
          <Text>    </Text>
           <Pressable style={{backgroundColor:'aqua',padding:20,width:150}} onPress={() => { 
          setDisp('login');
          <Loginform setDisp={setDisp}/>;
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}>
          <Text style={{fontSize:24,paddingLeft:25}}>Signup</Text>
          </Pressable>
    <Text>    </Text>
    <Text>    </Text>
    <Text>    </Text>
    <Text style={styles.txt2}> Already have an account?   </Text>
    <Text>    </Text>
    {/* <Text  onClick={()=>{setDisp('login')}}style={styles.txt3}>Login</Text> */}
    <Pressable style={{backgroundColor:'aqua',padding:20,width:150}} onPress={() => { 
          setDisp('signup');
          <Reg setDisp={setDisp}/>;
          console.log('================');
          console.log("Button Clicked");
          console.log('================');
        }}>
          <Text style={{fontSize:24,paddingLeft:25}}>Login</Text>
          </Pressable>
        {/* title="Login"/> */}
  </View>
    </ImageBackground>

  )
}
const styles = StyleSheet.create({
    // cont: {
    //     flex: 1,
    //   backgroundColor: '#fff',
    // //   paddingTop:50,
    // //   paddingHorizontal:30,
    //   alignItems: 'center',
    // },
    container: {
        //marginTop: StatusBar.currentHeight,
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        width:"100%",
        // justifyContent: 'center',
      },
    container1: {
        flex: 1,
        alignItems: 'center',
        width:"100%",
      },

    //   theme:{
    //     backgroundColor:'tomato',
    //   },
    bg:{
        flex: 1,
         width:"100%" ,
        },
    txt:{
      fontWeight:'bold',
        paddingTop:150,
        fontSize:50,
        color:'aquamarine'
    },
    txt2:{
      color:'beige',
        fontSize:24,
        paddingLeft:20,
        paddingRight:20,
    },
    txt3:{
        fontSize:27,
        margin:3,
        padding:10,
        borderWidth: 5,
        borderColor:'aquamarine',
        color:'purple'
    }
  });

export default Homee