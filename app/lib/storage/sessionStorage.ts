import AsyncStorage from "@react-native-async-storage/async-storage";
import { WorkoutSession } from "../types";

const SESSIONS_KEY = '@workout_sessions';

export async function getSessions(): Promise<WorkoutSession[]> {
    const raw = await AsyncStorage.getItem(SESSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
}

export async function setSessions(sessions: WorkoutSession[]) {
    await AsyncStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}

export async function addSession(session: WorkoutSession) {
    const sessions = await getSessions();
    sessions.push(session);
    setSessions(sessions);
}
