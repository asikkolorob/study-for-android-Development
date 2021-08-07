import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';

export class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:'#fff',fontSize:23}}>Home page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor:'#14f',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default HomePage;
