import { Link, useLocation } from 'react-router-dom';
import "./Footer.scss";
import FacebookIcon from "../../assets/images/facebook.svg";
import InstagramIcon from "../../assets/images/instagram.webp";
import TelegramIcon from "../../assets/images/telegram.svg";
import OlxIcon from "../../assets/images/olx.svg";
import EgodevsLogo from "../../assets/images/egodevslogo.png";

const Footer = () => {

  const { pathname } = useLocation();

  return pathname.includes("/admin") ? null : pathname.includes("/auth") ? null : (
    <footer>
      <div className="footer-wrapper container">
        <ul className="footer-menu">
          <li className="item-title">Documents</li>
          <li>
            <Link className="item-link" to="/">General Terms for Sale</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Archive of Offers</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Regulations</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Certificate</Link>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="item-title">Services</li>
          <li>
            <Link className="item-link" to="/">Installment in Islam</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Sell with Us!</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Returns</Link>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="item-title">Product Catalog</li>
          <li>
            <Link className="item-link" to="pray-time">Smartphones and Phones</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Gadgets</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Accessories for Smartphones</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Related Products</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Watches and Accessories</Link>
          </li>
        </ul>
        <ul className="footer__actions-menu">
          <li className="action__item-title">We are on Social Media</li>
          <li>
            <div className="social__media-item">
              <img src={InstagramIcon} alt="Instagram" />
              <img src={FacebookIcon} alt="Facebook" />
              <img src={TelegramIcon} alt="Telegram" />
              <img src={OlxIcon} alt="Olx" />
            </div>
          </li>
          <li className="news-title">Information Service</li>
          <li>
            <a href='#' className="action__item-link">mehrojbek uz</a>
          </li>
          <li>
            <Link to="/" className="action__item-link">+99897 777 00 77</Link>
          </li>
        </ul>
      </div>
      <div className="footer__bottom-wrapper">
        <p>@2024 Mekhrojbek</p>
        <img src={EgodevsLogo} alt="Egodevs Logo" />
      </div>
    </footer>
  );
};

export default Footer;
