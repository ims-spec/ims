import { useEffect } from "react";
import { useAuth } from "../../store/useAuth";


export const AdminUsers = () => {

    const {getAllUsers} = useAuth()

    useEffect(() => {
      getAllUsers()  
    },[getAllUsers])   

    return (
        <div className="container">
            <h1>Admin users</h1>

        </div>
    );
};

