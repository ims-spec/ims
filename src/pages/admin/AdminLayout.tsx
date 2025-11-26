import {Outlet} from "react-router-dom";
import {Sidebar} from "@/components/custom/sidebar/Sidebar.tsx";


const AdminLayout = ({role}: { role: string }) => {
    return (
        <div className="d-flex justify-content-between">
            <Sidebar userRole={role}/>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;