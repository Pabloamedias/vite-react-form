import ToDoForm from "./components/ToDoForm";
import { useEffect, useState } from "react";
import initialStateToDos from "./Utils/initialToDos";
import ToDos from "./components/ToDos";

const App = () => {
  const [toDos, setToDos] = useState(initialStateToDos);

  useEffect(()=>{
  localStorage.setItem('todos', JSON.stringify(toDos))
  }, [toDos])


  const addTodo = (newTodo) => {
    setToDos([...toDos, newTodo]);
  };

  const deleteToDo = (id) => {
    //Retorna todos los toDo que no coincidan con el id
    const newArray = toDos.filter((toDo) => toDo.id !== id);
    setToDos(newArray);
  };

  const updateToDo = (id) => {
    const newArray = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.state = !toDo.state;
      }
      return toDo;
    });
    setToDos(newArray);
  };

  const orderToDo = (arrayToDos) => {
    return arrayToDos.sort((a, b) => {
      //Sin cambios en el orden
      if (a.priority === b.priority) return 0;

      if (a.priority) {
        //Tiene mayor prioridad, va al inicio del array
        return -1;
      } else {
        //No tiene prioridad, va al final del array
        return 1;
      }
    });
  };

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formulario:</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDos toDos={orderToDo(toDos)} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
    </div>
  );
};

export default App;
