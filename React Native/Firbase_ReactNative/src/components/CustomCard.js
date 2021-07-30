import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

const CustomCard = () => {
    return (
        <View style={{
            margin:10,
            height:'60%',
            borderRadius:12,
            elevation:10
        }}>
            <View style={{
                margin:10,
                padding:10,
                flexDirection:'row'
            }}>
                <Image
                    source={require('../assets/processed.png')}
                    style={{height:61,width:60}}
                />
                <View>
                    <Text style={{ marginTop: 10, marginLeft: 5 }}>Ashikur Rahman</Text>
                    <Text style={{marginLeft:5}}>2021</Text>
                </View>
            </View>
            <View>
                <Image 
                    source={require('../assets/pexels-cesar-perez-733745.jpg')}
                    style={{height:200,width:366,marginLeft:12}}
                />
                <Text style={{marginLeft:12,marginVertical:5}}>I am selling this iphone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
            <View style={{marginLeft:15,marginTop:20,flexDirection:'row'}}>
                <TouchableOpacity>
                    <Text>200</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{marginLeft:15}}
                >
                    <Text>Call Sellar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomCard

const styles = StyleSheet.create({})
