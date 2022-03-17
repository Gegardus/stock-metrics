import PropTypes from 'prop-types';
import React from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = ({ home }) => (
  <section className="header">
    {!home && (
      <NavLink to="/">     
      </NavLink>
    )}

    <h1>{home ? 'Stock Metrics' : 'Company Details'}</h1>

    <div className="icons">
      <BsFillMicFill />
      <IoIosSettings />
    </div>
  </section>
);

Header.propTypes = {
  home: PropTypes.string.isRequired,
};

export default Header;
