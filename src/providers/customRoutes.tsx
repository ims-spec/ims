import { Routes, Route } from "react-router";

import { Layout } from "../pages/Layout.tsx";
import { Dashboard } from "../pages/Dashboard.tsx";
import { NotFound } from "../pages/NotFound.tsx";
import Orders from "../pages/Orders.tsx";
import { Audit } from "../pages/Audit.tsx";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/audit" element={<Audit />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
