import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const React_Native_Functional_State = () => {

    const [state, setState] = useState({
        name: 'Ashikur Rahman',
        city: 'Dhaka,Bangladesh',
        age: 19
    })

    const chageValue = () => {
        setState({ name: 'Abdullah', city: 'Bagladesh', age: 20 })
    }
    return (
        <View style={styles.container}>
            <Text>{state.name}</Text>
            <Text>{state.age}</Text>
            <Text>{state.city}</Text>
            <View style={styles.container2}>
                <Button onPress={chageValue} title='click Chage' />
            </View>
        </View>
    )
}

export default React_Native_Functional_State;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fec5bb'
    },
    container2: {
        marginTop: 40
    }
})
