import React, { Component } from 'react';

class List extends Component{
  constructor(props,context){
    super(props,context);
    }
    render() {
        return(
            <div>
            <h2>正在进行</h2>
        <ul>
            {this.props.renderTodos(false)}
        </ul>
        <h2>已经完成</h2>
        <ul style={{color:3<2?'red':'green'}}>
            {this.props.renderTodos(true)}
        </ul>
        </div>
        )
    }
}
export default List;