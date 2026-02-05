import React, { createContext, useContext, useState, useEffect } from 'react';
import { observeAuthState, logoutUser } from '../firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = observeAuthState((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const logout = async () => {
        try {
            const result = await logoutUser();
            return result;
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const value = {
        currentUser,
        loading,
        logout 
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};