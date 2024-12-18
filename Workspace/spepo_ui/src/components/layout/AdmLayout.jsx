import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

import "./admLayout.css";

import MenuBar from "../Menubar/MenuBar";
import Sidebar from "../sidebar/Sidebar";

const AdmLayout = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/" />; 
  }
  return (
      <div className="adm-layout">
        <Sidebar />
        <div className="content-layout">
          <MenuBar />
          <div className="main-content-layout">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default AdmLayout;
