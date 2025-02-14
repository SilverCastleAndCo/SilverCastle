import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../redux/store';

interface RequireAuthProps {
    children: React.ReactElement;
}

const RequireAuth: React.FC<RequireAuthProps> = ({children}) => {
    const isAuthenticated = useAppSelector((state) => state.user.user.token);
    return isAuthenticated ? children : <Navigate to="/login"/>;
};

export default RequireAuth;
