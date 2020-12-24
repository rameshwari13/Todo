import Axios from 'axios';
import React, { Component } from 'react';

export default class AddTodo extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_name: ''  
        }
    }

    onChangeName(e) {
        this.setState({ todo_name: e.target.value })
    }
    

    onSubmit(e) {
        e.preventDefault()

        const todoObject = {
            todo_name: this.state.todo_name
        };

        Axios.post('http://localhost:8000/todo', todoObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ todo_name: '' })
    }


    render() {
    return (
        
                        <div>
                        <form onSubmit={this.onSubmit}>
                            
                        <div class="form-row">
                            <div class="col">
                            <input type="text" class="form-control"  name="todo_name" value={this.state.todo_name} onChange={this.onChangeName}/>
                            </div>
                            
                        </div> 
                        <button type="submit">Add</button>
                        </form>
                        </div>
        
    )
}
}