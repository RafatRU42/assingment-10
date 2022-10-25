import React, { createContext } from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../../firebase.config';


export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

const loginWithGoogle = (googleProvider) =>{
    return signInWithPopup(auth, googleProvider)
}


    const authInfo = {loginWithGoogle}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;