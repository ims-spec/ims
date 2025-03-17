import {Routes, Route} from "react-router";


//routes
import AdminProtectedRoute from "../protected_routes/AdminProtectedRoute.tsx"
import ProfileProtectedRoute from "../protected_routes/ProfileProtectedRoute.tsx"
//admin
// import AdminLayout from "../pages/admin/AdminLayout.tsx";
import AdminPanel from "../pages/admin/AdminPanel.tsx";
import {NotFound} from "../pages/NotFound.tsx"

import {Dashboard} from "../pages/Dashboard.tsx";
import Orders from "../pages/Orders.tsx";
//
import UserProfile from "../pages/user/UserProfile.tsx";
import AdminLayout from "../pages/admin/AdminLayout.tsx";


export const CustomRoutes = ({userRole}: { userRole: string }) => {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route
                    path="/admin"
                    element={
                        <AdminProtectedRoute role={userRole} redirectPath="/">
                            <AdminPanel/>
                        </AdminProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProfileProtectedRoute role={userRole} redirectPath="/">
                            <UserProfile/>
                        </ProfileProtectedRoute>
                    }
                />
                <Route path="/orders" element={<Orders/>}/>

            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};
