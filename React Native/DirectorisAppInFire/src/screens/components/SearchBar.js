import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    return (
        <View style={styles.con}>
            <View>
                <SimpleLineIcons 
                    name='search'
                    color='#000'
                    size={25}
                    style={{marginTop:10,marginLeft:3}}
                />
            </View>
            
            <TextInput 
                placeholder='Search'
                style={styles.input}
                placeholderTextColor='#000'
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    con:{
        height:'15%',
        width:'90%',
        marginTop:15,
        backgroundColor:'#fff',
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    input:{
        height:'100%',
        width:'100%',
        color:'#000',
        fontSize:20,
        paddingLeft:10
        
    }
})
