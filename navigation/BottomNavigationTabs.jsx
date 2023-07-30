import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../constants/index";
import { Home, Profile, Cart } from "../screens/index"
import { View,Text} from 'react-native';

const Tab = createBottomTabNavigator();

const ScreenOptions = {
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarShowLabel: true,
    tabBarStyle: {
        position:'absolute',
        height: 50,
        bottom: 0,
        elevation: 0,
        right: 0,
        left: 0
    }
}

const BottomNavigationTabs = () => {
    return (
        <Tab.Navigator screenOptions={ScreenOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title:"",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons
                                name={focused ? "home" : "home-outline"}
                                size={26}
                                color={focused ? COLORS.primary : COLORS.gray1}
                            />
                        )
                    }
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title:"",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons
                                name={focused ? "person" : "person-outline"}
                                size={26}
                                color={focused ? COLORS.primary : COLORS.gray1}
                            />
                        )
                    }
                }} />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    title:"",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons
                                name={focused ? "cart" : "cart-outline"}
                                size={26}
                                color={focused ? COLORS.primary : COLORS.gray1}
                            />
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}
export default BottomNavigationTabs