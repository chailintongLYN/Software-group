import React from 'react'
import {connect} from 'react-redux'
const Input = (props) => {
    return (
        <div>
            <input 
                onKeyDown={(e)=>{
                    if(e.keyCode==13){
                        props.dispatch({
                            type:'ADD_TODO',
                            value:e.target.value
                        })

                    }
                }} 
                type="text"
            />
        </div>
    )
}

export default connect()(Input)
