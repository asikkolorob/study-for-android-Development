import React, {useState,useEffect} from 'react';
import { 
    StyleSheet, Text, TouchableOpacity, View,TextInput, FlatList,Alert 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Async_Storage = () => {

    const [textInput, SetTextInput] = useState('')
    const [todos,setTodos] = useState([])

    useEffect(() => {
        saveData();
    }, [todos])

    useEffect(() => {
        getTodo();
    }, [])

    const ListItem = ({todo}) => {
        return(
            <View style={styles.listItem}>
                <View style={{flex:1}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>
                    {todo ?.task}
                    </Text>
                </View>
                <TouchableOpacity style={[styles.ActionIcon,{backgroundColor:'red'}]}
                    onPress={() => deleteTodo(todo ?.id)}
                >
                    <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>-</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const saveData = async(todos) => {
        try {
            const stringifyTodos = JSON.stringify(todos)
            await AsyncStorage.setItem('todos', stringifyTodos)
        } catch (e) {
            console.log('somthing went wrong')
        }
    }

    const getTodo = async() => {
        try {
            const todos = await AsyncStorage.getItem('todos')
            if (todos != null) {
                setTodos(JSON.parse(todos))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addTodo = () => {
        if (textInput == '') {
            Alert.alert('Error','Please input Todo')
        }else {
            const newTodo = {
                id: Date.now(),
                task: textInput,
            };
            setTodos([...todos, newTodo])
            SetTextInput('')
        }
    };

    const deleteTodo = todoId => {
        const newTodos = todos.filter(item => item.id != todoId);
        setTodos(newTodos)
    }

    const clearTodo = () => {
        Alert.alert('Confirm','clear todos',[
            {
                text:'Yes',
                onPress: () => setTodos([]),
            },
            {
                text:'No'
            }
        ])
        
    }

    return (
        <View style={{ flex: 1, backgroundColor:'#14f'}}>
            <View style={styles.header}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>ASYNC-STORAGE TODO APP</Text>
                <TouchableOpacity onPress={clearTodo}>
                    <Text style={{ fontSize: 20, color:'red',fontWeight:'bold'}}>DELETE</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:100,padding:20}}
                data={todos}
                renderItem={({item}) => <ListItem todo={item}/>}
            />
            <View style={styles.footer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={textInput}
                        style={{color:'#000',fontSize:17}}
                        placeholderTextColor='#000'
                        placeholder='Add Todo'
                        onChangeText={(text) => SetTextInput(text)}
                    />
                </View>
                <TouchableOpacity onPress={addTodo}>
                    <View style={styles.iconContainer}>
                        <Text style={{fontSize:35}}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Async_Storage;

const styles = StyleSheet.create({
    header:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    footer:{
        position:'absolute',
        bottom:0,
        color:'#f9fb',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
    inputContainer:{
        backgroundColor:'#f9fb',
        elevation:40,
        flex:1,
        height:50,
        marginVertical:20,
        marginRight:20,
        borderRadius:30,
        paddingHorizontal:20
    },
    iconContainer:{
        height:50,
        width:50,
        backgroundColor:'#f9fb',
        borderRadius:25,
        elevation:40,
        alignItems:'center',
        justifyContent:'center'
    },
    listItem:{
        elevation:12,
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10,
        marginVertical:10
    },
    ActionIcon:{
        height:20,
        width:20,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        borderRadius:4
    }
})
