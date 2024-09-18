import { NavLink, Outlet } from "react-router-dom"
import "./User.scss"

const User = () => {
    return (
        <div className="user container">
            <h3 className="user-fullname">Mehrojbek Aliyev</h3>
            <div className="user__main-wrapper">
                <aside className="user-sidebar">
                    <ul className="sidebar-menu">
                        <li>
                            <NavLink to={"/user/orders"} className={({ isActive }) => isActive ? "menu-link menu-link--active" : "menu-link"}>Buyurtmalarim</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/user/detail"} className={({ isActive }) => isActive ? "menu-link menu-link--active" : "menu-link"}>Ma'lumotlarim</NavLink>
                        </li>
                    </ul>
                </aside>
                <Outlet/>
            </div>
        </div>
    )
}

export default User
