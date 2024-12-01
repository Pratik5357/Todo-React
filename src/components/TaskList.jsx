import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, markAsDone } from "../features/todo/todoSlice"


export default function TaskList() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const handleMark = (id) => {
    dispatch(markAsDone(id));
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  if(todos.length === 0) return <div className='tasklist container-fluid py-3 rounded-3 text-white'>
    <div className="counter border-bottom border-secondary mb-1">
        <p className="text-secondary">Tasks ({todos.length})</p>
      </div>
    <p className="m-2">No tasks</p>
  </div>
  return (
    <div className='tasklist container-fluid py-3 rounded-3 text-white'>
      <div className="counter border-bottom border-secondary mb-1">
        <p className="text-secondary">Tasks ({todos.length})</p>
      </div>
      {todos.map((item, index) => (
        <div key={item.id} className="todo p-3 rounded-1 border border-secondary d-flex align-items-center justify-content-between">
          <div className="taskContainer d-flex">
            <p className="index m-0 ms-2 me-4">{index + 1}</p>
            {item.isDone ? <p className="todo-title m-0 text-decoration-line-through">{item.task}</p> :<p className="todo-title m-0">{item.task}</p>}
          </div>
          <div className="d-flex">
            {item.isDone ? <button className="btn btn-sm btn-light me-2" onClick={() => handleMark(item.id)} ><i className="fa-solid fa-xmark"></i></button> : <button className="btn btn-sm btn-light me-2" onClick={() => handleMark(item.id)} ><i className="fa-solid fa-check"></i></button>}
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)} ><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      ))}
    </div>
  )
}
