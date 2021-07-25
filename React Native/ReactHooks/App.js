/**
 * **** Basick Hooks ****
 * useState
 * useEffect
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const App = () => {

  const [count, setCount] = useState(100);
  const [age, setAge] = useState(19);
  
  useEffect(() => {
    console.log('count updated', count);

    return () => {
      console.log('unSubcribe')
    }

  }, [count]);
 
  useEffect(() => {
    console.log('I have grown up', age)
  }, [age])

  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>React Basic Hooks</Text>
      <Text style={styles.txtStyle}>Count: {count}</Text>
      <View style={styles.btnContainer}>
        <Button onPress={() => setCount(count + 1)} title="Increment" />  
        <Button onPress={() => setCount(prev => prev - 1)} title="Decrement" />
        <Button onPress={() => setCount(100)} title="Reset" />
      </View>
      <View>
        <Text>My Age is : {age}</Text>
        <Button onPress={() => setAge(age + 1)} title='Increment Age' />
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc8dd',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  btnContainer: {
    flexDirection:'row',
    marginVertical:40,
  },
  txtStyle: {
    fontSize:25
  }
})
