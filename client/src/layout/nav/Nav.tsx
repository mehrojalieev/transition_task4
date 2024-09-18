import { Link, useLocation, useNavigate } from "react-router-dom"
import "./Nav.scss"
import {  IoMdClose, IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/search-slice";


const CategoriesList = [
    "Mobiles and Gadgets",
    "Laptops",
    "Tablets",
    "Wearables",
    "Gaming",
    "Home Appliances",
    "Television",
    "Transport",
    "Cameras",
]
const Nav = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [innerScroll, setInnerScroll] = useState<number>(window.scrollY);


    useEffect(() => {
        const handleScroll = () => {
            setInnerScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (pathname === "/") {
            setInputValue("")
        }
    }, [pathname])

    const handleSearchProduct = (e: any) => {
        e.preventDefault()
        if (inputValue.length > 0) {
            setTimeout(() => {
                dispatch(setSearchValue(inputValue))
                navigate(`/search-products/${inputValue}`)
            }, 1500)
        }
        else {
            navigate("/")
        }
    }

    const login = false

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    

    return pathname.includes("/admin") ? null :  (
        <section className="nav-section">
            <nav className={`nav  ${innerScroll > 95 ? "fixed-nav" : ""}`}>
                <div className="nav-wrapper container">

                    <Link to={'/'} className="nav-logo">
                        <img src="https://addons.mozilla.org/user-media/addon_icons/2684/2684465-64.png?modified=b5ca6b5b" />
                        <h1>Egodevs</h1>
                    </Link>
                    <div className="nav__form-wrapper">

                        <div className="category-action">
                            <i><IoMenuSharp /></i>
                            <p>Categories</p>
                        </div>
                        <form onSubmit={handleSearchProduct} className="nav__search-form">
                            <input value={inputValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} type="text" placeholder="Search Product" />
                            <button type="submit" className="search-btn"><IoIosSearch /></button>
                        </form>
                    </div>

                    <div className="nav-actions">
                        {
                            login ?
                                <div className="action-link">
                                    <i><FaRegUser /></i>
                                    <p>Login</p>
                                </div>
                                : <Link to={'/user/orders'} className="action-link">
                                    <i><FiUser /></i>
                                    <p>Account</p>
                                </Link>
                        }


                        <Link to={'/wishlist'} className="action-link">
                            <i><FaRegHeart /></i>
                            <p>Favorite</p>
                        </Link>
                        <Link to={'/cart'} className="action-link">
                            <i><BsCart3 /></i>
                            <p>Cart</p>
                        </Link>
                    </div>
                </div>
            </nav>
            {/* Responsive Nav */}
            <div className="responsive__navigation">
                <div className="navigation-header">
                    <img src={"https://addons.mozilla.org/user-media/addon_icons/2684/2684465-64.png?modified=b5ca6b5b"} alt="Logo" />
                    <select className="language-category">
                        <option value="uzb">UZB</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>

                <form onSubmit={handleSearchProduct as any} style={{ border: isFocused ? '2px solid #FFBE1F' : '2px solid #eee' }} className="navigation-form">
                    <input
                    value={inputValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        type="text"
                        placeholder="Tovarlarni izlash"
                    />
                    <span style={{ display: isFocused ? 'block' : 'none' }} className="material-symbols-outlined clear__input-icon" onClick={() => setInputValue("")} >
                        <IoMdClose />
                    </span>
                    <button style={{ display: isFocused ? 'block' : 'none' }} className="search-btn" type="button" >
                        <IoIosSearch />
                    </button>
                    <span
                        style={{ display: !isFocused ? 'block' : 'none' }}
                        className="search-icon"
                    >
                        <IoIosSearch/>
                    </span>
                </form>
            </div>

            {/* Nav categories */}
            <div style={pathname.includes("/auth") ? { display: "none" } : { display: "block" }} className="nav__categories-wrapper container">
                {
                    CategoriesList.map((item, index) => (
                        <Link key={index} to={`/category/${item}`} className="nav__category-link">{item}</Link>
                    ))
                }
            </div>
        </section>
    )
}

export default Nav
