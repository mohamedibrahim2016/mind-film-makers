export interface Course {
    id: number;
    enName: string;
    arName: string;
    description: string;
    imageUrl: string;
    startDate: Date;
    creationDate: Date;
    instractorId: string;
    attendees: string[];
    token?: string;
    userId?: string;
}