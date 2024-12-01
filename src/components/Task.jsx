import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos } from '../features/todo/todoSlice'

export default function Task() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    setTask(e.target.value);
    console.log(task);
  }

  const handleTask = ()=>{
    if(task){
      dispatch(addTodos(task));
      setTask('');
    }
  }

  return (
    <div className="main container-fluid px-2">
      <div className="inputs">
        <input placeholder="Enter a task" value={task} onChange={handleChange}/>
        <button className='icon text-white border-0 align-items-center' onClick={handleTask}><i className='fa-solid fa-plus fs-5'></i>&nbsp;Add task</button>
      </div>
    </div>
  )
}
