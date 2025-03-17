import { Routes, Route } from "react-router";

//routes
import AdminProtectedRoute from "../protected_routes/AdminProtectedRoute.tsx";
import ProfileProtectedRoute from "../protected_routes/ProfileProtectedRoute.tsx";
//admin
import AdminLayout from "../pages/admin/AdminLayout.tsx";
import { NotFound } from "../pages/NotFound.tsx";

import { Dashboard } from "../pages/Dashboard.tsx";
import { Layout } from "../pages/Layout.tsx";
import Orders from "../pages/Orders.tsx";
//
import UserProfile from "../pages/profile/ProfileLayout.tsx";
import { AdminDashboard } from "../pages/admin/AdminDashboard.tsx";
import { AdminUsers } from "../pages/admin/AdminUsers.tsx";
import { AdminSettings } from "../pages/admin/AdminSettings.tsx";

export const CustomRoutes = ({ userRole }: { userRole: string }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard role={userRole} />} />
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute role={userRole} redirectPath="/">
              <AdminLayout role={userRole} />
            </AdminProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={<AdminDashboard role={userRole} />}
          />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route
          path="/profile"
          element={
            <ProfileProtectedRoute role={userRole} redirectPath="/">
              <UserProfile />
            </ProfileProtectedRoute>
          }
        />
        <Route path="/orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
