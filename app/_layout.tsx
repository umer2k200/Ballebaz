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
            {/* Player */}
            <Stack.Screen name='PlayerHomePage/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerDrills/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerFitness/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerHighlightsPage/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerCommunity/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerSettings/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerSettingsAttributes/index' options={{headerShown:false}} />
            <Stack.Screen name='PlayerUpcomingMatches/index' options={{headerShown:false}} />
            {/* Team Owner */}
            <Stack.Screen name='TeamOwnerBookGround/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerCommunity/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerGenerateKit/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerHighlightsPage/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerHireCoach/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerHomeScreen/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerTeamsRanking/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerUpcomingMatches/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerViewPlayers/index' options={{headerShown:false}} />
            <Stack.Screen name='TeamOwnerMoreNavbar/index' options={{headerShown:false}} />

            {/* will use stack after login signup */}

        </Stack>
    )
}
export default RootLayout;