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
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.436 4.375C18.9194 4.77396 20.2719 5.55567 21.3581 6.64184C22.4442 7.72801 23.226 9.08051 23.6249 10.5639"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5308 7.75684C17.4206 7.99622 18.2319 8.46518 18.8835 9.11675C19.535 9.76832 20.004 10.5796 20.2434 11.4695"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.115 13.6522C11.0224 15.5078 12.5263 17.0053 14.3859 17.9047C14.522 17.9692 14.6727 17.997 14.8229 17.9855C14.9731 17.974 15.1178 17.9235 15.2425 17.839L17.9812 16.0138C18.1022 15.933 18.2414 15.8837 18.3862 15.8702C18.5311 15.8568 18.677 15.8797 18.8107 15.9368L23.9339 18.133C24.1079 18.207 24.2532 18.3354 24.3479 18.4991C24.4426 18.6627 24.4815 18.8527 24.4589 19.0404C24.2967 20.3074 23.6784 21.4718 22.7196 22.3158C21.7608 23.1597 20.5273 23.6253 19.25 23.6254C15.3049 23.6254 11.5214 22.0582 8.73179 19.2686C5.94218 16.479 4.375 12.6955 4.375 8.75041C4.37512 7.4732 4.84074 6.23982 5.68471 5.28118C6.52867 4.32254 7.6931 3.70437 8.96 3.54241C9.14771 3.51977 9.33769 3.55873 9.50134 3.65342C9.66499 3.7481 9.79345 3.89339 9.86738 4.06741L12.0654 9.19491C12.1219 9.32739 12.1449 9.47178 12.1322 9.61527C12.1195 9.75875 12.0716 9.89688 11.9928 10.0174L10.1728 12.7982C10.0901 12.9234 10.0414 13.0679 10.0313 13.2175C10.0212 13.3672 10.05 13.517 10.115 13.6522V13.6522Z"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          (219) 555-0114
        </a>
      </div>
    </nav>
  );
};

export default Nav;
