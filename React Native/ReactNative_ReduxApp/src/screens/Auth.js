import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View , TouchableOpacity} from 'react-native';

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('signin')
    return (
        <View style={styles.con}>
            <Text style={styles.text}>Please {auth} !!</Text>
            <TextInput 
                keyboardType='email-address'
                placeholder='Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
            />
            {
                auth == 'signin' ?
                    <TouchableOpacity
                        onPress={() => setAuth('signup')}
                    >
                        <Text style={styles.authText}>Dont have an account ?</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity
                        onPress={() => setAuth('signin')}
                    >
                        <Text style={styles.authText}>Already have an account ??</Text>
                    </TouchableOpacity>
            }
                
            <Button 
                title={auth}
                color='#ff4081'
                onPress={() => console.log(email,password)}
            />
        </View>
        
    )
}

export default Auth;

const styles = StyleSheet.create({
    con:{
        height:'60%',
        marginHorizontal:20,
        justifyContent:'space-around',
        // backgroundColor:'#00a3a3'
    },
    text:{
        fontSize:25,
        textAlign:'center'
    },
    input:{
        height:50,
        borderColor:'#ff4081',
        borderWidth:2,
        marginVertical:10,
        borderRadius:12
    },
    authText:{
        textAlign:'center',
        fontSize:18
    }
})
