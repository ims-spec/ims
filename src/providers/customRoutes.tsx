import {Routes, Route, Navigate} from "react-router";
// import {useState, useEffect} from "react";
// import {Layout} from "../pages/Layout.tsx";
import {Dashboard} from "../pages/Dashboard.tsx";
// import {NotFound} from "../pages/NotFound.tsx";
import Orders from "../pages/Orders.tsx";
// import {Audit} from "../pages/Audit.tsx";
// import ProtectedRoute from "../hooks/useRoutes/ProtectedRoute.tsx";
import AdminPanel from "../pages/admin/AdminPanel.tsx";
import UserProfile from "../pages/user/UserProfile.tsx";

// export const CustomRoutes = ({role}:{role:string}) => {

    // const [isAdmin, setIsAdmin] = useState<boolean>(false)
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    //
    // useEffect(() => {
    //     setIsAdmin(false)
    //     setIsLoggedIn(true)
    // }, [])

    export const CustomRoutes = ({ userRole }:{userRole:string}) => {
        // Определяем маршруты на основе роли
        switch (userRole) {
            case "admin":
                return (
                    <Routes>
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/panel" element={<AdminPanel />} />
                        {/* Другие маршруты для админа */}
                        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                    </Routes>
                );

            case "manager":
                return (
                    <Routes>
                        <Route path="/manager/*" element={<Orders />} />
                        {/* Другие маршруты для менеджера */}
                        <Route path="*" element={<Navigate to="/manager/dashboard" replace />} />
                    </Routes>
                );

            case "user":
                return (
                    <Routes>
                        <Route path="/user/*" element={<UserProfile />} />
                        {/* Другие маршруты для обычного пользователя */}
                        <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
                    </Routes>
                );

            default:
                // Если роль не определена или не соответствует ни одному из вариантов
                return (
                    <Routes>
                        <Route path="/access-denied" element={<div>Доступ запрещен</div>} />
                        <Route path="*" element={<Navigate to="/access-denied" replace />} />
                    </Routes>
                );
        }
    };



    // return (
    //     <Routes>
    //         <Route path="/" element={<Layout/>}>
    //             <Route index element={<Dashboard/>}/>
    //             <Route
    //                 path="/admin"
    //                 element={
    //                     <ProtectedRoute isAllowed={isAdmin} redirectPath="/">
    //                         <AdminPanel />
    //                     </ProtectedRoute>
    //                 }
    //             />
    //             <Route
    //                 path="/profile"
    //                 element={
    //                     <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/">
    //                         <UserProfile />
    //                     </ProtectedRoute>
    //                 }
    //             />
    //             <Route path="/orders" element={<Orders/>}/>
    //             <Route path="/audit" element={
    //                 <ProtectedRoute isAllowed={false} redirectPath="/dashboard">
    //                     <Audit/>
    //                 </ProtectedRoute>
    //             }/>
    //         </Route>
    //         <Route path="*" element={<NotFound/>}/>
    //     </Routes>
    // );
// };
