import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const date = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    

  return (
    <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
            <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start Workout</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,

        //for debugging
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 8,
    },
    safe:{
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        
        //for debugging
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
    },
    button: {
        backgroundColor: 'grey',
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
