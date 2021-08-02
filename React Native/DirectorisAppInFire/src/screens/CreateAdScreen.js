import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

const CreateAdScreen = () => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <StatusBar backgroundColor="#BC9115" barStyle="dark-content" hidden={false} />
            <Text style={styles.text}>Create Ad!</Text>
            <TextInput
                placeholder='Ad Title'
                value={name}
                placeholderTextColor='gray'
                style={styles.input}
                onChangeText={text => setName(text)}
            />
            <TextInput
                placeholder='Describe what you are selling'
                value={desc}
                placeholderTextColor='gray'
                style={styles.input}
                numberOfLines={3}
                multiline={true}
                onChangeText={text => setDesc(text)}
            />
            <TextInput
                placeholder='Year of purchase'
                value={year}
                placeholderTextColor='gray'
                style={styles.input}
                keyboardType='numeric'
                onChangeText={text => setYear(text)}
            />
            <TextInput
                placeholder='Price in BD'
                value={price}
                placeholderTextColor='gray'
                style={styles.input}
                keyboardType='numeric'
                onChangeText={text => setPrice(text)}
            />
            <TextInput
                placeholder='Your contact Number'
                value={phone}
                placeholderTextColor='gray'
                style={styles.input}
                keyboardType='numeric'
                onChangeText={text => setPhone(text)}
            />
            <View style={styles.customBtnCon}>
                <TouchableOpacity style={styles.btn}>
                    <SimpleLineIcons name='camera' size={20} color='#000'
                        style={styles.icon}
                    />
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Upload Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateAdScreen;

const styles = StyleSheet.create({
    input: {
        margin: 20,
        padding: 10,
        borderWidth: 3,
        borderRadius: 13,
        borderColor: '#BC9115',
        height: 50,
        color:'#000'
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    customBtnCon: {
        height: '20%',
        alignItems:'center'
    },
    btn: {
        backgroundColor: '#BC9115',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 30,
        marginTop: 30,
        width: 350,
    },
    icon: {
        marginLeft: '45%'
    }
})