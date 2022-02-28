import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

import BlueButton from './BlueButton';
import Header from './Header';

export default class LoginScreen extends React.Component {

  state ={
    inputValue: '',
  }
  
  handleTextChange = (val) => {
    this.setState({ inputValue: val });
  };

  buttonHandler = () => {
    if(this.state.inputValue){
      
    console.log(this.state.inputValue);
    this.props.navigation.navigate('MainScreen');

    } else{
      alert('Enter a Number')
    }
  };

  render() {
    let { note } = this.props;
    let {inputValue}= this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header instructions="Sign in to your account" />
        <Text style={styles.infoText}>
          use your phone number to log into your account to view your tasks!{' '}
        </Text>

        <Text style={styles.noteText}> {note} </Text>
        <TextInput style={styles.input} 
        value = {inputValue}
        onChangeText = {this.handleTextChange}
        />
        <BlueButton title="Sign IN" onPress={this.buttonHandler}  />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 10,
    height: 50,
    borderColor: '#2699FB',
    borderWidth: 1,
  },

  noteText: {
    color: '#2699FB',
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 12,
    marginLeft: 10,
  },
  infoText: {
    justifyContent: 'left',
    margin: 10,
    display: 'flex',
    paddingTop: 10,
    color: '#2699FB',
  },
});
