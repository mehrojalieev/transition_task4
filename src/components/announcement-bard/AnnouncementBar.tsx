import { Link, useLocation } from "react-router-dom";
import "./AnnouncementBar.scss"
import { IoCallOutline, IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
const AnnouncementBar = () => {

    const {pathname} = useLocation()

    const [closeBarHeader, setCloseBarHeader] = useState<boolean>(false)

    return pathname.includes("/admin") ? null : pathname.includes("/auth") ? null : (
        <>
            <div style={{ display: closeBarHeader ? "none" : "block" }} className="bar__header-image">
                <img src="https://texnomart.uz/_nuxt/img/promotion-pc-ru.81305b7.webp" alt="Header image" />
                <button onClick={() => setCloseBarHeader(true)} className="close__header-btn"><IoCloseSharp /></button>
            </div>
            <div className="announcement-bar">
                <div className="announcement__bar-wrapper container" >
                    <a href="#" className="number-link">
                        <i><IoCallOutline /></i>
                        <p>+99897 123 45 67</p>
                    </a>
                    <div className="bar-content">
                        <p>Get 50% off Selected Items &nbsp; | &nbsp; <Link className="link" to={"/"}>Shop Now</Link></p>
                    </div>
                    <div className="bar__select-actions">
                        <select className="bar-select">
                            <option value="">UZ</option>
                            <option value="">RU</option>
                            <option value="">EN</option>
                        </select>
                        <select className="bar-select">
                            <option value="">Chilanzor</option>
                            <option value="">Olmazor</option>
                            <option value="">Yunusobod</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnnouncementBar
