import React from 'react';
import {Navigate} from 'react-router-dom';

interface RequireAuthProps {
    children: React.ReactElement;
}

const RequireAuth: React.FC<RequireAuthProps> = ({children}) => {
    const isAuthenticated = true
    return isAuthenticated ? children : <Navigate to="/login"/>;
};

export default RequireAuth;
