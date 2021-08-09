import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const CreacteAds = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [year, setYear] = useState('')
    const [price, setPrice] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')

    const postData = async() => {
        try {
            await firestore().collection('ads')
            .add({
                name,
                desc,
                year,
                price,
                phone,
                image,
                uid:auth().currentUser.uid
            })
            alert('successfully Post')
        } catch (error) {
            alert('somthing went wrong, try again')
        }
        
    }

    const openCamera = () => {
        launchImageLibrary({ quality: 0.5 }, (fileobj) => {
            //    console.log(fileobj)
            const uploadTask = storage().ref().child(`/items/${Date.now()}`).putFile(fileobj.uri)
            uploadTask.on('state_changed',
                (snapshot) => {

                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (progress == 100) { alert("uploaded") }
                },
                (error) => {
                    alert("something went wrong")
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {

                        setImage(downloadURL)
                    });
                }
            );
        })
    }

    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:35,marginVertical:20,color:'#fff'}}>Creact Ad</Text>
            <TextInput
                placeholder='Ad Title'
                placeholderTextColor='#000'
                style={styles.input}
                onChangeText={text => setName(text)}
                value={name}
            />
            <TextInput
                placeholder='Describe what  you are selling'
                placeholderTextColor='#000'
                style={styles.inputDsc}
                numberOfLines={3}
                multiline={true}
                onChangeText={text => setDesc(text)}
                value={desc}
            />
            <TextInput
                placeholder='Year of purchase'
                placeholderTextColor='#000'
                keyboardType='numeric'
                style={styles.input}
                onChangeText={text => setYear(text)}
                value={year}
            />
            <TextInput
                placeholder='Price in Taka'
                placeholderTextColor='#000'
                style={styles.input}
                keyboardType='numeric'
                onChangeText={text => setPrice(text)}
                value={price}
            />
            <TextInput
                placeholder='Your contact Number'
                placeholderTextColor='#000'
                style={styles.input}
                onChangeText={text => setPhone(text)}
                value={phone}
            />
            <View style={{alignItems:'center'}}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => openCamera()}
                >
                    <Text style={styles.btnText}>Upload Image</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => postData()}
                    disabled={image ? false : true}
                >
                    <Text style={styles.btnText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreacteAds;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#14f'
    },
    input: {
        margin: 20,
        height: 70,
        padding: 10,
        borderWidth: 3,
        borderRadius: 13,
        borderColor: 'grey',
        color: '#000',
        backgroundColor: '#fff',
        elevation: 1,
        fontSize:20
    },
    inputDsc:{
        margin: 20,
        height: 100,
        padding: 10,
        borderWidth: 3,
        borderRadius: 13,
        borderColor: 'grey',
        color: '#000',
        backgroundColor: '#fff',
        elevation: 1,
        fontSize: 20
    },
    btn: {
        backgroundColor: '#f9fb35',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 30,
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#000'

    },
})
