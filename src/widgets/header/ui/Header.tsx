import { Link } from 'react-router-dom';
import Nav from '../../nav/ui/Nav';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header__top">
        <div className="header__location">
          <img src="/public/Map Pin.svg" alt="map" />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>
        <div className="">
          <span>Eng</span>
          <span>USD</span>
          <span>Sign in / Sign up</span>
        </div>
      </div>

      <Link to="/">
        <img src="/public/Logo.svg" alt="Logo" />
      </Link>
      <div className="search">
        Search
        <button>Search</button>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
