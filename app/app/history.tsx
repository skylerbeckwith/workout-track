import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getSessions } from '../lib/storage/sessionStorage';
import { useEffect, useState } from 'react';
import { WorkoutSession } from '../lib/types';

export default function HistoryScreen() {
    const [sessions, setSessions] = useState<WorkoutSession[]>([]);
    useEffect(() => {
        getSessions().then(setSessions);
    }, []);
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <Text style={styles.historyText}>History</Text>
            </View>

            <ScrollView style={styles.sessionsContainer}>
                {sessions.map((session) => (
                        <View style={styles.sessionContainer} key={session.id}>
                            <Text style={styles.sessionTitle}>{session.dayType}</Text>
                            <Text style={styles.sessionDate}>{session.date}</Text>
                        </View>
                        ))}
                </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    header: {
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    sessionsContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    sessionContainer: {
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    historyText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    sessionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    sessionDate: {
        fontSize: 14,
        color: '#555',
    },
});