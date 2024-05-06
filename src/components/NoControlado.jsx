import { useRef } from "react";

const NoControlado = () => {
    const form = useRef(null)

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(form.current)
        // spread operator: permite a un elemento iterable ser expandido
        // copia cada uno de sus elementos

        // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
        const dataObject = Object.fromEntries([...data.entries()])
        console.log(dataObject)
    }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="add a ToDo"
        className="form-control mb-2"
        name="title"
        defaultValue="Todo #1"
      />
      <textarea
        className="form-control mb-2"
        id=""
        placeholder="Add a description"
        name="description"
        defaultValue="description #01"
      />
      <select className="form-control mb-2" id="" name="state" defaultValue="pending">
        <option value="pending">Pending</option>
        <option value="complete">Complete</option>
      </select>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default NoControlado;
