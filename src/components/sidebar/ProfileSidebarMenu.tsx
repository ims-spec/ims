import { Link } from "react-router"

export const ProfileSidebarMenu = () => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link
          to="/profile/dashboard"
          className="nav-link text-white gap-3"
          aria-current="page"
        >
          <i className="bi bi-person-circle p-2 g-col-6"></i>
          <span className="p-2 g-col-6">Profile's dashboard</span>
        </Link>
      </li>
      
      <li className="nav-item">
        <Link
          to="/profile/settings"
          className="nav-link text-white gap-3"
          aria-current="page"
        >
          <i className="bi bi-person-circle p-2 g-col-6"></i>
          <span className="p-2 g-col-6">Profile's settings</span>
        </Link>
      </li>
    </ul>
  )
}
