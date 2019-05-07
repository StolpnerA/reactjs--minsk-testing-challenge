import { STORAGE_KEY } from "../helpers/constants";

function updateTasks(tasks) {
  return Promise.resolve().then(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  })
}

function getTasks() {
  return Promise.resolve().then(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  })
}

export {
  updateTasks,
  getTasks,
}
