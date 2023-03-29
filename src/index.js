import renderTaskList from './modules/renderTaskList.js';
import './style.css';

const TodoContainer = document.getElementById('mytodo-list');

const tasks = [
  { description: 'Task_01', completed: false, index: 2 },
  { description: 'Task_02', completed: true, index: 3 },
  { description: 'Task_03', completed: false, index: 1 },
];

const sortedTasks = tasks.sort((a, b) => a.index - b.index);

renderTaskList(sortedTasks, TodoContainer);