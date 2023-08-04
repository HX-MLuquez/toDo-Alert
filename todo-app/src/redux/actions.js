//todo: action Types

export const USER_SESSION = "USER_SESSION";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK_COMPLETED = "TOGGLE_TASK_COMPLETED";

//todo: actions
export function addUserSession(user) {
  return {
    type: USER_SESSION,
    payload: user,
  };
}
export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}
export function editTask(id, task) {
  return {
    type: EDIT_TASK,
    payload: [id, task],
  };
}
export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: id,
  };
}
export function toggleTaskCompleted(id) {
  return {
    type: TOGGLE_TASK_COMPLETED,
    payload: id,
  };
}
