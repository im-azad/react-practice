import logo from './logo.svg';
import './App.css';
import AddTask from './component/AddTask';
import { useReducer } from 'react';
import tasksReduce, { initialState } from './reducer/addTaskReducer';

function App() {
    const [tasks, dispatch] = useReducer(tasksReduce, initialState);
    const handleAddTask = (tasks) => {
        console.log('task:', tasks);
    };
    return (
        <div className="App">
            <h1>Today Task Lists</h1>
            <AddTask onAddTasks={handleAddTask} />
        </div>
    );
}

export default App;
