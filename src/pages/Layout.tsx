import {Sidebar} from "../components/Sidebar"
import {Outlet} from "react-router";


export const Layout = () => {
    return (
        <div className="d-flex justify-content-between">
            <Sidebar/>
            <h1>Outlet нужно вспомнить!</h1>
            <Outlet/>
        </div>
    )
}
