export type WorkoutDayType = "push" | "pull" | "legs";

export type WorkoutSession = {
    id: string;
    date: string;
    dayType: WorkoutDayType;
}

