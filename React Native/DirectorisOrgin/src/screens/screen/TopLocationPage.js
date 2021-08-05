import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

const AllCategories = () => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <View style={styles.popularHadingCon}>
                    <Text style={styles.text1}>All Location</Text>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={styles.popularCardCon}>
                            <TouchableOpacity style={styles.Locationpost}>
                                <ImageBackground
                                    source={require('../../assets/nature-3362341_1920.jpg')}
                                    style={styles.LocationimgBox}
                                >
                                    <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Locationpost}>
                                <ImageBackground
                                    source={require('../../assets/nature-3362341_1920.jpg')}
                                    style={styles.LocationimgBox}
                                >
                                    <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Locationpost}>
                                <ImageBackground
                                    source={require('../../assets/nature-3362341_1920.jpg')}
                                    style={styles.LocationimgBox}
                                >
                                    <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Locationpost}>
                                <ImageBackground
                                    source={require('../../assets/nature-3362341_1920.jpg')}
                                    style={styles.LocationimgBox}
                                >
                                    <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Locationpost}>
                                <ImageBackground
                                    source={require('../../assets/nature-3362341_1920.jpg')}
                                    style={styles.LocationimgBox}
                                >
                                    <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Locationpost}>
                                <ImageBackground
                                    source={require('../../assets/nature-3362341_1920.jpg')}
                                    style={styles.LocationimgBox}
                                >
                                    <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={styles.popularCardCon2}>
                                <TouchableOpacity style={styles.Locationpost}>
                                    <ImageBackground
                                        source={require('../../assets/nature-3362341_1920.jpg')}
                                        style={styles.LocationimgBox}
                                    >
                                        <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Locationpost}>
                                    <ImageBackground
                                        source={require('../../assets/nature-3362341_1920.jpg')}
                                        style={styles.LocationimgBox}
                                    >
                                        <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Locationpost}>
                                    <ImageBackground
                                        source={require('../../assets/nature-3362341_1920.jpg')}
                                        style={styles.LocationimgBox}
                                    >
                                        <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Locationpost}>
                                    <ImageBackground
                                        source={require('../../assets/nature-3362341_1920.jpg')}
                                        style={styles.LocationimgBox}
                                    >
                                        <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Locationpost}>
                                    <ImageBackground
                                        source={require('../../assets/nature-3362341_1920.jpg')}
                                        style={styles.LocationimgBox}
                                    >
                                        <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Locationpost}>
                                    <ImageBackground
                                        source={require('../../assets/nature-3362341_1920.jpg')}
                                        style={styles.LocationimgBox}
                                    >
                                        <Text style={styles.Locationtext}>Cox's Bazar</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AllCategories;

const styles = StyleSheet.create({
    popularHadingCon: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: 25
    },
    text1: {
        fontSize: 30,
        marginTop: 20
    },
    popularCardCon: {
        marginVertical: 20,
        marginHorizontal: 6,
    },
    imgBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    popularCardCon2: {
        marginVertical: 20,

    },
    LocationimgBox: {
        flex: 1,
    },
    Locationpost: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        elevation: 10,
        borderRadius: 20,
        height: 190,
        width: 240,
    },
    Locationtext: {
        fontSize: 23,
        color: '#fff',
        marginTop: 5,
        fontWeight: '700',
        marginLeft: 10,
        marginTop: 125
    }
})
