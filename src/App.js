import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
import react,{ useState } from 'react';


const App = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks,task]);
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task,i)=>
            i===index?{...task,completed: !task.completed}:task
        );
        setTasks(updatedTasks);
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task,i) => i!==index);
        setTasks(updatedTasks);
    }

    return (
        <div className="App">
            <h1>Task Buddy</h1>
            <TaskForm addTask = {addTask}/>
            <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}    
            />
            <ProgressTracker tasks={tasks}/>

        </div>
    );
}

export default App;
