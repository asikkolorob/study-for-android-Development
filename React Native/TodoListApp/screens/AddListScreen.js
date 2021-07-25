import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, TextInput, Keyboard, Alert, ToastAndroid, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../components/CustomButton';
import { Colors } from '../constants';
import globalStyles from '../styles/globle';
import { createList } from '../store/actions/listActions';

const AddListScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { lists } = useSelector(state => state.list);

  const submitHandler = () => {
    if (name.trim() === '') {
      return Alert.alert('Validation', 'Name is required!');
    }
    const alreadyExist = lists.find(l => l.name.toLowerCase() === name.trim().toLowerCase());
    if (alreadyExist) {
      return Alert.alert('Validation', 'List with this name already exist!');
    }

    dispatch(createList(
      name,
      () => {
        ToastAndroid.show(`List "${name}" created!`, ToastAndroid.LONG);
        Keyboard.dismiss();
        navigation.navigate('Home');
      },
      () => { ToastAndroid.show('Something went wrong, please try again!', ToastAndroid.LONG); },
    ));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={require('../assets/images/pexels3.jpg')} 
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <TextInput style={globalStyles.input} value={name} onChangeText={(val) => setName(val)} placeholder="List name" placeholderTextColor={Colors.FavariteColor} />
          <CustomButton text="Submit" onPress={submitHandler} round />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
  },
  image:{
    flex:1
  }
});

export default AddListScreen;