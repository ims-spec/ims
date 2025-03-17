import {Outlet} from "react-router-dom";
import {Sidebar} from "../../components/Sidebar.tsx";

export const UserLayout = ({role}:{role:string}) => {
    return (
        <div className="d-flex justify-content-between">
            <Sidebar userRole={role } />
            <Outlet />
        </div>
    );
}
