import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase.config';


export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const loginWithGoogle = (googleProvider) =>{
    return signInWithPopup(auth, googleProvider)
    setLoading(true);
}

const loginWithGithub = (githubProvider) =>{
    return signInWithPopup(auth, githubProvider)
    setLoading(true)
}


const logOut = () =>{
    return signOut(auth)
    setLoading(true)
}


const makeUserWithPassword = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true)
}


const loginWithPassword = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
    setLoading(true)
}


useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
        setUser(currentUser)
        setLoading(false)
    }))
    return () =>{
        unsubscribe()
    }

},[])





    const authInfo = {loginWithGoogle,logOut,user,makeUserWithPassword,loginWithPassword,loginWithGithub,loading}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;