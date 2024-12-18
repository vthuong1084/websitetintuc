import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./sidebar.css";

import Sidebar_Items from "../../assets/json/sidebar.json";

const SidebarItem = (props) => {
  const active = props.active ? 'active' : ''

  return (
    <div className="sidebar-item">
      <div className={`sidebar-item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation()
  const activeItem = Sidebar_Items.findIndex(item => item.route === location.pathname)

  return (
    <div className="sidebar">
      <div className="logo-adm">
        <img src={require('../../assets/img/favicon.png')}   style={{ height: '60px' }} alt="SPEPO" />
      </div>
      {Sidebar_Items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active = {index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
