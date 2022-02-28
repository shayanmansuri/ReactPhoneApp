import React from 'react' ;
import{StyleSheet,View, Image, Text} from 'react-native';

const taskyIcon = require('../assets/tasky-logo.png');


export default class Header extends React.Component{
  render(){
    let {instructions}=this.props;
    return(

      <View style={styles.Container}>

      <View style={styles.top}>

      <Image source={taskyIcon} style={styles.icon}/>

      <Text style={styles.headerText}> Tasky</Text>

      </View>
      
      <Text  style={styles.instructionsText}> {instructions} </Text>
      
      </View>

    );
  }
}


const styles = StyleSheet.create({
  Container:{
    // darkerBlue :'#2699FB',
    // lighterBlue :'#E6F4FF',
    backgroundColor : '#93D0FF',
    
  },

  icon : {
    width: 30,
    height:30,
  },

  top:{
    flexDirection : 'row',
    justifyContent:'center',
    alignItems:'center',
    padding :15,

  },

  headerText:{
        color: '#2699FB',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 10,
  },
  instructionsText:{

        backgroundColor:'#E6F4FF',
        color: '#2699FB',
        fontFamily: 'Arial, sans-serif',
        fontSize: 16,
        fontWeight: 'bold',
        display: 'flex',
        padding: 10,
  }

});