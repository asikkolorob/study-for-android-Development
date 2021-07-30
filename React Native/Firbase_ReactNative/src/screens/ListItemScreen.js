import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native';

const ListItemScreen = () => {
    const MyItem = [
        {
            name:'Md.Suhag',
            year:'2019',
            phone:'01745......',
            image:'https://fdn.gsmarena.com/imgroot/reviews/19/apple-iphone-11/lifestyle/-1024w2/gsmarena_001.jpg',
            myImage:'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg',
            desc: 'I am selling this iphone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            name: 'Md.Abdullah',
            year: '2020',
            phone: '01945......',
            image: 'https://th.bing.com/th/id/OIP.0yRYWi-_f8R_rrXAc0n0fwHaEK?w=308&h=180&c=7&o=5&pid=1.7',
            desc: 'I am selling this iphone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    ]
    const renderItem = (item) => {
        return (
            <View style={{
                margin: 5,
                height: '48%',
                width:'95%',
                borderRadius: 12,
                elevation: 6
            }}>
                <View style={{
                    margin: 5,
                    padding: 10,
                    flexDirection: 'row'
                }}>
                    <Image
                        source={require('../assets/processed.png')}
                        style={{ height: 61, width: 60 }}
                    />
                    <View>
                        <Text style={{ marginTop: 10, marginLeft: 5 }}>{item.name}</Text>
                        <Text style={{ marginLeft: 5 }}>{item.year}</Text>
                    </View>
                </View>
                <View>
                    <Image
                        source={require('../assets/pexels-cesar-perez-733745.jpg')}
                        style={{ height: 200, width: 366, marginLeft: 12 }}
                    />
                    <Text style={{ marginLeft: 12, marginVertical: 5 }}>{item.desc}</Text>
                </View>
                <View style={{ marginLeft: 15, marginTop: 20, flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Text>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginLeft: 15 }}
                    >
                        <Text>Call Sellar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <View>
            <FlatList 
                data={MyItem}
                keyExtractor={(item) => item.phone}
                renderItem={({item}) => renderItem(item)}
            />
        </View>
    )
}

export default ListItemScreen

const styles = StyleSheet.create({})
