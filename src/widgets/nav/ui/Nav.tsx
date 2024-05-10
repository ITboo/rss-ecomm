import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__container container">
        <div className="nav__menu">
          <Link to="/">
            <h3 className="header__title">Home</h3>
          </Link>
          <Link to="/shop">
            <h3 className="header__title">Shop</h3>
          </Link>
          <Link to="/pages">
            <h3 className="header__title">Pages</h3>
          </Link>
          <Link to="/blog">
            <h3 className="header__title">Blog</h3>
          </Link>
          <Link to="/about">
            <h3 className="header__title">About us</h3>
          </Link>
          <Link to="/contact">
            <h3 className="header__title">Contact us</h3>
          </Link>
        </div>

        <a href="tel:2195550114" className="phone">
          <img src="/public/PhoneCall 1.svg" alt="phone" />
          (219) 555-0114
        </a>
      </div>
    </nav>
  );
};

export default Nav;
