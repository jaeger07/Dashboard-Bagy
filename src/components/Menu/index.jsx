import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItens } from '../MenuItens';
import logo from '../../assets/logo.svg';

import './style.scss';


const Menu = (id = 'menu') => {
  
  return (
    <nav id={id} className='menu' >
      <ul className="menu-items">
        <div className='menu-logo'>
          <img src={logo} className="menu-logo-img" alt="logo" />
          <span className='menu-logo-tittle'>Dashboard<br/>Bagy</span>
        </div>


        {MenuItens.map((item, index) => {
          return (
            <li key={index} className="menu-options">
              <NavLink exact to={item.path} activeClassName="selected">
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;