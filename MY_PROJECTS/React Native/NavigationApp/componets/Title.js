import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>State Managment</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold'
    },
    container:{
        paddingVertical:16,
        justifyContent:'center',
        alignItems:'center'
    }
});
