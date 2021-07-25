import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';

const Result = ({navigation}) => {
    return (
        <View>
           <View>
               <Text>Result</Text>
           </View>
           <View style={styles.bannerContainer}>
           <Image source={require('../images/Exams-rafiki.png')} 
                style={styles.banner}
                resizeMode='contain'
                />
           </View>
           <View>
               <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
               >
                   <Text>Home</Text>
               </TouchableOpacity>
           </View>
        </View>
    )
}

export default Result;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        height:'100%',
        paddingTop:10
    },
    banner:{
        height:300,
        width:400
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
});
