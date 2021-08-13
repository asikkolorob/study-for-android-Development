import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

const UseEffectScreen = () => {

    const [count, setCount] = useState(100);
    const [age, setAge] = useState(19);
    const [post, setPost] = useState({});

    const resetCount = () => {
        setCount(100)
    }

    useEffect(() => {
        console.warn('state updadat', count)
        
    },[count])

    useEffect(() => {
        console.warn('GrounUp', age)
    }, [age])

    useEffect(() => {
        let URL = 'http://jsonplaceholder.typicode.com/posts/6'
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setPost(data)
            })
            .catch((e) => {
                console.log(e)
            })
    },[])

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, }}>Count: {count}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.btnText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setCount(prev => prev - 1)}
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
            <View >
                <Text style={{ fontSize: 25, }}>My Age: {age}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setAge(age + 1)}
                >
                    <Text style={styles.btnText}>Increment</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontSize: 25 }}>Tilte: {post.title }</Text>
                <Text style={{ fontSize: 16 }}>Body: {post.body}</Text>
                <Text style={{ fontSize: 16 }}>Body: {post.id}</Text>
                <Text style={{ fontSize: 16 }}>Body: {post.userId}</Text>
            </View>
        </View>
    )
}

export default UseEffectScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#f9fb',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 20,
        marginVertical: 20,
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
