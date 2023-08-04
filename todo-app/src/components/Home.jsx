import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import TaskAlert from "./TaskAlert";

const Home = () => {
  const user = useSelector((s) => s.user);
  // console.log("--->", user);
  return (
    <>
      <div className="app_container">
        <h2>USUARIO: {user.userName.toUpperCase()}</h2>
      </div>
      <TaskAlert></TaskAlert>
    </>
  );
};

export default Home;
