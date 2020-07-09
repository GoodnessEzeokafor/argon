import React from 'react'
import { Easing, Animated, Dimensions } from "react-native";
import { View, Text } from 'react-native'

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


//screens
import Home from "../screens/Home.js"

export default function Screens() {
    return (
        <Home />
        // <View>
        //     <Text>SCRREEN</Text>
        // </View>
    )
}

