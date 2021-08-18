import React, {useState} from 'react'
import { StyleSheet, Text, View, 
    ImageBackground, ScrollView, SafeAreaView,
    TextInput,FlatList,
    TouchableOpacity } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

import { HomeStyles } from '../style/Styles';

import NewListing from './components/NewListing';
import PopularPost from './components/PopularPost';
import PostCard from './components/PostCard';

const HomeScreen = ({navigation}) => {

    const LocationItem = [
        { Title: `Cox's Bazar`, Image:'https://cdn.pixabay.com/photo/2021/08/01/13/10/zakynthos-6514351_960_720.jpg'},
        { Title: 'Sylhet', Image: 'https://cdn.pixabay.com/photo/2021/07/11/10/39/fantasy-6403406_960_720.jpg'},
        { Title: `Dhaka`, Image: 'https://cdn.pixabay.com/photo/2019/06/12/21/10/ocean-4270251_960_720.jpg'}
    ];
    const PopularCategoriesItem = [
        { Title: 'Shopping', Image: 'https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_960_720.jpg' },
        { Title: 'Restaurants', Image: 'https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408_960_720.jpg' },
        { Title: 'Shop', Image: 'https://cdn.pixabay.com/photo/2019/05/05/18/58/girl-4181395_960_720.jpg' }
    ];
    
    const PopularCategoriesView = ({Title,Image}) => {
        return(
            <View style={HomeStyles.popularCardCon}>
                <TouchableOpacity style={HomeStyles.postPopularCatagories}>
                    <ImageBackground
                        source={{uri:Image}}
                        style={HomeStyles.imgBox}
                    >
                        <SimpleLineIcons name='shopping-cart' size={28} color='#fff'
                            style={HomeStyles.icon}
                        />
                        <Text style={HomeStyles.textPopular}>{Title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }

    const TopLocationView = ({title,image}) => {
        return(
            <View style={HomeStyles.LocationCardCon}>
                <TouchableOpacity style={HomeStyles.Locationpost}>
                    <ImageBackground
                        source={{uri:image}}
                        style={HomeStyles.LocationimgBox}
                    >
                        <Text style={HomeStyles.Locationtext}>{title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={HomeStyles.con}>
                    <ImageBackground
                        source={require('../assets/mountains-1112911_1920.jpg')}
                        style={HomeStyles.img}
                    >
                        {/*Searchbar*/}
                        <View style={HomeStyles.Searchcon}>
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
                                    style={HomeStyles.Searchinput}
                                    placeholderTextColor='#000'
                                />
                            </View>
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Text style={HomeStyles.title1}>Explore anything</Text>
                            <Text style={HomeStyles.title2}>Find the best match of your interest</Text>
                        </View>
                    </ImageBackground>
                </View>
                <PopularPost />
                {/*popular categories*/}
                <View style={HomeStyles.popularHadingCon}>
                    <Text style={HomeStyles.PopularCateText1}>Popular Categories</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AllCategories')}>
                        <Text style={styles.PopularCateText2}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={PopularCategoriesItem}
                    keyExtractor={(a, id) => id}
                    horizontal={true}
                    renderItem={({item}) => <PopularCategoriesView
                        Title={item.Title}
                        Image={item.Image}
                    />}
                />
                <PostCard />
                {/*Top location*/}
                <View style={HomeStyles.LocationHadingCon}>
                    <Text style={HomeStyles.Locationtext1}>Top Location</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LocationPage')}>
                        <Text style={HomeStyles.Locationtext2}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={LocationItem}
                    keyExtractor={(x, id) => id}
                    renderItem={({item}) => <TopLocationView
                        title={item.Title}
                        image={item.Image}
                    />}
                    horizontal={true}
                />
                <NewListing />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    
})