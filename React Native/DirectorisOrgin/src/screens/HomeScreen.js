import React from 'react'
import { StyleSheet, Text, View, 
    ImageBackground, ScrollView, SafeAreaView,
    TextInput,
    TouchableOpacity } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

import NewListing from './components/NewListing';
import PopularPost from './components/PopularPost';
import PostCard from './components/PostCard';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.con}>
                    <ImageBackground
                        source={require('../assets/mountains-1112911_1920.jpg')}
                        style={styles.img}
                    >
                        {/*Searchbar*/}
                            <View style={styles.Searchcon}>
                                <TouchableOpacity onPress={() => navigation.navigate('search')}>
                                    <View>
                                        <SimpleLineIcons
                                            name='search'
                                            color='#000'
                                            size={25}
                                            style={{ marginTop: 10, marginLeft: 3 }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TextInput
                                    placeholder='Search'
                                    style={styles.Searchinput}
                                    placeholderTextColor='#000'
                                />
                            </View>
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Text style={styles.title1}>Explore anything</Text>
                            <Text style={styles.title2}>Find the best match of your interest</Text>
                        </View>
                    </ImageBackground>
                </View>
                <PopularPost />
                {/*popular categories*/}
                <View style={styles.popularHadingCon}>
                    <Text style={styles.PopularCateText1}>Popular Categories</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AllCategories')}>
                        <Text style={styles.PopularCateText2}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                >
                    <View style={styles.popularCardCon}>
                        <TouchableOpacity style={styles.postPopularCatagories}>
                            <ImageBackground
                                source={require('../assets/breads-691467_1920.jpg')}
                                style={styles.imgBox}
                            >
                                <SimpleLineIcons name='shopping-cart' size={28} color='#fff'
                                    style={styles.icon}
                                />
                                <Text style={styles.textPopular}>Shopping</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.postPopularCatagories}>
                            <ImageBackground
                                source={require('../assets/breads-691467_1920.jpg')}
                                style={styles.imgBox}
                            >
                                <SimpleLineIcons name='coffee' size={28} color='#fff'
                                    style={styles.icon}
                                />
                                <Text style={styles.textPopular}>Restaurants</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.postPopularCatagories}>
                            <ImageBackground
                                source={require('../assets/breads-691467_1920.jpg')}
                                style={styles.imgBox}
                            >
                                <SimpleLineIcons name='shopping-cart' size={28} color='#fff'
                                    style={styles.icon}
                                />
                                <Text style={styles.textPopular}>Restaurants</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <PostCard />
                {/*Top location*/}
                <View style={styles.LocationHadingCon}>
                    <Text style={styles.Locationtext1}>Top Location</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LocationPage')}>
                        <Text style={styles.Locationtext2}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                >
                    <View style={styles.LocationCardCon}>
                        <TouchableOpacity style={styles.Locationpost}>
                            <ImageBackground
                                source={require('../assets/nature-3362341_1920.jpg')}
                                style={styles.LocationimgBox}
                            >
                                <Text style={styles.Locationtext}>Cox's Bazar</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Locationpost}>
                            <ImageBackground
                                source={require('../assets/nature-3362341_1920.jpg')}
                                style={styles.LocationimgBox}
                            >
                                <Text style={styles.Locationtext}>Sylhet</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Locationpost}>
                            <ImageBackground
                                source={require('../assets/nature-3362341_1920.jpg')}
                                style={styles.LocationimgBox}
                            >
                                <Text style={styles.Locationtext}>Dhaka</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <NewListing />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    con: {
        flex: 1
    },
    img: {
        height: 320,
        width: '100%',
        alignItems: 'center'
    },
    title1: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40,


    },
    title2: {
        color: '#fff',
        fontSize: 15
    },
    conPost: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    post: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        height: 150,
        width: 200,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    },
    postText: {
        fontSize: 18,
        fontWeight: '900',
        marginTop: 5
    },
    popularHadingCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    PopularCateText1: {
        fontSize: 30
    },
    PopularCateText2: {
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
    postPopularCatagories: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        elevation: 10,
        borderRadius: 20,
        marginHorizontal: 5,
        height: 200,
        width: 320,
    },
    textPopular: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5,
        fontWeight: '700'
    },
    Searchcon: {
        height: 50,
        width: '90%',
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    Searchinput: {
        height: '100%',
        width: '100%',
        color: '#000',
        fontSize: 20,
        paddingLeft: 10

    },
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
        marginLeft: 10,
        marginTop: 125
    }
})