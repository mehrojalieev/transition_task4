import { Link, useLocation } from 'react-router-dom';
import "./Footer.scss"
import FacebookIcon from "../../assets/images/facebook.svg"
import InstagramIcon from "../../assets/images/instagram.webp"
import TelegramIcon from "../../assets/images/telegram.svg"
import OlxIcon from "../../assets/images/olx.svg"
import EgodevsLogo from "../../assets/images/egodevslogo.png"

const Footer = () => {

  const {pathname} = useLocation()

  return pathname.includes("/admin") ? null : pathname.includes("/auth") ? null : (
    <footer>
      <div className="footer-wrapper container">
        <ul className="footer-menu">
          <li className="item-title">Hujjatlar</li>
          <li>
            <Link className="item-link" to="/">Sotish uchun umumiy shartlar</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Ofertalar arxivi</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Nizom</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Guvohnoma</Link>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="item-title">Servis</li>
          
          <li>
            <Link className="item-link" to="/">Muddatli to'lov islomda</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Biz bilan soting!</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Qaytarish</Link>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="item-title">Tovarlar katalogi</li>
          <li>
            <Link className="item-link" to="pray-time">Smartfonlar va telefonlar</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Gadjetlar</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Smartfonlar uchun aksessuarlar</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Tegishli tovarlar</Link>
          </li>
          <li>
            <Link className="item-link" to="/">Soat va aksessuarlar</Link>
          </li>
        </ul>
        <ul className="footer__actions-menu">
          <li className="action__item-title">Biz ijtimoiy axborot vositalarida</li>
          <li>
            <div className="social__media-item">
              <img src={InstagramIcon} alt="Instagram" />
              <img src={FacebookIcon} alt="Facebook" />
              <img src={TelegramIcon} alt="Telegram" />
              <img src={OlxIcon} alt='Olx'  />
            </div>
          </li>
          <li className="news-title">Axborot xizmati</li>
          <li>
            <a href='https://www.egodevs.uz/' className="action__item-link">@egodevs.uz</a>
          </li>
          <li>
            <Link to="/" className="action__item-link">+99897 777 00 77</Link>
          </li>
        </ul>
      </div>
      <div className="footer__bottom-wrapper">
        <p>@2024 EgoDevs Team</p>
        <img src={EgodevsLogo} alt="Counter" />
      </div>
    </footer>
  );
};

export default Footer;
