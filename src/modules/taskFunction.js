// eslint-disable-next-line import/no-mutable-exports
let tasksToDo = JSON.parse(localStorage.getItem('tasksToDo')) || [];

const taskList = document.getElementById('myTasksList');

/* Rendering Task List */
const renderList = () => {
  taskList.innerHTML = '';
  tasksToDo.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'content';
    taskCard.index = `${task.index}`;
    taskCard.innerHTML = `<div class="text" id="${task.index}"> 
                            ${task.completed === true ? `
                            <input type="checkbox" id="checkbox" class="checked" checked></input>` : '<input type="checkbox" id="checkbox" class="unchecked"></input>'}
                            <input class="${task.completed === true ? 'taskCompleted editTask' : 'editTask'}"
                              type="text" value="${task.description}">
                            </input>
                          </div>
                          <i class="fa-solid fa-trash-can deleteTask" id="deleteTask"></i>`;
    taskList.appendChild(taskCard);
  });
};

/* Add To List */
const newTask = document.getElementById('input');
const addToList = (e) => {
  if (newTask.value === '') return;
  if (e.key === 'Enter' || e === 'clicked') {
    const taskItem = {
      description: newTask.value,
      completed: false,
      index: tasksToDo.length + 1,
    };
    newTask.value = '';
    tasksToDo = [...tasksToDo, taskItem];
    localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
    renderList();
  }
};

/* Edit Task */
const editTask = (index, event) => {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    tasksToDo[index - 1].description = event.target.value;
    localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
  }
};

/* Remove Task */
const removeTask = (targetIndex) => {
  const listFiltered = tasksToDo.filter((item) => +item.index !== +targetIndex);
  const newList = listFiltered.map((item, index) => ({
    description: item.description,
    completed: item.completed,
    index: index + 1,
  }));
  tasksToDo = newList;
  localStorage.setItem('tasksToDo', JSON.stringify(newList));
  renderList();
};

const yetTodo = (data) => {
  tasksToDo = data;
  renderList();
};

export {
  renderList, addToList, editTask, removeTask, tasksToDo, yetTodo,
};