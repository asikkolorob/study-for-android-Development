import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';


const AllCategories = () => {
    return (
        <View>
            <View style={{ flex: 1 }}>
                <View style={styles.popularHadingCon}>
                    <Text style={styles.text1}>Popular Categories</Text>
                    <TouchableOpacity>
                        <Text style={styles.text2}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                >
                    <View style={styles.popularCardCon}>
                        <TouchableOpacity style={styles.post}>
                            <ImageBackground
                                source={require('../../assets/breads-691467_1920.jpg')}
                                style={styles.imgBox}
                            >
                                <SimpleLineIcons name='shopping-cart' size={28} color='#fff'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>Shopping</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.post}>
                            <ImageBackground
                                source={require('../../assets/breads-691467_1920.jpg')}
                                style={styles.imgBox}
                            >
                                <SimpleLineIcons name='coffee' size={28} color='#fff'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>Restaurants</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.post}>
                            <ImageBackground
                                source={require('../../assets/breads-691467_1920.jpg')}
                                style={styles.imgBox}
                            >
                                <SimpleLineIcons name='shopping-cart' size={28} color='#fff'
                                    style={styles.icon}
                                />
                                <Text style={styles.text}>Restaurants</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AllCategories;

const styles = StyleSheet.create({
    popularHadingCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    text1: {
        fontSize: 30
    },
    text2: {
        fontSize: 15,
    },
    popularCardCon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 10,
    },
    imgBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    post: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        elevation: 10,
        borderRadius: 20,
        marginHorizontal: 5,
        height: 200,
        width: 320,
    },
    text: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5,
        fontWeight: '700'
    }
})
