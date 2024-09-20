import { Link, useLocation } from "react-router-dom";
import "./AnnouncementBar.scss"
import { IoCallOutline } from "react-icons/io5";
const AnnouncementBar = () => {

    const {pathname} = useLocation()


    return pathname.includes("/admin") ? null : pathname.includes("/auth") ? null : (
        <>
           
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
