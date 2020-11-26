import React from 'react'
import Detailmytab from './Detailmytab'
import './detailshow.css'
const Detailshow1=(props)=>{
    return (
        <div class="dcontainer">
            <div class='navi-bar' onClick={()=>props.history.goBack()}>
                <botton class="back">
                    <span class='back-i'>＜</span>
                </botton>
            </div>
            <div class='con-img'>
                <img src='https://gw.alicdn.com/bao/uploaded/i1/TB1TYDhFVXXXXcGXVXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp'/>
            </div>

            <Detailmytab />
        </div>
    )
}
export default Detailshow1;