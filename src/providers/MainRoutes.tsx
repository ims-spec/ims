import { Routes, Route } from "react-router";
//authenticated
import { Layout } from "../pages/Layout";
import { Dashboard } from "../pages/Dashboard";
import { UserProtectedRoute } from "../protected_routes/UserProtectedRoute";
//admin
import AdminLayout from "../pages/admin/AdminLayout";
import AdminProtectedRoute from "../protected_routes/AdminProtectedRoute";
import { AdminUsers } from "../pages/admin/AdminUsers";
import { AdminSettings } from "../pages/admin/AdminSettings";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
//profile
import ProfileProtectedRoute from "../protected_routes/ProfileProtectedRoute";
import ProfileLayout from "../pages/profile/ProfileLayout";
import { ProfileDashboard } from "../pages/profile/ProfileDashboard";
import { ProfileSettings } from "../pages/profile/ProfileSettings";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = ({ userRole }: { userRole: string }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserProtectedRoute role={userRole} redirectPath="/">
            <Layout role={userRole} />
          </UserProtectedRoute>
        }
      >
        <Route index element={<Dashboard role={userRole} />} />
      </Route>

      <Route
        path="/admin"
        element={
          <AdminProtectedRoute role={userRole} redirectPath="/">
            <AdminLayout role={userRole} />
          </AdminProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard role={userRole} />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      <Route
        path="/profile"
        element={
          <ProfileProtectedRoute role={userRole} redirectPath="/">
            <ProfileLayout role={userRole} />
          </ProfileProtectedRoute>
        }
      >
        <Route path="dashboard" element={<ProfileDashboard />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>
      <Route path="*" element={<NotFound role={userRole }/> } />
    </Routes>
  );
};
