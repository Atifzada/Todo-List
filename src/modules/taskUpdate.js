import { tasksToDo, renderList, yetTodo } from './taskFunction.js';

const checkedTask = ({ index, status }) => {
  tasksToDo[index - 1].completed = status;
  localStorage.setItem('tasksTodo', JSON.stringify(tasksToDo));
  renderList();
};

const completedTasks = () => {
  const uncompletedTodos = tasksToDo.filter((element) => element.completed !== true);
  const newtodo = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('tasksTodo', JSON.stringify(newtodo));
  yetTodo(newtodo);
};

export { checkedTask, completedTasks };