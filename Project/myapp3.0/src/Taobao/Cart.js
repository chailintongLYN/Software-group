import React,{useEffect} from 'react'
import Mytab from './Mytab'
import { connect } from 'react-redux'
import {Shuju} from './Actioncreator'
const Cart = (props) => {
    useEffect(() => {
        props.dispatch(Shuju())
    }, [])
    return (
        <div>
            
            props.shoucang.map((item,index)=>
            <li key={index}>{item}
            <button onClick={
                ()=>{
                    props.dispatch({
                        type: "DEL_TODO",
                        index: id
                    })
            }
            }>删除</button>></li>
            )
            
            <Mytab />
        </div>
    )
}
const mapStateToProps = (state)=>({
    shoucang:state.cartreducer,
    datalist:state.homereducer.datalist
})
export default connect(mapStateToProps)(Cart)