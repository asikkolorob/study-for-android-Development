import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, FlatList} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

const TopLocationPage = () => {

    const LocationItem = [
        { Title: `Cox's Bazar`, Image: 'https://cdn.pixabay.com/photo/2021/08/01/13/10/zakynthos-6514351_960_720.jpg' },
        { Title: 'Sylhet', Image: 'https://cdn.pixabay.com/photo/2021/07/11/10/39/fantasy-6403406_960_720.jpg' },
        { Title: `Dhaka`, Image: 'https://cdn.pixabay.com/photo/2019/06/12/21/10/ocean-4270251_960_720.jpg' }
    ];

    const TopLocationPageView = ({Title,Image}) => {
        return(
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={styles.popularCardCon}>
                    <TouchableOpacity style={styles.Locationpost}>
                        <ImageBackground
                            source={{uri:Image}}
                            style={styles.LocationimgBox}
                        >
                            <Text style={styles.Locationtext}>{Title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Locationpost}>
                        <ImageBackground
                            source={{uri:Image}}
                            style={styles.LocationimgBox}
                        >
                            <Text style={styles.Locationtext}>{Title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.popularCardCon2}>
                        <TouchableOpacity style={styles.Locationpost}>
                            <ImageBackground
                                source={{uri:Image}}
                                style={styles.LocationimgBox}
                            >
                                <Text style={styles.Locationtext}>{Title}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Locationpost}>
                            <ImageBackground
                                source={{ uri: Image }}
                                style={styles.LocationimgBox}
                            >
                                <Text style={styles.Locationtext}>{Title}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View>
                <View style={styles.popularHadingCon}>
                    <Text style={styles.text1}>All Location</Text>
                </View>
                <FlatList
                    data={LocationItem}
                    keyExtractor={(x, id) => id}
                    renderItem={({item}) => <TopLocationPageView
                        Title={item.Title}
                        Image={item.Image}
                    />}
                />
            </View>
        </View>
    )
}

export default TopLocationPage;

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
