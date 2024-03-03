import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({children, isLoggedIn
}) => {
    return (

        isLoggedIn ? children : <Navigate to="/" replace />
    )
};

export default ProtectedRouteElement;