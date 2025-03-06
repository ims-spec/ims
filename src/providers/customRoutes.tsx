import { Routes, Route } from "react-router"


import { Layout } from "../pages/Layout"
import { Dashboard } from "../pages/Dashboard"


export const customRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={ <Dashboard/>} />
          </Route>
    </Routes>
  )
}
