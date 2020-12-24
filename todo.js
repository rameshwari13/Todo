import Axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';


export default class Todo extends React.Component{

  constructor(){
    super()

    this.state={todo:[]}
    this.deleteTodo= this.deleteTodo.bind(this);
  }

  componentDidMount(){
    Axios.get("http://localhost:8000/todo").then(res =>{console.log(res.data)
  this.setState({todo:res.data.todo})
  })
  }




  deleteTodo = (id) => {
    Axios.delete('http://localhost:8000/todo/'+ id)
    .then((res) => {
        console.log('successfully deleted!')

        this.setState({
          todo: this.state.todo.filter(user => user.id !== id)
        })
    }).catch((error) => {
        console.log(error)
    })
}

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="navbar-brand" href="#"><b>Todo</b></div>
  
  
</nav>  
<div className="container mt-5">

<table class="table table-dark table-hover text-center bordered">
              <thead class="thead-inverse">
                <tr>
                
                  
                  <th>ToDo List</th>
                  <th>Add</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.todo.map(todo =>{
                    return(

                      <tr>
                    
                    <td scope="row">{todo.todo_name}</td>
                    <td>
                    <Link to="/addtodo"><button className="btn btn-danger">Add</button></Link>
                    </td>
                    <td>
                    <button onClick={() => this.deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                    )
                  })}
                </tbody>

            </table>
</div>
            
            </div>
        )
    }

}

