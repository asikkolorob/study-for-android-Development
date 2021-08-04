import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/Entypo';

const AccountScreen = () => {
    return (
        <View>
            {/*Profie Section*/}
            <View style={styles.AccountProfile}>
                <Image 
                    source={require('../assets/processed.png')}
                    style={{height:60,width:60,marginHorizontal:10,marginTop:22}}
                />
                <View style={{marginTop:32,marginLeft:15}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Ashikur Rahman</Text>
                    <Text style={{color:'grey'}}>ashik@gmail.com</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.AccountListings}>
                    {/*Listings*/}
                    <View>
                        <TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <SimpleLineIcons 
                                    name='list'
                                    color='grey'
                                    size={33}
                                    style={{ marginVertical: 15 }}
                                />
                            </View>
                            <View>
                                <Text style={{ marginVertical: 20, marginHorizontal: 30,fontSize:18,color:'grey' }}>Listings</Text>
                            </View>
                                <View>
                                    <SimpleLineIcons
                                        name='chevron-right'
                                        color='grey'
                                        size={32}
                                        style={{marginVertical:15,marginLeft:320}}
                                    />
                                </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <SimpleLineIcons
                                        name='star-outlined'
                                        color='grey'
                                        size={33}
                                        style={{ marginVertical: 15 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginVertical: 20, marginHorizontal: 30, fontSize: 18, color:'grey'}}>Reviews</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons
                                        name='chevron-right'
                                        color='grey'
                                        size={32}
                                        style={{ marginVertical: 15, marginLeft: 320 }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <SimpleLineIcons
                                        name='heart-outlined'
                                        color='grey'
                                        size={33}
                                        style={{ marginVertical: 15 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginVertical: 20, marginHorizontal: 30, fontSize: 18, color:'grey' }}>Bookmark</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons
                                        name='chevron-right'
                                        color='grey'
                                        size={32}
                                        style={{ marginVertical: 15, marginLeft: 304 }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <SimpleLineIcons
                                        name='map'
                                        color='grey'
                                        size={31}
                                        style={{ marginVertical: 15 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginVertical: 20, marginHorizontal: 33, fontSize: 18, color:'grey' }}>Packages</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons
                                        name='chevron-right'
                                        color='grey'
                                        size={32}
                                        style={{ marginVertical: 15, marginLeft: 304 }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <SimpleLineIcons
                                        name='back-in-time'
                                        color='grey'
                                        size={33}
                                        style={{ marginVertical: 15 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginVertical: 20, marginHorizontal: 30, fontSize: 18, color:'grey' }}>Order History</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons
                                        name='chevron-right'
                                        color='grey'
                                        size={32}
                                        style={{ marginVertical: 15, marginLeft: 280 }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <SimpleLineIcons
                                        name='user'
                                        color='grey'
                                        size={32}
                                        style={{ marginVertical: 15 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ marginVertical: 20, marginHorizontal: 31, fontSize: 18, color:'grey' }}>Profile</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons
                                        name='chevron-right'
                                        color='grey'
                                        size={32}
                                        style={{ marginVertical: 15, marginLeft: 334 }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/*Add Button*/}
                    <View>
                        <View style={{ marginVertical: 20 }}>
                            <TouchableOpacity
                                style={styles.btnAdd}
                            // onPress={() => userLogin()}
                            >
                                <View style={{ flexDirection: 'row',justifyContent:'center' }}>
                                    <SimpleLineIcons
                                        name='plus'
                                        color='#000'
                                        size={32}
                                    />
                                    <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add New Listing</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/*Sign Out Butoon*/}
            <View style={{marginVertical:20}}>
                <TouchableOpacity
                    style={styles.btnFac}
                // onPress={() => userLogin()}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <SimpleLineIcons
                            name='login'
                            color='#000'
                            size={32}
                        />
                        <View style={{ justifyContent: 'center', marginLeft: 167 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sign Out</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AccountScreen;

const styles = StyleSheet.create({
    AccountProfile:{
        height:120,
        width:'100%',
        backgroundColor:'#fff',
        marginVertical:20,  
        flexDirection:'row'
    },
    AccountListings: {
        height:510,
        width:'100%',
        backgroundColor:'#fff',
        padding:10,
        
    },
    btnFac: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 30,
        marginTop: 10,
        elevation: 1
    },
    btnAdd:{
        backgroundColor: '#e5e5e5',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 30,
        marginTop: 10,
        elevation: 1
    },
    listbackIcon:{
        height: 510,
        backgroundColor: '#fff',
        padding: 10,
    }
})