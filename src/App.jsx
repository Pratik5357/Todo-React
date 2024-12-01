import './App.css'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='box container-fluid m-0 p-0 d-flex flex-column'>
       <nav className="navbar">
        <Navbar/>
       </nav>
       <main>
        <div className="container d-flex flex-column p-0">
          <div className="AddBar px-4">
            <Task />
          </div>
          <div className="taskbox px-4 py-3 pb-4">
            <TaskList />
          </div>
        </div>
       </main>
    </div>
  )
}

export default App
