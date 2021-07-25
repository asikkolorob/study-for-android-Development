import React, {useState} from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quiz = ({navigation}) => {

   const [data,setData] = useState(0);
   const [text,setText] = useState('.........');

   function updateData() {
       setData(data+1);
   }
   function closeData() {
       setData(data-1)
   }
   const changText = () => {
       setText('*/* State managment in react native functional component');
   }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.quetion}>{text}</Text>
                <TouchableOpacity 
                    style={{paddingVertical:12,marginVertical:20,backgroundColor:'#0a9396',paddingHorizontal:12,borderRadius:12,marginHorizontal:130}}
                    onPress={changText}
                >
                    <Text style={{color:'#fff'}}>Text Chang</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.options}>
                <View style={styles.stateText}>
                     <Text style={styles.stateTextStyle}>{data}</Text>
                </View>
                <View style={styles.inOption}>
                    <TouchableOpacity 
                        style={styles.optionButton}
                        onPress={updateData}
                    >
                        <Text style={styles.option}>Update Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.optionButton}
                        onPress={closeData}
                    >
                        <Text style={styles.option}>Close Data</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
                        
            </View>
        </View>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        height:'100%',
        paddingTop:10
    },
    top:{
        marginVertical:16
    },
    options:{
        flex:1,
        flexDirection:'column'
    },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    button:{
        backgroundColor:'#168aad',
        padding:12,
        paddingHorizontal:16,
        borderRadius:16,
        alignItems:'center',
        marginBottom:10
    },
    buttonText:{
        fontSize:18,
        fontWeight:'900',
        color:'#fff'
    },
    quetion:{
        fontSize:30
    },
    option:{
        fontSize:18,
        fontWeight:'900',
        color:'#fff'
    },
    optionButton:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:'#0a9396',
        paddingHorizontal:12,
        borderRadius:12,
        marginHorizontal:20
    },
    parent:{
        height:'100%'
    },
    inOption:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    stateText:{
        alignItems:'center',
        paddingTop:70
    },
    stateTextStyle:{
        color:'#0a4',
        fontWeight:'bold',
        fontSize:40
    }
});
