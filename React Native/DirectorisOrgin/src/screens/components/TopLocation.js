import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, } from 'react-native';

const TopLocation = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.LocationHadingCon}>
                <Text style={styles.Locationtext1}>Top Location</Text>
                <TouchableOpacity>
                    <Text style={styles.Locationtext2}>Show all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={true}
            >
                <View style={styles.LocationCardCon}>
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
                            <Text style={styles.Locationtext}>Sylhet</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Locationpost}>
                        <ImageBackground
                            source={require('../../assets/nature-3362341_1920.jpg')}
                            style={styles.LocationimgBox}
                        >
                            <Text style={styles.Locationtext}>Dhaka</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default TopLocation;

const styles = StyleSheet.create({
    LocationHadingCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    Locationtext1: {
        fontSize: 30
    },
    Locationtext2: {
        fontSize: 15,
    },
    LocationCardCon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 10,
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
        marginHorizontal: 5,
        height: 200,
        width: 300,
    },
    Locationtext: {
        fontSize: 23,
        color: '#fff',
        marginTop: 5,
        fontWeight: '700',
        marginLeft:10,
        marginTop:125
    }
})
