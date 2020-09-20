import React, {useEffect} from 'react';
import './App.css';
import {todoApi} from './api/todo-api';
import {Route, Switch, Redirect} from 'react-router-dom';

function App() {

    useEffect(() => {
        todoApi.getTodos().then(() => console.log('yo'))
    }, [])

    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'} render={() => <h1>Main</h1>}/>
                <Route path={'/login'} render={() => <h1>login</h1>}/>
                {/*if you want to redirect and change url*/}
                <Route path='/404' render={() => <h1>404</h1>} />
                <Redirect from='*' to='/404' />
                {/*if you want to to show 404 page*/}
                <Route path='*' render={() => <h1>404</h1>} />
            </Switch>
        </div>
    );
}

export default App;
