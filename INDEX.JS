var tasks = [
  {
    toDo: 'Выучить стих',

  },
  {
    toDo: 'Сделать д/з',
  },
  {
    toDo: 'Убрать дома',
  },
  {
    toDo: 'Выгулять собаку',
  },
];

showTasks(tasks);

function showTasks(){

  var block = document.getElementById('block');

  for(var i=0; i<tasks.length; i++){
    var h2 = document.createElement('h2');
    block.insertBefore(h2, null);
    h2.className = 'taskClass';
    h2.innerHTML = tasks[i].toDo;

  }
};


var newTask = document.getElementById('newTask');
var button = document.createElement('button');
newTask.insertBefore(button, null);
button.innerHTML = 'Добавить новое задание';
button.onclick = function(){
  addTask();
};



function addTask(){
  var arr = {
    toDo: document.getElementById('name').value,
  }
  tasks.push(arr);
  block.innerHTML = '';
  showTasks(tasks);
  localStorage.setItem('toDo', JSON.stringify(tasks));
};

if(localStorage.getItem('toDo') !== null){
  tasks = JSON.parse(localStorage.getItem('toDo'));
  block.innerHTML = '';
  showTasks(tasks);
};
