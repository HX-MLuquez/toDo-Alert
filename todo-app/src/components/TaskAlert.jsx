import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleTaskCompleted } from "../redux/actions";

const TaskAlert = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((s) => s.tasks);
  const user = useSelector((s) => s.user);
  const tasksUser = tasks.filter((t) => t.userId === user.id);
  useEffect(() => {
    const checkTasks = () => {

      //todo: Obtener fecha y hora de Argentina
      const currentDate = new Date();
      const localDate = new Date(currentDate.getTime() + -3 * 60 * 60 * 1000);
      const currentDateString = localDate.toISOString().split("T")[0];
      const currentTimeString = currentDate.toTimeString().split(" ")[0];

      // console.log("date check ----> ", currentDateString, currentTimeString);
      tasksUser?.forEach((task) => {
        if (
          task.userId === user.id &&
          task.date === currentDateString &&
          task.hour === currentTimeString.slice(0, 5) &&
          task.checked === false
        ) {
          dispatch(toggleTaskCompleted(task.id));
          alert(
            `Tarea para el usuario ${user.userName.toUpperCase()}: ${task.task}`
          );
        }
      });
    };

    const intervalId = setInterval(checkTasks, 10000); // Verificar cada 10 segundos

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Alertas de tareas programadas</h2>
    </div>
  );
};

export default TaskAlert;
