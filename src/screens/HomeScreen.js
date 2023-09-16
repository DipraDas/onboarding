import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OnboardingScreen from './OnboardingScreen';

const HomeScreen = ({ navigation }) => {
    const clear = async () => {
        // Reset the isAppFirstLaunched state to true
        await AsyncStorage.setItem('isAppFirstLaunched', 'true');
        // Navigate back to OnboardingScreen
        navigation.replace('OnboardingScreen');
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={clear}>
                <Text
                    style={{
                        padding: 10,
                        backgroundColor: 'red',
                        marginTop: 50,
                        color: '#fff'
                    }}>Clear</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
