import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Home Screen </Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Settings')
            }}><Text style={{color: 'blue'}}>Go to Settings Screen </Text></TouchableOpacity>
        </View>
    )
}

function SettingScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Setting Screen </Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Home')
            }}><Text style={{color: 'blue'}}>Go to Home Screen </Text></TouchableOpacity>
        </View>
    )
}

function StackNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Settings" component={SettingScreen}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;

