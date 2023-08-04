import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserSession } from "../redux/actions";

const Login = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
    id: "",
  });

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const findUser = users.find(
      (u) =>
        u.userName === inputs.userName && u.password === Number(inputs.password)
    );
    // console.log("users is:", users);
    // console.log("inputs is:", inputs);
    // console.log("user is:", findUser);
    if (findUser) {
      dispatch(addUserSession(findUser));
      setInputs({ ...inputs, id: findUser.id });
      alert("Bienvenido");
      // Redirigir al usuario a la página de inicio con el userId en la ruta
      navigate(`/home`);
    } else {
      alert("usuario incorrecto");
      navigate("/");
    }
  }

  return (
    <div className="task-login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          key="userName"
          placeholder="username"
          name="userName" // Agrega el atributo 'name' para obtener el valor correctamente en handleChange
          onChange={handleChange}
          value={inputs.userName}
        />
        <input
          type="password"
          key="password"
          placeholder="password"
          name="password" // Agrega el atributo 'name' para obtener el valor correctamente en handleChange
          onChange={handleChange}
          value={inputs.password}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};
export default Login;