import React, {useEffect,useState} from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image,FlatList,Platform,Linking
    } from 'react-native';

import firestore from '@react-native-firebase/firestore';

const FirebaseStore = ({navigation}) => {

    const [items, setItems] = useState([])

    const getDetails = async() => {
        const querySnap = await firestore().collection('ads').get()
        const result = querySnap.docs.map(docsnap => docsnap.data())
        setItems(result)
    }

    const openDail = (phone) => {
        if (Platform.OS === 'android'){
            Linking.openURL(`tel:${phone}`)
        }else {
            Linking.openURL(`telprompt:${phone}`)
        }
    }

    useEffect(() => {
        getDetails()
        return () => {
            console.log('clenup')
        }
    }, [])

    const FirebaseStoreView = (item) => {
        return(
            
            <View style={styles.cardCon}>
                <View style={{ height: '40%' }}>
                    <ImageBackground
                        source={{uri:item.image}}
                        style={{ flex: 1 }}
                    >
                        <Image source={{ uri: item.image}}
                            style={{ height: 70, width: 70, marginTop: 150, marginLeft: 10,borderRadius:40 }}
                        />
                    </ImageBackground>
                </View>
                <View>
                    <Text style={{ marginTop: 40, fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginTop: 5, fontSize: 13, }}>{item.year}</Text>
                        <Text style={{ marginTop: 5, fontSize: 13, marginLeft: 10 }}>{item.phone}</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>{item.desc}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 13, }}>{item.price}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openDail()}>
                            <Text style={{ fontSize: 14, marginLeft: 10,fontWeight:'bold' }}>Call Seller</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        )
    }

    return (
        <View style={styles.container}>
            <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('CreactAds')}
                >
                    <Text style={styles.btnText}>Create Ads</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.phone}
                renderItem={({item}) => FirebaseStoreView(item)}
            />
        </View>
    )
}

export default FirebaseStore;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#14f',
        alignItems: 'center',
    
    },
    btn: {
        backgroundColor: '#f9fb35',
        padding: 12,
        borderRadius: 100,
        marginVertical:20,
        height: 80,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    },
    cardCon: {
        height: 485,
        width: 467,
        padding: 10,
        elevation: 4,
        borderRadius: 14,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 10
    },
    searchCon: {
        height: 50,
        width: '95%',
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    input: {
        height: '100%',
        width: '100%',
        color: '#000',
        fontSize: 20,
        paddingLeft: 10

    }
})
