import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const UseSateScreen = () => {

    const [count,setCount] = useState(100);

    const resetCount = () => {
        setCount(100)
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize:25,}}>Count: {count}</Text>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.btnText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setCount(prev => prev - 1) }
                >
                    <Text style={styles.btnText}>Decrement</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => resetCount()}
                >
                    <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UseSateScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btn: {
        backgroundColor: '#f9fb',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 20,
        marginVertical:20,
        marginTop: 30,
        height: 60,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#000'

    },
})
