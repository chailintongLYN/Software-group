import React from 'react'
import {connect} from 'react-redux'
const Todos = (props) => {

    return (
        <div>
            {
                props.mydata.map((item,idx)=>(
                    <li key={idx}>
                        {item}
                        <button
                            onClick={()=>{
                                props.dispatch({
                                    type: "DEL_TODO",
                                    index: idx
                                })
                            }}
                        >删除</button>
                    </li>
                ))
            }
            <button 
                onClick={()=>props.dispatch({
                    type:"add_todo",
                    value:'100000'
                })}
            >添加</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        mydata:state.todolist
    }
}

export default connect(mapStateToProps)(Todos)
