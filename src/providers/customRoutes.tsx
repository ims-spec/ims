import { Routes, Route } from "react-router"


import { Layout } from "../pages/Layout"
import { Dashboard } from "../pages/Dashboard"
import {NotFound}from "../pages/NotFound"
import Orders from "../pages/Orders.tsx";

export const customRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={ <Dashboard/>} />
              <Route path='orders' element={ <Orders/>} />
              <Route path='*' element={ <NotFound/>} />
          </Route>
    </Routes>
  )
}
