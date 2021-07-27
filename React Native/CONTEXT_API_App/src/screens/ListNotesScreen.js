import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, StatusBar} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/dist/AntDesign';

import { NotesContext } from '../context/NotesContext';

const ListNotesScreen = ({navigation}) => {

    const { state, dispatch} = useContext(NotesContext);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#e29578" barStyle="dark-content" hidden={false} />
            <ImageBackground 
                source={require('../assets/images/undefined(2).jpg')}
                style={styles.imgStyle}
                resizeMode="cover"
            >
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.btnPlusStyle}
                        onPress={() => navigation.navigate('Create')}
                    >
                        <SimpleLineIcon name='pluscircle' size={55} color='#fff' />
                    </TouchableOpacity>
                </View>
                
                <FlatList 
                    data={state}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ShowNote',{id:item.id})}
                            >
                                <View style={styles.deleteContainer}>
                                    <Text style={styles.titleStyle}>{item.title}</Text>
                                    {/* <Text style={styles.titleStyle}>{item.id}</Text> */}
                                    <SimpleLineIcon name='delete' size={25} color='#000'
                                        onPress={() => dispatch({ type:'REMOVE',payload:item.id})}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ImageBackground>
        </View>
    )
}

export default ListNotesScreen;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btnContainer:{
        alignItems:'center'
    },
    deleteContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        padding:10,
        marginBottom:5,
        elevation:4,
        backgroundColor:'#99d98c',
        borderRadius:16
    },
    titleStyle:{
        fontSize:22,
        color:'#000'
    },
    btnPlusStyle:{
        marginVertical:10,
        backgroundColor:'#43aa8b',
        width:80,
        height:80,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'
    },
    imgStyle:{
        flex:1
    }
})
