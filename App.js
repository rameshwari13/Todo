
import './App.css';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import Todo from './todo';
import AddTodo from './addtodo';



function App() {
  return (
    <div className="App">
      
       <Router>
        <Switch>
          <Route path="/todo" component={Todo}/>
          <Router path="/addtodo" component={AddTodo} />
        </Switch>
      </Router> 

      
      
      
    </div>
  );
}

export default App;
