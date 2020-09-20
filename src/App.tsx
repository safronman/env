import React, {useEffect} from 'react';
import './App.css';
import {todoApi} from './api/todo-api';

function App() {

    useEffect(() => {
        todoApi.getTodos().then(() => alert('yo'))
    }, [])

    return (
        <div className="App">
        </div>
    );
}

export default App;
