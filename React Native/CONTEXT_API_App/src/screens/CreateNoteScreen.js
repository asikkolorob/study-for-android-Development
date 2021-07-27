import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, StatusBar} from 'react-native';

import { NotesContext } from '../context/NotesContext';

const CreateNoteScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { state, dispatch } = useContext(NotesContext);

    return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor="#e29578" barStyle="dark-content" hidden={false} />
            <ImageBackground
                source={require('../assets/images/undefined.jpg')}
                style={{flex:1}}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <Text style={styles.TextInputStyle}>Enter Title</Text>
                    <TextInput 
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        style={styles.input}
                    />
                    <Text style={styles.TextInputStyle}>Enter Content</Text>
                    <TextInput
                        value={content}
                        onChangeText={(text) => setContent(text)}
                        style={styles.input}
                        numberOfLines={3}
                        multiline={true}
                    />
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => { dispatch({type:'ADD',payload:{title,content}})
                            navigation.goBack()
                        }}
                    >
                        <Text style={styles.SVstyle}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default CreateNoteScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:8
    },
    TextInputStyle:{
        fontSize:22
    },
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:'#000',
        marginVertical:8,
        borderRadius:14
    },
    SVstyle:{
        fontSize:22,
        color:'#fff',
        textAlign:'center'
    },
    btnStyle:{
        backgroundColor:'blue',
        padding:12,
        borderRadius:16,
        marginHorizontal:30,
        marginTop:30
    }
})
