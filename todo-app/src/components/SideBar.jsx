import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={`/home`}>
        <button className="sidebar-button">Home</button>
      </Link>
      <Link to="/form">
        <button className="sidebar-button">Crear tarea</button>
      </Link>
      <Link to="/list">
        <button className="sidebar-button">Ver Lista</button>
      </Link>
      <Link to="/">
        <button className="sidebar-button">Logout</button>
      </Link>
    </div>
  );
};

export default SideBar;