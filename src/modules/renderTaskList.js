const renderTaskList = (Tasks, Element) => {
  let innerHtml = Tasks.map((Tasks) => {
    return `<li><div><input type="checkbox"/><p>${Tasks.description}</p></div>
    <i class="material-icons dots">more_vert</i></i>`;
  }).join('');

  Element.innerHTML = innerHtml;
};

export default renderTaskList;

