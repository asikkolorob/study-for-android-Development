import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, FlatList} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/FontAwesome';

import { AllCategoriesStyles } from '../../style/Styles';

const AllCategories = () => {

    const PopularCategoriesItem = [
        { Title: 'Shopping', Image: 'https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_960_720.jpg' },
        { Title: 'Restaurants', Image: 'https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408_960_720.jpg' },
        { Title: 'Shop', Image: 'https://cdn.pixabay.com/photo/2019/05/05/18/58/girl-4181395_960_720.jpg' }
    ];

    const PopularCategoriesView = ({title,image}) => {
        return(
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={AllCategoriesStyles.popularCardCon}>
                    <TouchableOpacity style={AllCategoriesStyles.post}>
                        <ImageBackground
                            source={{uri:image}}
                            style={AllCategoriesStyles.imgBox}
                        >
                            <SimpleLineIcons name='coffee' size={28} color='#fff'
                                style={AllCategoriesStyles.icon}
                            />
                            <Text style={AllCategoriesStyles.text}>{title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <View style={AllCategoriesStyles.popularCardCon2}>
                        <TouchableOpacity style={AllCategoriesStyles.post}>
                            <ImageBackground
                                source={{uri:image}}
                                style={AllCategoriesStyles.imgBox}
                            >
                                <SimpleLineIcons name='shopping-cart' size={28} color='#fff'
                                    style={AllCategoriesStyles.icon}
                                />
                                <Text style={AllCategoriesStyles.text}>{title}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{flex:1}}>
            <View>
                <View style={AllCategoriesStyles.popularHadingCon}>
                    <Text style={AllCategoriesStyles.text1}>All Categories</Text>
                </View>
                <FlatList
                    data={PopularCategoriesItem}
                    keyExtractor={(a, id) => id}
                    renderItem={({item}) => <PopularCategoriesView
                        title={item.Title}
                        image={item.Image}
                    />}
                />
            </View>
        </View>
    )
}

export default AllCategories;

const styles = StyleSheet.create({
    
})
