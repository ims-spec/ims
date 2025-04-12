import {Outlet} from "react-router";
import {Sidebar} from "@/components/custom/Sidebar";


const ProfileLayout = ({role}: { role: string }) => {
    return (
        <div className="d-flex justify-content-between">
            <Sidebar userRole={role}/>
            <Outlet/>
        </div>
    );
};

export default ProfileLayout;
