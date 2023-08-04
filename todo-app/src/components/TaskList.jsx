import React, { useState } from "react";
import "./TaskList.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskCompleted, deleteTask, editTask } from "../redux/actions";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((s) => s.tasks);
  const user = useSelector((s) => s.user);

  // State para mantener el estado de edición y valores editables de cada tarea
  const [editModeMap, setEditModeMap] = useState({});
  const [inputs, setInputs] = useState({
    date: "",
    hour: "",
  });

  const list = tasks.filter((t) => t.userId === user.id);

  //todo: manejo de check-box y de cambiar el valor de la prop checked de la task
  function handleCheck(id) {
    dispatch(toggleTaskCompleted(id));
  }

  //todo: agrega a editModeMap {"id-task-seleccionado": true}
  function handleEdit(task) {
    // Establecer el estado de edición y los valores editables para la tarea seleccionada
    setInputs({ date: task.date, hour: task.hour });
    setEditModeMap({
      ...editModeMap,
      [task.id]: true,
    });
  }

  //todo: para editar una tarea, donde inputs contiene {date:"new-date", hour:"new-hour"}
  function handleSaveEdit(id) {
    dispatch(editTask(id, inputs));
    // Una vez que se haya guardado la edición, reseteamos los campos y desactivamos el modo edición para la tarea seleccionada.
    setEditModeMap({
      ...editModeMap,
      [id]: false,
    });
  }

  //* Biendeamos los inputs 
  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="task-list">
      <h2>Lista de Tareas</h2>
      {list?.map((l, index) => {
        //* guardamos valor true o false en isEditMode que habilita a true al tocar el botón Editar
        const isEditMode = editModeMap[l.id];
        return (
          <div className="task-item" key={index}>
            <input
              type="checkbox"
              name="checkbox"
              onChange={() => handleCheck(l.id)}
              checked={l.checked}
            />
            {isEditMode ? (
              <>
                <span>{l.task}</span>
                <input
                  type="date"
                  key="date_edit"
                  name="date"
                  value={inputs.date}
                  onChange={handleChange}
                />
                <input
                  type="time"
                  key="hour_edit"
                  name="hour"
                  value={inputs.hour}
                  onChange={handleChange}
                />
                <button onClick={(e) => handleSaveEdit(l.id)}>Guardar</button>
              </>
            ) : (
              <>
                <span>{l.task}</span>
                <span>{l.date}</span>
                <span>{l.hour}</span>
                <button onClick={() => handleEdit(l)}>Editar</button>
                <button onClick={(e) => dispatch(deleteTask(l.id))}>
                  Eliminar
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
