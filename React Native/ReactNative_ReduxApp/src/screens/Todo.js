import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const Todo = () => {
    const [myTodo,setMyTodo] = useState('')

    const ItemList = () => {
        return(
            <View style={styles.mainCon}>
                <Text>item 1</Text>
                <TouchableOpacity>
                    <Text>close</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.con}>
            <TextInput 
                placeholder='write todo'
                onChangeText={text => setMyTodo(text)}
                value={myTodo}
                style={styles.input}
            />
            <Button 
                title='Add Todo'
                color='#ff4081'
                onPress={() => {}}
            />
            <ItemList />
        </View>
    )
}

export default Todo;

const styles = StyleSheet.create({
    con: {
        marginHorizontal: 20,
        // backgroundColor:'#00a3a3'
    },
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    input: {
        height: 50,
        borderColor: '#ff4081',
        borderWidth: 2,
        marginVertical: 10,
        borderRadius: 12
    },
    authText: {
        textAlign: 'center',
        fontSize: 18
    },
    img:{
        height:50,
        width:50
    },
    mainCon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    }
})
