import { Link } from 'react-router-dom';
import Nav from '../../nav/ui/Nav';
import './Header.css';
import Button from '../../../shared/ui/button/Button';
import { Input } from '../../../shared/ui/input/Input';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__top">
          <div className="header__location">
            <img src="/public/Map Pin.svg" alt="map" />
            <span>Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
          </div>
          <div className="">
            <span>
              Eng <img src="/public/Vector.svg" alt="" />
            </span>
            <span>
              USD <img src="/public/Vector.svg" alt="" />
            </span>
            <span>Sign in / Sign up</span>
          </div>
        </div>
        <div className="header__main">
          <Link to="/">
            <img src="/public/Logo.svg" alt="Logo" />
          </Link>
          <div className="search">
            <Input placeholder="Search" />
            <Button className="search__btn">Search</Button>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
