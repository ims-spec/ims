import React from 'react'
import {Navigate} from "react-router";

interface IProps {
    isAllowed?: boolean;
    redirectPath?: string;
    children: React.ReactNode;
}

const ProtectedRoute = ({isAllowed, redirectPath = '/', children}: IProps) => {
    if (!isAllowed) return <Navigate to={redirectPath} replace/>;

    return children;
};

export default ProtectedRoute;