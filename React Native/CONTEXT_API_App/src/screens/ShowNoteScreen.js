import React, {useContext} from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/dist/Feather';

import { NotesContext } from '../context/NotesContext';

const ShowNoteScreen = ({route,navigation}) => {
    const {id} = route.params
    const {state} = useContext(NotesContext)
    const note = state.find((record) => {
        return record.id === id
    })
    return (
        <View style={{flex:1}}>
        <StatusBar backgroundColor="#e29578" barStyle="dark-content" hidden={false} />
            <View style={{ flex: 1,}}>
                <ImageBackground
                    source={require('../assets/images/pexels-cátia.jpg')}
                    style={{flex:1}}
                    resizeMode="cover"
                >
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.btnPlusStyle}
                            onPress={() => navigation.navigate('EditNote',{id})}
                        >
                            <SimpleLineIcon name='edit' size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.titleStyle}>{note.title}</Text>
                    <Text style={styles.contentStyle}>{note.content}</Text>
                </ImageBackground>
            </View>
        </View>
    )
}

export default ShowNoteScreen;

const styles = StyleSheet.create({
    titleStyle:{
        color:'#fff',
        fontSize:22,
        textAlign:'center'
    },
    contentStyle:{
        color:'#fff'
    },
    btnContainer: {
        alignItems: 'center'
    },
    btnPlusStyle: {
        marginVertical: 10,
        backgroundColor: '#43aa8b',
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
