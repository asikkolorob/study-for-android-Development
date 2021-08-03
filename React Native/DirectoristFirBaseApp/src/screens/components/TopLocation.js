import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, } from 'react-native';

const TopLocation = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.popularHadingCon}>
                <Text style={styles.text1}>Top Location</Text>
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
                            source={require('../../assets/nature-3362341_1920.jpg')}
                            style={styles.imgBox}
                        >
                            <Text style={styles.text}>Cox's Bazar</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.post}>
                        <ImageBackground
                            source={require('../../assets/nature-3362341_1920.jpg')}
                            style={styles.imgBox}
                        >
                            <Text style={styles.text}>Sylhet</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.post}>
                        <ImageBackground
                            source={require('../../assets/nature-3362341_1920.jpg')}
                            style={styles.imgBox}
                        >
                            <Text style={styles.text}>Dhaka</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default TopLocation;

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
    },
    post: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        elevation: 10,
        borderRadius: 20,
        marginHorizontal: 5,
        height: 200,
        width: 300,
    },
    text: {
        fontSize: 23,
        color: '#fff',
        marginTop: 5,
        fontWeight: '700',
        marginLeft:10,
        marginTop:125
    }
})
