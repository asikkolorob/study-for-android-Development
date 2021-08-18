import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';

const PostCard = () => {
    return (
        <View>
            <View style={styles.popularHadingCon}>
                <Text style={styles.text1}>Featured Listings</Text>
                <TouchableOpacity>
                    <Text style={styles.text2}>Show all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 15 }}>
                <ScrollView horizontal={true}>
                    <View style={styles.cardCon}>
                        <View style={{ height: '40%' }}>
                            <ImageBackground
                                source={require('../../assets/sunset-404072_1920.jpg')}
                                style={{ flex: 1 }}
                            >
                                <Image source={require('../../assets/processed.png')}
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
                                source={require('../../assets/sunset-404072_1920.jpg')}
                                style={{ flex: 1 }}
                            >
                                <Image source={require('../../assets/processed.png')}
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
                                source={require('../../assets/sunset-404072_1920.jpg')}
                                style={{ flex: 1 }}
                            >
                                <Image source={require('../../assets/processed.png')}
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
                </ScrollView>
            </View>
        </View>
    )
}

export default PostCard;

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
    cardCon: {
        height: 485,
        width: 330,
        padding: 10,
        elevation: 4,
        borderRadius: 14,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10
    }
})