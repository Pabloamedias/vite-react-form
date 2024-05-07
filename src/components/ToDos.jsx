import ToDoTemplate from "./ToDoTemplate";

const ToDos = ({ toDos, deleteToDo, updateToDo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">ToDo</h2>
      <ul className="list-group">
        {toDos.map((toDo) => (
          <ToDoTemplate key={toDo.id} toDo={toDo} deleteToDo={deleteToDo} updateToDo={updateToDo} />
        ))}
        {toDos.length === 0 && (
          <li className="list-group-item text-center">
            No ToDos on the list, add a new one!
          </li>
        )}
      </ul>
    </div>
  );
};

export default ToDos;
