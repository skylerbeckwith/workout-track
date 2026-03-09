import { WorkoutDayType, WorkoutSession } from "../types";
import { addSession } from "../storage/sessionStorage";


export async function createSession(dayType: WorkoutDayType): Promise<WorkoutSession | null> {
    const session: WorkoutSession = {
        id: crypto.randomUUID(),
        date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
        dayType,
    };
    try{
        await addSession(session);
    } catch (error) {
        console.error(error);
        return null;
    }
    return session;
}
