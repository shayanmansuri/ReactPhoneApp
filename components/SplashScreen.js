import React from 'react';
import{View,StyleSheet, ImageBackground, Text,Image} from 'react-native';

import BlueButton from './BlueButton';

const bgImage = require('../assets/paper.jpg');
const taskyIcon = require('../assets/tasky-logo.png');
const taskyLogo= require('../assets/tasky-name.png');

export default class SplashScreen extends React.Component{

    buttonHandler = () =>{
      // console.log('Going to LoginScreen')
      this.props.navigation.navigate('LoginScreen')
    }

    render(){
      return(

        <ImageBackground source = {bgImage}
        style={styles.cotainer}>

        <Image source = {taskyIcon}
        style={styles.icon} /> 

        <Image source={taskyLogo}
        style={styles.logo} 
        resizeMode = "contain"/>

        <Text style={styles.tagline}> Get Things Done </Text>

        <BlueButton title ="Go" style={{width:"100%"}}  onPress={this.buttonHandler}/>

        
        </ImageBackground>

      );
    }
}

const styles= StyleSheet.create({
  cotainer: {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center',
    paddingLeft: 25,
    paddingRight:25,
  },

  icon:{
    width: 64,
    height:64,
    marginBottom: 20 ,
  },

 logo:{
   width:200,
   height: 50,
   marginBottom:10,
 },

 tagline :{
   color: '#2699FB',
   textTransform : 'uppercase',
   textAlign : 'center',
   fontSize: 24 ,
   fontWeight:'bold',
   marginBottom :50,
 },
});