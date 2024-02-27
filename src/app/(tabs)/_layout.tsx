import { Tabs } from "expo-router"
import { Foundation, Ionicons, FontAwesome5 } from "@expo/vector-icons"


export default function TabLayout() {
    return(
        <Tabs
            screenOptions={{
                headerShown: false,      
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                 name="index"
                 options={{
                    tabBarIcon: ({ size, color }) => (
                      <Foundation name="home" size={size} color={color} />
                    ),
                }}
        
            />

            <Tabs.Screen
                 name="search"
                 options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                }}
        
            />

            <Tabs.Screen
                 name="messages"
                 options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="chatbubble-ellipses" size={size} color={color} />
                    ),
                }}
        
            />

            <Tabs.Screen name="profile"/>
        </Tabs>
    )
}