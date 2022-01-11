import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/image.png";

import "./style.scss"

const Header = ({ page }) => {
    return (
        <div className="header">
          <div className="header-logo">
            <div className="header-menu">
              <FiMenu size={23} className="header-menu-icon" />
            </div>
            <h3>{page}</h3>
          </div>
          <div className="header-user">
            <BiSearch size={20 } className="header-user-icon" />
            <IoNotifications size={20} className="header-user-icon" />
            <div className="header-user-division" />
            <span className="header-user-name">
              Matheus Borges
            </span>
            <div className="header-user-border">
              <img src={logo} className="header-user-image" alt="logo" />
            </div>
          </div>
        </div>
    );
  };
 
export default Header;