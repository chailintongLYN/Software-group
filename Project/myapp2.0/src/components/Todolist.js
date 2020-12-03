import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import './control.css';

//声明class类：
class Todolist extends Component{
    constructor(){
        super();
        this.state = {
            inpValue: '',
            todos:[]
        }
    }
    handleChange = (e)=>{
        this.setState({inpValue:e.target.value})
    }
    componentDidMount(){
        //this.input.focus();
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos: JSON.parse(todos)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem(
            'todos',
            JSON.stringify(this.state.todos)
        )
    }
    addTodo = ()=>{
        if(this.state.inpValue===' '){
            console.log(1);
            return;
        }
        this.setState({
            todos: [
                {
                    title: this.state.inpValue,
                    done: false
                },
                ...this.state.todos
            ]
        })
        this.setState({
            inpValue:''
        })
    }
    delTodo=(idx)=>{
        this.setState({
            todos: this.state.todos.filter((item,index)=>index!=idx)
        });
    }
    toggle = (index)=>{
            let newTodos = JSON.parse(JSON.stringify(this.state.todos))
            newTodos[index].done = !newTodos[index].done;
            this.setState({
                todos: newTodos
            })
        }
    renderTodos = (done)=>{
        return this.state.todos.map((todo,idx)=>{
            if(done==todo.done){
                return <li>
                    <input onClick={()=>this.toggle(idx)} checked={done} type="checkbox"/>
                    <span dangerouslySetInnerHTML={{__html:todo.title}}></span>
                    <button 
                        onClick={()=>this.delTodo(idx)}
                    >
                        删除
                    </button>
                </li>
            }
        })
    }
    render(){
        const{todos,inpValue}=this.state;
        let arr1=todos.filter(item=>!item.done);
        return(
            <div className='box'>
                <label htmlFor='inp'>todolist</label>
                <Input inpValue={this.state.inpValue} handleChange={this.handleChange} addTodo={this.addTodo}/>
                <button onClick={this.addTodo}>添加</button>
                {/* <button onClick={this.addTodo}>添加</button> */}
                <List renderTodos={this.renderTodos}></List>
            </div>
        )
    }

}
export default Todolist;