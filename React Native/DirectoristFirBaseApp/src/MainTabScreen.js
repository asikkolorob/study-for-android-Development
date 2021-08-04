
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/Feather';

import {View} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import PopularCategorist from './screens/components/PopularCategorist';
import AllListings from './screens/AllListings';
import AccountScreen from './screens/AccountScreen';
import Location from './screens/Location';
import AllCategories from './screens/screen.js/AllCategories';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const ListingsStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const LocationStack = createNativeStackNavigator();

const MainTabsScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <SimpleLineIcons
                            name={'home'} size={30}
                            color={focused ? '#000' : '#748c94'}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Listings" component={ListingsStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center',}}>
                        <SimpleLineIcons
                            name={'search'} size={30}
                            color={focused ? '#e32f45' : '#748c94'}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Location" component={LocationStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <SimpleLineIcons
                            name={'compass'} size={30}
                            color={focused ? '#000' : '#748c94'}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Account" component={AccountStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <SimpleLineIcons
                            name={'user'} size={30}
                            color={focused ? '#000' : '#748c94'}
                        />
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

export default MainTabsScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} 
            options={{
                headerShown:false,
                title:'Home Page'
            }}
        />
        <HomeStack.Screen name="CategorisePopular" component={PopularCategorist} options={{
            title: 'Details Page',
        }} />
        <HomeStack.Screen name="AllCategories" component={AllCategories} options={{
            title: 'Details Page',
        }} />
    </HomeStack.Navigator>
);

const ListingsStackScreen = ({ navigation }) => (
    <ListingsStack.Navigator>
        <ListingsStack.Screen name="Listings" component={AllListings}
            options={{
                headerShown:false
            }}
        />
    </ListingsStack.Navigator>
);

const AccountStackScreen = ({ navigation }) => (
    <AccountStack.Navigator
        screenOptions={{headerShown:false}}
    >
        <AccountStack.Screen name="Account" component={AccountScreen}/>
    </AccountStack.Navigator>
);

const LocationStackScreen = ({ navigation }) => (
    <LocationStack.Navigator>
        <LocationStack.Screen name="Location" component={Location}
            options={{
                headerShown:false
            }}
        />
    </LocationStack.Navigator>
);

