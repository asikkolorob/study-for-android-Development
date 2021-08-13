import React from 'react';
import { Image,Text, View } from 'react-native';

const SplashScreen = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('Login')
    }, 3000);

    return (
        <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>
            <View style={{alignItems:'center',marginTop:200}}>
                <Image
                    style={{ height: 150, width: 150 }}
                    source={require('../assets/SplashScreen.jpg')}
                />
            </View>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>Directorist</Text>
                <Text style={{ textAlign: 'center', fontSize: 22, marginTop: 30, color: 'grey' }}>The world's most complete Wordpress</Text>
                <Text style={{ textAlign: 'center', fontSize: 22, marginTop: 5, fontWeight:'bold'}}>Directory Plugin</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:395}}>
                <Text style={{color:'grey',fontWeight:'bold',fontSize:15}}>Powered by</Text>
                <Text style={{marginLeft:5,fontWeight:'bold',fontSize:16}}>SovWare</Text>
            </View>
        </View>
    )
}

export default SplashScreen;

