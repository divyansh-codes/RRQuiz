//This file is used to create the layout of the app.
//It is used to create the bottom navigation bar.

import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60
        }
      }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: () => <Ionicons name="home" size={28} color='black' />,
      }}/>
      <Tabs.Screen name="quiz" options={{
        title: "Quiz",
        headerShown: false,
        tabBarIcon: () => <Ionicons name="game-controller" size={28} color="black" />
      }}/>
      <Tabs.Screen name="about" options={{
        title: "About",
        headerShown: false,
        tabBarIcon: () => <Ionicons name="information-circle" size={28} color="black" />
      }}/>
    </Tabs>
  );
}