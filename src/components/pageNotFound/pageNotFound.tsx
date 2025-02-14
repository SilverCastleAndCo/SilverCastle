import {Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {PathName} from '../../models/enums/pathName';
import React from 'react';

const PageNotFound: React.FC = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate(PathName.LOGIN);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full text-center bg-gray-100">
            <Typography className="text-6xl font-bold mb-4 text-gray-800">404</Typography>
            <Typography className="text-xl mb-6 text-gray-600">
                The page you were looking for was not found.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className="text-lg font-semibold uppercase"
                onClick={goHome}
            >
                Back to Login Page
            </Button>
        </div>
    );
};

export default PageNotFound;
