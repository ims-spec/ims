import { supabaseClient } from "../providers/supabaseClient.ts";
import { NavLink } from "react-router";
import { AdminSidebarMenu } from "./sidebar/AdminSidebarMenu.tsx";
import { ProfileSidebarMenu } from "./sidebar/ProfileSidebarMenu.tsx";
import { UserSidebarMenu } from "./sidebar/UserSidebarMenu.tsx";
// import {Link, NavLink} from "react-router-dom";

export const Sidebar = ({ userRole }: { userRole: string }) => {
  const logout = async () => {
    await supabaseClient.auth.signOut();
  };

  if (userRole === "admin")
    return (
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ maxWidth: "20vw", height: "100vh" }}
      >
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          Dashboard
        </NavLink>
        <hr />
        <AdminSidebarMenu />
        <hr />
        <button className="btn btn-links" onClick={logout}>
          Sign out
        </button>
      </div>
    );

  if (userRole === "profile")
    return (
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ maxWidth: "20vw", height: "100vh" }}
      >
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          Dashboard
        </NavLink>
        <hr />
        <ProfileSidebarMenu />
        <hr />
        <button className="btn btn-links" onClick={logout}>
          Sign out
        </button>
      </div>
    );
    if (userRole === "user")
      return (
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
          style={{ maxWidth: "20vw", height: "100vh" }}
        >
          <NavLink
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            Dashboard
          </NavLink>
          <hr />
          <UserSidebarMenu />
          <hr />
          <button className="btn btn-links" onClick={logout}>
            Sign out
          </button>
        </div>
      );

  // return (
  //     <div
  //         className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
  //         style={{maxWidth: "20vw", height: "100vh"}}
  //     >
  //         <NavLink
  //             to="/"
  //             className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
  //         >
  //             <svg className="bi pe-none me-2" width="40" height="32">
  //                 <use xlinkHref="#bootstrap"></use>
  //             </svg>
  //             <span className="fs-4">Dashboard</span>
  //         </NavLink>
  //         <hr/>
  //         <ul className="nav nav-pills flex-column mb-auto">
  //             <li className="nav-item">
  //                 <NavLink to="/orders" className="nav-link text-white" aria-current="page">
  //                     <svg className="bi pe-none me-2" width="16" height="16">
  //                         <use xlinkHref="#home"></use>
  //                     </svg>
  //                     Orders
  //                 </NavLink>
  //             </li>
  //
  //             <li className="nav-item">
  //                 <NavLink to="/admin" className="nav-link text-white" aria-current="page">
  //                     <svg className="bi pe-none me-2" width="16" height="16">
  //                         <use xlinkHref="#home"></use>
  //                     </svg>
  //                     Admin panel
  //                 </NavLink>
  //             </li>
  //
  //             <li className="nav-item">
  //                 <NavLink to="/profile" className="nav-link text-white" aria-current="page">
  //                     <svg className="bi pe-none me-2" width="16" height="16">
  //                         <use xlinkHref="#home"></use>
  //                     </svg>
  //                     User profile
  //                 </NavLink>
  //             </li>
  //
  //             <li>
  //                 <NavLink to="/audit" className="nav-link text-white">
  //                     <svg className="bi pe-none me-2" width="16" height="16">
  //                         <use xlinkHref="#grid"></use>
  //                     </svg>
  //                     Audit
  //                 </NavLink>
  //             </li>
  //
  //         </ul>
  //         <hr/>
  //         <div className="dropdown">
  //             <Link
  //                 to="/"
  //                 className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
  //                 data-bs-toggle="dropdown"
  //                 aria-expanded="false"
  //             >
  //                 <img
  //                     src="https://github.com/mdo.png"
  //                     alt=""
  //                     width="32"
  //                     height="32"
  //                     className="rounded-circle me-2"
  //                 />
  //                 <strong>mdo</strong>
  //             </Link>
  //             <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
  //                 <li>
  //                     <Link className="dropdown-item" to="/">
  //                         New project...
  //                     </Link>
  //                 </li>
  //                 <li>
  //                     <Link className="dropdown-item" to="">
  //                         Settings
  //                     </Link>
  //                 </li>
  //                 <li>
  //                     <Link className="dropdown-item" to="/">
  //                         Profile
  //                     </Link>
  //                 </li>
  //                 <li>
  //                     <hr className="dropdown-divider"/>
  //                 </li>
  //                 <li>
  //                     <button className="dropdown-item" onClick={logout}>
  //                         Sign out
  //                     </button>
  //                 </li>
  //             </ul>
  //         </div>
  //     </div>
  // );
};
