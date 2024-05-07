const ToDoTemplate = ({ toDo, deleteToDo, updateToDo }) => {
  const { id, title, description, state, priority } = toDo;
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`${state && "text-decoration-line-through"}`}>
            {title}
          </h5>
          <p className={`${state && "text-decoration-line-through"}`}>
            {description}
          </p>
          <div className="d-flex gap-2">
            <button onClick={() => deleteToDo(id)} className="btn btn-sm btn-danger">Delete</button>
            <button onClick={() => updateToDo(id)} className="btn btn-sm btn-warning">Update</button>
          </div>
        </div>
        <span className="badge text-bg-primary">
          {priority && "Prioritary"}
        </span>
      </div>
    </li>
  );
};

export default ToDoTemplate;
