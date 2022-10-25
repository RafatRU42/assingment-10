import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
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


useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
        setUser(currentUser)
    }))
    return () =>{
        unsubscribe()
    }

},[])


    const authInfo = {loginWithGoogle,logOut,user}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;