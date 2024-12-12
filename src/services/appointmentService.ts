import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

// Define appointment information interface
interface AppointmentInfo {
    doctorName: string;
    designation: string;
    date: string;
    location: string;
    time: string;
}

// Function to create an appointment
export const createAppointment = async (appointmentInfo: AppointmentInfo): Promise<string> => {
    const { doctorName, designation, date, location, time } = appointmentInfo;

    try {
        // Add a new document to the appointments collection
        const docRef = await addDoc(collection(db, "appointments"), {
            doctorName,
            designation,
            date,
            location,
            time,
        });

        // Return the document ID if the appointment is successfully created
        return docRef.id;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        throw new Error(errorMessage);
    }
};
  