import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/dist/AntDesign';

import { NotesContext } from '../context/NotesContext';

const ListNotesScreen = ({navigation}) => {

    const { state, dispatch} = useContext(NotesContext);

    return (
        <View style={styles.container}>
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
                                onPress={() => navigation.navigate('ShowNote')}
                            >
                                <View style={styles.deleteContainer}>
                                    <Text style={styles.titleStyle}>{item.title}</Text>
                                    {/* <Text style={styles.titleStyle}>{item.id}</Text> */}
                                    <SimpleLineIcon name='delete' size={25} 
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
        backgroundColor:'#a5a58d',
        borderRadius:16
    },
    titleStyle:{
        fontSize:22
    },
    btnPlusStyle:{
        marginVertical:10,
        backgroundColor:'blue',
        width:80,
        height:80,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'
    },
    imgStyle:{
        
    }
})
