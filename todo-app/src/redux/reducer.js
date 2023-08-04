import {
  USER_SESSION,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_TASK_COMPLETED,
} from "./actions";

const initialState = {
  //todo: user y users simulan datos de usuarios cual simular una db para poder logearnos
  user: {},
  users: [
    { userName: "pepe", password: 1234, id: 1 },
    { userName: "neo", password: 101, id: 2 },
  ],
  tasks: [
    {
      id: 101,
      task: "test user pepe",
      date: "2023-08-01",
      hour: "10:51",
      userId: 1,
      checked: false,
    },
  ],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case USER_SESSION:
      return {
        ...state,
        user: payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };
    case EDIT_TASK:
      const taskEdit = state.tasks.filter((t) => {
        if (payload[0] === t.id) {
          t.date = payload[1].date;
          t.hour = payload[1].hour;
        }
        return t;
      });
      return {
        ...state,
        tasks: taskEdit,
      };
    case DELETE_TASK:
      const filterTasks = state.tasks.filter((t) => t.id !== payload);
      return {
        ...state,
        tasks: filterTasks,
      };
    case TOGGLE_TASK_COMPLETED:
      const updatedTasks = state.tasks.map((task) =>
        task.id === payload ? { ...task, checked: !task.checked } : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
}
