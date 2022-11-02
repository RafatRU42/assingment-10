import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../components/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    const location = useLocation();



    if(loading){
        return <Spinner animation="border" />;
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state = {{from:location}}replace></Navigate>
    }
};

export default PrivateRoute;