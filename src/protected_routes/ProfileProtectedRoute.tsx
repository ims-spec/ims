import React from 'react'

import {Navigate} from "react-router-dom";

interface IProps {
    role?: string;
    redirectPath?: string;
    children: React.ReactNode;
}

const ProfileProtectedRoute = ({role, redirectPath = '/', children}: IProps) => {
    if (role !=='profile') return <Navigate to={redirectPath} replace/>;

    return children;
};

export default ProfileProtectedRoute;