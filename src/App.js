import logo from './logo.svg';
import './App.css';
import AddTask from './component/AddTask';
import { useReducer } from 'react';
import tasksReduce, { initialState } from './reducer/addTaskReducer';

function App() {
    const [tasks, dispatch] = useReducer(tasksReduce, initialState);
    return (
        <div className="App">
            <h1>Today Task Lists</h1>
            <AddTask tasks={tasks} />
        </div>
    );
}

export default App;
