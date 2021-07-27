import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

import { NotesContext } from '../context/NotesContext';

const EditNoteScreen = ({ navigation,route }) => {
    const {id} = route.params;
    
    const { state, dispatch } = useContext(NotesContext);
    const particualNote = state.find((record) => {
        return record.id === id
    })
    const [title, setTitle] = useState(particualNote.title);
    const [content, setContent] = useState(particualNote.content);
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#e29578" barStyle="dark-content" hidden={false} />
            <ImageBackground
                source={require('../assets/images/pexels-matheus.jpg')}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <Text style={styles.TextInputStyle}>Update Title</Text>
                    <TextInput
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        style={styles.input}
                    />
                    <Text style={styles.TextInputStyle}>Update Content</Text>
                    <TextInput
                        value={content}
                        onChangeText={(text) => setContent(text)}
                        style={styles.input}
                        numberOfLines={3}
                        multiline={true}
                    />
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => {
                            dispatch({ type: 'UPDATE', payload: { title, content } })
                            navigation.navigate('Notes')
                        }}
                    >
                        <Text style={styles.SVstyle}>Update Note</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default EditNoteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8
    },
    TextInputStyle: {
        fontSize: 22,
        color:'#fff'
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#fff',
        marginVertical: 8,
        borderRadius: 14,
        color:'#fff'
    },
    SVstyle: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center'
    },
    btnStyle: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 16,
        marginHorizontal: 30,
        marginTop: 30
    },
})
