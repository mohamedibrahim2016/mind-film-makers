export interface Attendee {
    id: string;
    name: string;
    gender: string;
    email: string
    mobile: string;
    landline: string;
    birthDate: string;
    joiningDate: Date;
    coursesId: string[];
}