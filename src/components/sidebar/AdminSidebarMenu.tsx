import { Link } from "react-router-dom";

export const AdminSidebarMenu = () => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link
          to="/admin/dashboard"
          className="nav-link text-white gap-3"
          aria-current="page"
        >
          <i className="bi bi-person-circle p-2 g-col-6"></i>
          <span className="p-2 g-col-6">Admin's dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/users"
          className="nav-link text-white gap-3"
          aria-current="page"
        >
          <i className="bi bi-person-circle p-2 g-col-6"></i>
          <span className="p-2 g-col-6">All users</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/settings"
          className="nav-link text-white gap-3"
          aria-current="page"
        >
          <i className="bi bi-person-circle p-2 g-col-6"></i>
          <span className="p-2 g-col-6">Admin's settings</span>
        </Link>
      </li>
    </ul>
  );
};
