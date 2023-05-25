import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';



const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUserSignIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password) 
    }

    const logInUser = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    } 

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // observer user auth state change
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
           setUser(currentUser)
           setLoading(false)
       })
        return unsubscribe;
    }, [])

    const authInfo = {
        user,
        loading,
        createUserSignIn,
        logInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;