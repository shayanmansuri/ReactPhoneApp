import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import BlueButton from './components/BlueButton';
import SplashScreen from './components/SplashScreen';

import Header from './components/Header';

import CheckBox from './components/CheckBox'; 
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground
} from 'react-native';




class App extends React.Component {
    render() {
      const Stack = createStackNavigator();
        return (
          
         <NavigationContainer>
         <Stack.Navigator>

             <Stack.Screen 
        name='SplashScreen'
        component={SplashScreen}
        options={{
          title:'SplashScreen',
          headerShown : false
        }}
        />
       

        <Stack.Screen 
        name='LoginScreen'
        component={LoginScreen}
        options={{
          title:'LoginScreen',
          headerShown : false
        }}
        />

    


        <Stack.Screen 
        name='MainScreen'
        component={MainScreen}
        options={{
        title:'MainScreen',
        headerShown : false
        }}
        />



         </Stack.Navigator>
         </NavigationContainer>
        );
    }
}







export default App;