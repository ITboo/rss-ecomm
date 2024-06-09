import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src="/public/Logo.svg" alt="logo" />
        <p>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </p>
        <a href="tel:2195550114" className="phone">
          (219) 555-0114
        </a>
        <span>or</span>
        <a href="mailto:Proxy@gmail.com" className="phone">
          Proxy@gmail.com
        </a>
        <div className="copyright">
          Ecobazar eCommerce © 2021. All Rights Reserved
          <div className="payment"></div>
        </div>
      </div>
      <Link to="/faq">Faqs</Link>
    </footer>
  );
};

export default Footer;
