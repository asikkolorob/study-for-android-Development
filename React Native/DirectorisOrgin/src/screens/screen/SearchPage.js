import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';

const SearchPage = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.TopCategoriesBackBTN}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SimpleLineIcons
                            name='keyboard-backspace'
                            size={32}
                            color='#000'
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.TopCategoriesBarCon}>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity>
                                <View style={styles.TopCategoriesBTN1}>
                                    <View>
                                        <SimpleLineIcons
                                            name='add-location-alt'
                                            size={20}
                                            style={{ marginRight: 5 }}
                                        />
                                    </View>
                                    <View>
                                        <Text>Placus</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.TopCategoriesBTN1}>
                                    <View>
                                        <SimpleLineIcons
                                            name='home'
                                            size={20}
                                            style={{marginRight:5}}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16 }}>Real Estate</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.TopCategoriesBTN1}>
                                    <View>
                                        <SimpleLineIcons
                                            name='event'
                                            size={20}
                                            style={{marginRight:5}}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{fontSize:16}}>Event</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.TopCategoriesBTN1}>
                                    <View>
                                        <SimpleLineIcons
                                            name='local-dining'
                                            size={20}
                                            style={{ marginRight: 5 }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16 }}>Restaurants</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        </View>
    )
}

export default SearchPage;

const styles = StyleSheet.create({
    TopCategoriesBackBTN:{
        height:80,
        width:80,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
        
    },
    TopCategoriesBarCon:{
        height: 80,
        width: 456,
        backgroundColor: '#fff',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    TopCategoriesBTN1:{
        backgroundColor:'#e9ecef',
        flexDirection:'row',
        height:50,
        width:130,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        elevation:4,
        marginVertical:15,
        marginHorizontal:7
    }
})
