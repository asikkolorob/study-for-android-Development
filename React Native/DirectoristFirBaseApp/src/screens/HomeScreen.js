import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import NewListing from './components/NewListing';

import PopularCategorist from './components/PopularCategorist';
import PopularPost from './components/PopularPost';
import PostCard from './components/PostCard';
import SearchBar from './components/SearchBar';
import TopLocation from './components/TopLocation';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.con}>
                    <ImageBackground
                        source={require('../assets/mountains-1112911_1920.jpg')}
                        style={styles.img}
                    >
                        <SearchBar />
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Text style={styles.title1}>Explore anything</Text>
                            <Text style={styles.title2}>Find the best match of your interest</Text>
                        </View>
                    </ImageBackground>
                </View>
                <PopularPost />
                <PopularCategorist />
                <PostCard />
                <TopLocation />
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
    }
})