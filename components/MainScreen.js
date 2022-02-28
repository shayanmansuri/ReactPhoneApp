import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet,SafeAreaView } from 'react-native';

import BlueButton from './BlueButton';
import Header from './Header';
import CheckBox from './CheckBox';


  let tasks = [
    {
        title: 'My first completed task',
        checked: true,
    },
    {
        title: 'My second task',
        checked: false,
    },
    {
        title: 'My third task',
        checked: false,
    },
];





export default class MainScreen extends React.Component {

    handleToggleChanged = (task, checked) => {
    console.log("Check = " + checked);
  }

  renderTasks(){
    let checkBox = [];
    for(let i=0; i<tasks.length ; i++){
      let t = tasks[i]
    checkBox.push(<CheckBox title={t.title} isChecked={t.checked} onToggleChange={this.handleToggleChanged} />);
    }
    return checkBox;
  }
  

  state = {
    inputValue :'',
  }

  handleTextChange = (val) => {
    this.setState({ inputValue: val });
  };

  buttonHandler = () => {
    if(this.state.inputValue){
      console.log(this.state.inputValue)
      
    }else{
      alert('Inter a Task!')
    }
    
  };


   render() {
     let {note}=this.props;
     let{inputValue}= this.state;
     
      return (
         <SafeAreaView style = {styles.container}>
         

            <Header instructions = 'Organize Your Tasks'/>
            
            <Text style={styles.noteText} > {note} </Text>
            <View style={edits.cont}>
            
            <TextInput
             style = {edits.input}
             value={inputValue}
             onChangeText= {this.handleTextChange}
            />
            
            <BlueButton title ="ADD" style={{width:"20%"}}  onPress={this.buttonHandler}/>

            </View>
            
            {this.renderTasks()}
          
              
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
    paddingTop: 23,
    display: "flex",
    

   },
   noteText :{
     color: '#2699FB',
     display : "flex",
    justifyContent:'left',
    fontSize: 14,
    margin: 6,
    
   },
  
 
})

const edits = StyleSheet.create({
  cont:{
    display:"flex",
    flexDirection: "row",

    
  },
     input: {
      display: "flex",
      justifyContent:"flex-start",
      marginLeft:5,
      margin:1 ,
      marginTop:10,
      height: 48,
      borderColor: '#2699FB',
      borderWidth: 1,
  
   },


})