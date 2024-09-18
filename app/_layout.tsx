import { Stack } from "expo-router";
import React from "react";
const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#005B41',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name='index' options={{headerShown: false}} />
            <Stack.Screen name='Onboarding/index' options={{headerShown: false}} />
            <Stack.Screen name='Login/index' options={{headerShown: false}} />
            <Stack.Screen name='Signup/index' options={{title: 'Back to login'}} />
            <Stack.Screen name='PlayerHomePage/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerDrills/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerFitness/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerHighlightsPage/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerCommunity/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerSettings/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerSettingsAttributes/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerUpcomingMatches/index' options={{headerShown:false}} />

            {/* will use stack after login signup */}

        </Stack>
    )
}
export default RootLayout;