const initialStateToDos = JSON.parse(localStorage.getItem('todos')) || []; 

export default initialStateToDos;
