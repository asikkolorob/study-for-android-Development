import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import Title from '../componets/Title';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.bannerContainer}>
                <Image source={require('../images/Exams-bro.png')} 
                    style={styles.banner}
                    resizeMode='contain'
                />
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('QuizScreen')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    banner:{
        height:400,
        width:400
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    container:{
        paddingHorizontal:20,
        height:'100%',
        paddingTop:10
    },
    button:{
        width:'100%',
        backgroundColor:'#168aad',
        padding:16,
        borderRadius:16,
        alignItems:'center',
        marginBottom:30
    },
    buttonText:{
        fontSize:24,
        fontWeight:'900',
        color:'#fff'
    }
});
