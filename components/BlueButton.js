import React from 'react';
import {Text,TouchableOpacity,StyleSheet } from 'react-native';


export default class BlueButton extends React.Component {

   handleClick = () => {
      if(this.props.onPress){
        this.props.onPress();
      }
    };

    render() {
        let { title, style } = this.props;
       return (
           <TouchableOpacity 
               style={[styles.BlueButton, style]} 
               onPress={this.handleClick}
           >
               <Text style={styles.BlueButtonText}>{title}</Text>
           </TouchableOpacity>
       );
     }
}

 const styles = StyleSheet.create({
       BlueButton: {
                     backgroundColor: '#BCE0FD',
                     padding: 15,
                     borderRadius: 4,
                     margin:10,

       },
       BlueButtonText: {
        color: '#2699FB',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'uppercase',

       },
     });

   