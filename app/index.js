//This is the main file of the app. It is the entry point of the app.
//It also serves as the home screen of the app. It displays a banner image and two buttons: Start Quiz and About this Project.
//We have used both Inline and internal StyleSheet for styling the components, to make the code more readable and maintainable.

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={{
          width: '100%',
          height: '33%',
          resizeMode: 'contain',
          marginTop: 10,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 100,
        }}
        source={require('@/assets/images/banner.png')}
      />
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 24,
          marginBottom: 20,
        }}>Welcome to the RR Quiz App!</Text>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/quiz')}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/about')}>
            <Text style={styles.buttonText}>About this Project</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#02B156',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  }
});