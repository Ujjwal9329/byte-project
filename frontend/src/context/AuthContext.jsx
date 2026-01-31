import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const login = (email, password) => {
        // Mock Login
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    // Simulate getting user data (in real app, this comes from backend)
                    const mockUser = {
                        id: 'u1',
                        name: email.split('@')[0], // Use part of email as name for now if not provided
                        email: email,
                        role: 'user'
                    };
                    setUser(mockUser);
                    resolve(mockUser);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 800);
        });
    };

    const register = (name, email, password) => {
        // Mock Register
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (name && email && password) {
                    const newUser = {
                        id: 'u' + Date.now(),
                        name,
                        email,
                        role: 'user'
                    };
                    setUser(newUser);
                    resolve(newUser);
                } else {
                    reject(new Error('Please fill all fields'));
                }
            }, 800);
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
