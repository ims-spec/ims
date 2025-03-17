import { Link} from "react-router-dom";

const AdminSidebarMenu = () => {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link text-white gap-3" aria-current="page">
                    <i className="bi bi-person-circle p-2 g-col-6"></i><span className="p-2 g-col-6">Admin panel</span>
                </Link>
            </li>

        </ul>
    );
};

export default AdminSidebarMenu;