import React, { Component } from 'react';

class Input extends Component {
    constructor(){
        super();
        this.state = {
            inpValue:''
        }
    }
    handleChange = (e)=>{
        this.setState({inpValue:e.target.value})
    }
    render() {
        return (
            <div>
                <label htmlFor="inp">todolist</label>
                <input 
                    id='inp'
                    value={this.state.inpValue} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <button onClick={()=>this.props.addTodo(this.state.inpValue)}>添加</button>
            </div>
        );
    }
}

export default Input;
// import React from 'react'

// const Input = (props) => {
//     return (
//             <div>
//                 <input 
//             id='inp'
//             // ref={inp=>this.input = inp}
//             inpValue={props.inpValue} 
//             type="text" 
//             onChange={props.handleChange}/>
//             {/* <button onClick={props.addTodo}>添加</button> */}
//             </div>
            
//     )
// }

// export default Input
