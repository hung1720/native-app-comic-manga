import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen'
import AddBooksScreen from './AddBooksScreen'
import SettingsScreen from './SettingScreen'

const homeName = 'HomeP';
const addBooksScreen = 'Add books';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return (
        <View style={styles.container}>
           <StatusBar hidden />
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === addBooksScreen) {
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}


            >
                <Tab.Screen options={{headerShown: false}} name={homeName} component={HomeScreen} />
                <Tab.Screen options={{headerShown: false}}  name={addBooksScreen} component={AddBooksScreen} />
                <Tab.Screen options={{headerShown: false}}  name={settingsName} component={SettingsScreen} />

            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
})
