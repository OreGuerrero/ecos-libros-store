import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { AuthContext } from './auth-context';

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(Boolean(auth));

  useEffect(() => {
    if (!auth) return undefined;

    return onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setIsAuthLoading(false);
      },
      () => {
        setCurrentUser(null);
        setIsAuthLoading(false);
      }
    );
  }, []);

  const register = (email, password) => {
    if (!auth) throw new Error('Firebase Authentication no está configurado.');
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    if (!auth) throw new Error('Firebase Authentication no está configurado.');
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    if (!auth) throw new Error('Firebase Authentication no está configurado.');
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currentUser, isAuthLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}