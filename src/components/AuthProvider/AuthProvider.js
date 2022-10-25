import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase.config';


export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

const loginWithGoogle = (googleProvider) =>{
    return signInWithPopup(auth, googleProvider)
}


const logOut = () =>{
    return signOut(auth)
}


const register = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}


const loginWithPassword = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}


useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
        setUser(currentUser)
    }))
    return () =>{
        unsubscribe()
    }

},[])





    const authInfo = {loginWithGoogle,logOut,user,register,loginWithPassword}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;