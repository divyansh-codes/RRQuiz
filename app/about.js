//This is the AboutScreen file which is used to display the information about the project and the developers.
//We have used both Inline and internal StyleSheet for styling the components, to make the code more readable and maintainable.

import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

//AboutScreen function is used to display the information about the project and the developers.
const AboutScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    }}>
      <StatusBar barStyle="dark-content" />
      <Text style={{
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 12,
  }}>About this Project</Text>
      <Text style={styles.description}>Application is created for educational purposes ONLY.{'\n'}As a Project for Android Development class.{'\n'}{'\n'}</Text>
      <Text style={styles.descriptionhead}>Created by:{'\n'}</Text>
      <Text style={styles.description}>Siddhi goyal - 22BCAN036{'\n'}Divyansh tiwari - 22BCAN036{'\n'}BCA-H Vth JECRC University, Jaipur 2024{'\n'}{'\n'}</Text>
      <Text style={styles.descriptionhead}>Technologies Used:</Text>
      <Text style={styles.description}>React Native, Expo-framework and TypeScript</Text>
    </View>
  );
};

//StyleSheet is used to create styles for the components.
const styles = StyleSheet.create({
  description: {
    fontSize: 15,
    textAlign: 'center',
  },
  descriptionhead: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AboutScreen;
