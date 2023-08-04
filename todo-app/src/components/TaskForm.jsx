import React, { useState } from "react";
import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const taskId = uuidv4();
  const user = useSelector((s) => s.user);
  const navigate = useNavigate();

  const [inputs, setInpunts] = useState({
    id: taskId,
    task: "",
    date: "",
    hour: "",
    userId: user.id,
    checked: false,
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    setInpunts({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (inputs.task === "" || inputs.date === "" || inputs.hour === "") {
      alert("falta llenar campos");
    } else {
      dispatch(addTask(inputs));
      setInpunts({
        id: "",
        task: "",
        date: "",
        hour: "",
        userId: "",
        checked: "",
      });
      navigate("/list");
    }
  }
  return (
    <div className="task-form">
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tarea"
          name={"task"}
          key={"task"}
          onChange={handleChange}
          value={inputs.task}
        />
        <input
          type="date"
          placeholder="Fecha de recordatorio"
          name={"date"}
          key={"date"}
          onChange={handleChange}
          value={inputs.date}
        />
        <input
          type="time"
          placeholder="Hora de recordatorio"
          name={"hour"}
          key={"hour"}
          onChange={handleChange}
          value={inputs.hour}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default TaskForm;