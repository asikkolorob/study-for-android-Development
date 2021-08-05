import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image,ScrollView,TextInput } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

const AllListings = () => {
    return (
        <View style={{alignItems:'center'}}>
            <View style={styles.searchCon}>
                <View>
                    <SimpleLineIcons
                        name='search'
                        color='#000'
                        size={25}
                        style={{ marginTop: 10, marginLeft: 3 }}
                    />
                </View>

                <TextInput
                    placeholder='Search'
                    style={styles.input}
                    placeholderTextColor='#000'
                />
            </View>
            <ScrollView>
                <View style={{padding:15}}>
                    <View style={styles.cardCon}>
                        <View style={{ height: '40%' }}>
                            <ImageBackground
                                source={require('../assets/bicycle-1872682_1920.jpg')}
                                style={{ flex: 1 }}
                            >
                                <Image source={require('../assets/processed.png')}
                                    style={{ height: 70, width: 70, marginTop: 150, marginLeft: 10 }}
                                />
                            </ImageBackground>
                        </View>
                        <View>
                            <Text style={{ marginTop: 40, fontSize: 16, fontWeight: 'bold' }}>Ashikur Rahman</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, fontSize: 13, }}>2021</Text>
                                <Text style={{ marginTop: 5, fontSize: 13, marginLeft: 10 }}>01621926709</Text>
                            </View>
                            <Text style={{ marginTop: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, }}>200</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>Call Seller</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardCon}>
                        <View style={{ height: '40%' }}>
                            <ImageBackground
                                source={require('../assets/bicycle-1872682_1920.jpg')}
                                style={{ flex: 1 }}
                            >
                                <Image source={require('../assets/processed.png')}
                                    style={{ height: 70, width: 70, marginTop: 150, marginLeft: 10 }}
                                />
                            </ImageBackground>
                        </View>
                        <View>
                            <Text style={{ marginTop: 40, fontSize: 16, fontWeight: 'bold' }}>Ashikur Rahman</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, fontSize: 13, }}>2021</Text>
                                <Text style={{ marginTop: 5, fontSize: 13, marginLeft: 10 }}>01621926709</Text>
                            </View>
                            <Text style={{ marginTop: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, }}>200</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>Call Seller</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardCon}>
                        <View style={{ height: '40%' }}>
                            <ImageBackground
                                source={require('../assets/bicycle-1872682_1920.jpg')}
                                style={{ flex: 1 }}
                            >
                                <Image source={require('../assets/processed.png')}
                                    style={{ height: 70, width: 70, marginTop: 150, marginLeft: 10 }}
                                />
                            </ImageBackground>
                        </View>
                        <View>
                            <Text style={{ marginTop: 40, fontSize: 16, fontWeight: 'bold' }}>Ashikur Rahman</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, fontSize: 13, }}>2021</Text>
                                <Text style={{ marginTop: 5, fontSize: 13, marginLeft: 10 }}>01621926709</Text>
                            </View>
                            <Text style={{ marginTop: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, }}>200</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>Call Seller</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardCon}>
                        <View style={{ height: '40%' }}>
                            <ImageBackground
                                source={require('../assets/bicycle-1872682_1920.jpg')}
                                style={{ flex: 1 }}
                            >
                                <Image source={require('../assets/processed.png')}
                                    style={{ height: 70, width: 70, marginTop: 150, marginLeft: 10 }}
                                />
                            </ImageBackground>
                        </View>
                        <View>
                            <Text style={{ marginTop: 40, fontSize: 16, fontWeight: 'bold' }}>Ashikur Rahman</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, fontSize: 13, }}>2021</Text>
                                <Text style={{ marginTop: 5, fontSize: 13, marginLeft: 10 }}>01621926709</Text>
                            </View>
                            <Text style={{ marginTop: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, }}>200</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>Call Seller</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardCon}>
                        <View style={{ height: '40%' }}>
                            <ImageBackground
                                source={require('../assets/bicycle-1872682_1920.jpg')}
                                style={{ flex: 1 }}
                            >
                                <Image source={require('../assets/processed.png')}
                                    style={{ height: 70, width: 70, marginTop: 150, marginLeft: 10 }}
                                />
                            </ImageBackground>
                        </View>
                        <View>
                            <Text style={{ marginTop: 40, fontSize: 16, fontWeight: 'bold' }}>Ashikur Rahman</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 5, fontSize: 13, }}>2021</Text>
                                <Text style={{ marginTop: 5, fontSize: 13, marginLeft: 10 }}>01621926709</Text>
                            </View>
                            <Text style={{ marginTop: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, }}>200</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>Call Seller</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AllListings;

const styles = StyleSheet.create({
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
