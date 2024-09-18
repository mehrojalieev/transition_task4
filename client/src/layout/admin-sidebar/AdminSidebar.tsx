import { Link, NavLink } from "react-router-dom"
import "./AdminSidebar.scss"
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5"
const AdminSidebar = () => {
    return (
        <aside className="admin-sidebar">
            <header className="sidebar-header">
                <Link to={'/'} className="sidebar-logo">
                    <img src="https://addons.mozilla.org/user-media/addon_icons/2684/2684465-64.png?modified=b5ca6b5b" />
                    <h1>Egodevs</h1>
                </Link>
            </header>

            <ul className="sidebar-menu">
                <li>
                    <NavLink className={({ isActive }) => isActive ? "menu-link menu-link--active" : "menu-link"} to={'/admin/manage-products'}>
                        <i><FiShoppingBag /></i>
                        <p>Manage Products</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "menu-link menu-link--active" : "menu-link"} to={'/admin/manage-users'}>
                        <i><HiOutlineUsers /></i>
                        <p>Manage Users</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "menu-link menu-link--active" : "menu-link"} to={'/admin/settings'}>
                        <i><IoSettingsOutline /></i>
                        <p>Settings</p>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default AdminSidebar
