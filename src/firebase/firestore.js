import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where,
    setDoc
} from 'firebase/firestore';
import { db } from './config';

// ==========================================
// FUNCIONES DE RESERVAS
// ==========================================

// Crear una reserva
export const createReservation = async (reservationData) => {
    try {
        const docRef = await addDoc(collection(db, 'reservations'), {
            ...reservationData,
            createdAt: new Date().toISOString(),
            updatedAt: null
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Obtener todas las reservas de un usuario
export const getUserReservations = async (userId) => {
    try {
        const q = query(collection(db, 'reservations'), where('userId', '==', userId));
        const querySnapshot = await getDocs(q);
        const reservations = [];
        querySnapshot.forEach((doc) => {
            reservations.push({ id: doc.id, ...doc.data() });
        });
        return { success: true, reservations };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Obtener una reserva específica
export const getReservationById = async (reservationId) => {
    try {
        const docRef = doc(db, 'reservations', reservationId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { success: true, reservation: { id: docSnap.id, ...docSnap.data() } };
        } else {
            return { success: false, error: 'Reserva no encontrada' };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Actualizar una reserva
export const updateReservation = async (reservationId, updateData) => {
    try {
        const docRef = doc(db, 'reservations', reservationId);
        await updateDoc(docRef, {
            ...updateData,
            updatedAt: new Date().toISOString()
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Eliminar/Cancelar una reserva
export const deleteReservation = async (reservationId) => {
    try {
        await deleteDoc(doc(db, 'reservations', reservationId));
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// ==========================================
// FUNCIONES DE PAQUETES
// ==========================================

// Obtener todos los paquetes
export const getPackages = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'packages'));
        const packages = [];
        querySnapshot.forEach((doc) => {
            packages.push({ id: doc.id, ...doc.data() });
        });
        return { success: true, packages };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Obtener un paquete específico
export const getPackageById = async (packageId) => {
    try {
        const docRef = doc(db, 'packages', packageId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { success: true, package: { id: docSnap.id, ...docSnap.data() } };
        } else {
            return { success: false, error: 'Paquete no encontrado' };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// ==========================================
// FUNCIONES DE USUARIOS
// ==========================================

// Crear perfil de usuario en Firestore
export const createUserProfile = async (userId, userData) => {
    try {
        // Usamos setDoc con el userId como ID del documento
        await setDoc(doc(db, 'users', userId), {
            userId,
            ...userData,
            createdAt: new Date().toISOString()
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Obtener perfil de usuario
export const getUserProfile = async (userId) => {
    try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { success: true, profile: { id: docSnap.id, ...docSnap.data() } };
        } else {
            return { success: false, error: 'Perfil no encontrado' };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Actualizar perfil de usuario
export const updateUserProfile = async (userId, updateData) => {
    try {
        const docRef = doc(db, 'users', userId);
        await updateDoc(docRef, {
            ...updateData,
            updatedAt: new Date().toISOString()
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};