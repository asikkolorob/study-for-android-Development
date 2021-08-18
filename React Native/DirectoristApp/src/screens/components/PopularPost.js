import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/Ionicons';

const PopularPost = () => {
    return (
        <View style={styles.con}>
            <View>
                {/*1 line post */}
                <TouchableOpacity style={styles.post}>
                    <SimpleLineIcons name='location' size={28} color='#000'
                        style={styles.icon}
                    />
                    <Text style={styles.postText}>Places</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.post}>
                    <SimpleLineIcons name='home' size={28} color='#000'
                        style={styles.icon}
                    />
                    <Text style={styles.postText}>Home</Text>
                </TouchableOpacity>
            </View>
            <View>
                {/*2 line post */}
                <TouchableOpacity style={styles.post}>
                    <SimpleLineIcons name='restaurant' size={28} color='#000'
                        style={styles.icon}
                    />
                    <Text style={styles.postText}>Restaurants</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.post}>
                    <SimpleLineIcons name='card' size={28} color='#000'
                        style={styles.icon}
                    />
                    <Text style={styles.postText}>Event</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PopularPost

const styles = StyleSheet.create({
    con: {

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
    }
})