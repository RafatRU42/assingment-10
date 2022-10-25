import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../../firebase.config';


export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;