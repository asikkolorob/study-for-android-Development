import React, { Component } from 'react';
import { Text, View ,StyleSheet, TextInput,TouchableOpacity} from 'react-native';

const userInfo = {username:'admin',password:'12345678'}

export class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    _login = async () => {
        if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
            alert('Logged In');
            this.props.navigation.navigate('Home')
        } else {
            alert('userName or password incorrect.')
        }
    }

    render() {
        return (
            <View style={styles.container}>

               <View style={{marginTop:300}}>
                    <TextInput
                        placeholder='User Name'
                        placeholderTextColor='#000'
                        style={styles.input}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#000'
                        secureTextEntry
                        style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
               </View>
                
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this._login}
                        >
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Signup</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#14f'
    },
    input: {
        margin: 20,
        height:70,
        padding: 10,
        borderWidth: 3,
        borderRadius: 13,
        borderColor: 'grey',
        color: '#000',
        backgroundColor:'#fff',
        elevation: 1
    },
    btn: {
        backgroundColor: '#f9fb35',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 30,
        height:60,
        width:160,
        alignItems:'center',
        justifyContent:'center'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#000'

    },
})
export default Login;


