import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

const AllCategories = () => {
    return (
        <View style={{flex:1}}>
            <View>
                <View style={styles.popularHadingCon}>
                    <Text style={styles.text1}>All Categories</Text>
                </View>
                <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
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
                        <View>
                            <View style={styles.popularCardCon2}>
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
        marginTop:20
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
    post: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        elevation: 10,
        borderRadius: 20,
        height: 180,
        width: 250,
    },
    text: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5,
        fontWeight: '700'
    },
    popularCardCon2:{
        marginVertical: 20,
        
    }
})
