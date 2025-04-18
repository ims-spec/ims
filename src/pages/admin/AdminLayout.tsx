import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/custom/sidebar/Sidebar.tsx";
import { Header } from "@/components/header/Header";

const AdminLayout = ({ role }: { role: string }) => {
  return (
    // <div className="d-flex justify-content-between">
    //     <Sidebar userRole={role}/>
    //     <Outlet/>
    // </div>

    <div>
      <Header />
      <div className="d-flex justify-content-between">
        <Sidebar userRole={role} />        
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
