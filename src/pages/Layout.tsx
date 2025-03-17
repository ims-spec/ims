import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";


export const Layout = ({role}:{role:string}) => {
  return (
    <div className="d-flex justify-content-between">
      <Sidebar userRole={role } />      
      <Outlet />
    </div>
  );
};
