//This is the AboutScreen file which is used to display the information about the project and the developers.
//We have used both Inline and internal StyleSheet for styling the components, to make the code more readable and maintainable.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
//AboutScreen function is used to display the information about the project and the developers.
const AboutScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    }}>
      <Text style={{
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 12,
  }}>About this Project</Text>
      <Text style={styles.description}>Application is created for educational purposes ONLY.{'\n'}As a Project for Android Development class.{'\n'}{'\n'}</Text>
      <Text style={styles.descriptionhead}>Created by:{'\n'}</Text>
      <Text style={styles.description}>Siddhi goyal - 22BCAN037{'\n'}Divyansh tiwari - 22BCAN036{'\n'}BCA-H Vth JECRC University, Jaipur 2024{'\n'}{'\n'}</Text>
      <Text style={styles.descriptionhead}>Technologies Used:</Text>
      <Text style={styles.description}>React Native, Expo-framework and TypeScript{'\n'}{'\n'}</Text>
      <Text style={styles.descriptionhead}>Links :{'\n'}</Text>
      <Text style={styles.description}><Link style={styles.links} href="https://github.com/divyansh-codes/RRQuiz">RR Quiz Github repository</Link>{'\n'}</Text>
      <Text style={styles.description}><Link style={styles.links} href="https://github.com/divyansh-codes">Divyansh Github</Link>{'\n'}</Text>
      <Text style={styles.description}><Link style={styles.links} href="https://github.com/Dev-Siddhi">Siddhi Github</Link>{'\n'}</Text>
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
  },
  links: {
    color: '#90D5FF',
    fontWeight: 'bold',
    fontSize: 18,
  }

});

export default AboutScreen;
