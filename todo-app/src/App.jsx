import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import SideBar from "./components/SideBar";

const App = () => {
  const { pathname } = useLocation();
  // console.log("location", location);
  return (
    <div className="app">
      {pathname === "/" ? null : <SideBar />}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/list" element={<TaskList />}></Route>
        <Route path="/form" element={<TaskForm  />}></Route>
      </Routes>
    </div>
  );
};

export default App;
