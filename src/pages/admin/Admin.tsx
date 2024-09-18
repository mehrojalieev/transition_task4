import { Outlet } from "react-router-dom"
import AdminSidebar from "../../layout/admin-sidebar/AdminSidebar"
import "./Admin.scss"
const Admin = () => {
  return (
    <div className="admin">
        <AdminSidebar/>
        <div className="admin-contents">
        <Outlet/>
        </div>
    </div>
  )
}

export default Admin
