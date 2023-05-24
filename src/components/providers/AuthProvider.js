import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';



const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);

    const createUserSignIn = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password) 
    }

    const logInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    } 

    const logOut = () => {
        return signOut(auth)
    }



    const authInfo = {
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