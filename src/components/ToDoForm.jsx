import { useState } from "react";
import Swal from 'sweetalert2';

const ToDoForm = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "todo",
    priority: true,
  });

  const {title, description, state, priority} = todo
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!title.trim()  || !description.trim()){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title and description are mandatory",
        footer: 'Please, provide a title and a description'
      });
    }
    addTodo({
      id: Date.now(),
      ...todo,
      state: state === 'complete'
    })
    return Swal.fire({
      icon: "success",
      title: "Your ToDo has been saved!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  

  const handleChange = (event) => {
    const {name, type , checked, value} = event.target
    setTodo({ ...todo, [name] :  type === 'checkbox' ?  checked : value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add a ToDo"
        className="form-control mb-2"
        name="title"
        value={title}
        //... crea una copia del objeto todo con todos los valores ya ingresados,
        // a continuación, modifica el title del objeto todo
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        id=""
        placeholder="Add a description"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Prioridad</label>
      </div>
      <select
        className="form-control mb-2"
        id=""
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="todo">ToDo</option>
        <option value="pending">Pending</option>
        <option value="complete">Complete</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ToDoForm;
