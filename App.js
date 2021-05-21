import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const buttons = 
  ['AC', 'DEL', '%','/', '7', '8',
   '9', '*', '4', '5', '6', '-',
   '3', '2', '1', '+', '0', '.', 
   '+/-s', '=']

  const [ currentNumb, setCurrentNumb] = useState("")
  const [ lastNumb, setLastNumb] = useState("")

  return (
    
    <View> 
      
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumb}</Text>
        <Text style={styles.resultText}>{currentNumb} </Text>
      </View>

      <View style={styles.button}>
        {buttons.map((buttons) => 
        <TouchableOpacity key={buttons} style={styles.buttons}>
          <Text style={styles.textButton}>{buttons} </Text> 
        </TouchableOpacity>
        )}
      </View>
    </View>

);
}

const styles = StyleSheet.create({
  result: {

    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5'

  },
  screen: {
    
    fontSize: 30,
    margin: 19,

  },
  button:{

    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttons: {

    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 100,
    minWidth: 100
  },
  textButton: {
    color: '#5b5b5b',
    fontSize: 25
  }

});
