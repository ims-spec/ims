import {Sidebar} from "../../components/Sidebar.tsx";
import {Outlet} from "react-router-dom";


const AdminLayout = () => {
    return (
        <div className="d-flex justify-content-between">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default AdminLayout;