import { useState } from 'react';
import { Alert, Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createSession } from '../lib/hooks/useCreateSession';
import { WorkoutDayType } from '../lib/types';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const now = new Date();
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' }); // "Monday"
    const formattedDate = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }); // "March 9, 2026"

    const [dayType, setDayType] = useState<WorkoutDayType>();
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const router = useRouter();

    async function handleStartWorkout(dayType: WorkoutDayType) {
        setIsPickerOpen(false);
        setDayType(dayType);
        
        const session = await createSession(dayType);
        if (!session) {
            Alert.alert('Error', 'Failed to create session');
        }
        else{
            Alert.alert('Success', 'Session created successfully');
        }
        //router.push('/workoutScreen'); //TODO: add workout screen
    }


  return (
    <SafeAreaView style={styles.safe}>
        {/* Date text */}
        <View style={styles.container}>
            <Text style={styles.weekday}>{weekday}</Text>
            <Text style={styles.formattedDate}>{formattedDate}</Text>
        </View>
        
        {/* Popup for selecting workout day */}
        <Modal visible={isPickerOpen} transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Select Workout Day</Text>
                    <TouchableOpacity style={styles.modalButton} onPress={() => handleStartWorkout('push')}>
                        <Text style={styles.modalButtonText}>Push</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => handleStartWorkout('pull')}>
                        <Text style={styles.modalButtonText}>Pull</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => handleStartWorkout('legs')}>
                        <Text style={styles.modalButtonText}>Legs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => setIsPickerOpen(false)}>
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

        {/* Start Workout Button */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setIsPickerOpen(true)}>
                <Text style={styles.startWorkoutButtonText}>Start Workout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/history')}>
                <Text style={styles.historyButtonText}>View History</Text>
            </TouchableOpacity>
        </View>


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    formattedDate: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    weekday: {
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
        //borderColor: 'red',
        //borderWidth: 1,
        //borderRadius: 8,
    },
    safe:{
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        
        //for debugging
        //borderColor: 'grey',
        //borderWidth: 1,
        //borderRadius: 8,
    },
    button: {
        backgroundColor: 'grey',
        padding: 12,
        marginBottom: 12,
        borderRadius: 8,
    },
    startWorkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 8,
    },
    modalTitle: {
        paddingBottom: 12,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: 'grey',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    historyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
