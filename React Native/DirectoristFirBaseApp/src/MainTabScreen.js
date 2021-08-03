import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/Feather';

import AllListings from './screens/AllListings';
import Location from './screens/Location';
import AccountScreen from './screens/AccountScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AllCategories from './screens/screen.js/AllCategories';
import HomeScreen from './screens/HomeScreen';


const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <SimpleLineIcons
                                name={'home'} size={30}
                                color={focused ? '#000' : '#748c94'}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name="AllList" component={AllListings}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <SimpleLineIcons
                                name={'search'} size={30}
                                color={focused ? '#000' : '#748c94'}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Location" component={Location}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <SimpleLineIcons
                                name={'compass'} size={30}
                                color={focused ? '#000' : '#748c94'}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Acconut" component={AccountScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <SimpleLineIcons
                                name={'user'} size={30}
                                color={focused ? '#000' : '#748c94'}
                            />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

export default MainTabScreen;

const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator>
            {/* <HomeStack.Screen name="Login" component={LoginScreen}
                options={{
                    headerShown: false
                }} />
            <HomeStack.Screen name="Signup" component={SignupScreen}
                options={{
                    headerShown: false
                }}
            /> */}
            <HomeStack.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen name="AllCategoriesShow" component={AllCategories}
                options={{
                    headerShown: false
                }}
            />
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({})
