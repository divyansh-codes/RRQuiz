//This is the Quiz Screen of the app. It displays the questions and options to the user.
//It also displays the score of the user at the end of the quiz along with buttons to Restart or go to the Home screen.
//We have used both Inline and internal StyleSheet for styling the components, to make the code more readable and maintainable.

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';

//Array of questions, options and correct answers
const questions = [
  {
    question: 'Where was Rising Rajasthan held?',
    options: ['Jaipur', 'Ajmer', 'Kota', 'Jodhpur'],
    correctOption: 0
  },
  {
    question: 'When was Rising Rajasthan held?',
    options: ['2020', '2022', '2024', '2019'],
    correctOption: 2
  },
  {
    question: 'Who was the chief guest of Rising Rajasthan?',
    options: ['Sachin Tendulkar', 'Narendra Modi', 'Amit Shah', 'Rahul Gandhi'],
    correctOption: 1
  },
  {
    question: 'What was the total value of MoUs signed at Rising Rajasthan Summit?',
    options: ['₹25 lakhs crores', '₹30 lakh crores', '₹100 crores', '₹35 lakh crores'],
    correctOption: 3
  },
  {
    question: 'Which industry gained the most investment at Rising Rajasthan Summit?',
    options: ['Energy', 'Mining', 'Manufacturing', 'Tourism'],
    correctOption: 0
  },
  {
    question: 'Who was the chief minister of Rajasthan during Rising Rajasthan Summit?',
    options: ['Vasundhara Raje', 'Ashok Gehlot', 'Sachin Pilot', 'Bhajan lal sharma'],
    correctOption: 3
  },
  {
    question: 'What was the theme of Rising Rajasthan Summit?',
    options: ['Replete Responsible Ready', 'Rising Rajasthan', 'Recycle Reuse Reduce', 'Rajasthan Resurgent'],
    correctOption: 0
  },
  {
    question: 'What was the duration of Rising Rajasthan Summit?',
    options: ['6 days', '2 days', '3 days', '1 day'],
    correctOption: 2
  },
  {
    question: 'Who was the main organizer of Rising Rajasthan Summit?',
    options: ['Govt. of Rajasthan', 'Govt. of India', 'RIICO', 'PHDCCI'],
    correctOption: 0
  },
  {
    question: 'What was the main objective of Rising Rajasthan Summit?',
    options: ['To promote sports', 'To promote tourism', 'To promote culture', 'To attract investment'],
    correctOption: 3
  }
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const router = useRouter();


  //Function to handle the option press, set score, current question and finish the quiz.
  const handleOptionPress = (optionIndex) => {
    if (optionIndex === questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  //Function to restart the quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  //Function to navigate to the Home screen
  const handleHome = () => {
    handleRestart();
    router.push('/');
  };

  if (isFinished) {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: '100%',
            height: '33%',
            resizeMode: 'contain',
            marginTop: 10,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 100,
          }}source={require('@/assets/images/banner.png')} />
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}>Your score: {score}/{questions.length}</Text>
        <View style={{
          marginTop: 20,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <TouchableOpacity style={styles.button} onPress={handleRestart}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleHome}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
      }}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <View key={index} style={{
          marginBottom: 10,
          width: '100%',
        }}>
          <TouchableOpacity style={{
            backgroundColor: '#189DD8',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
          }} onPress={() => handleOptionPress(index)}>
            <Text style={{
              color: '#FFFFFF',
              fontSize: 16,
            }}>{option}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: '#67BD50',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});