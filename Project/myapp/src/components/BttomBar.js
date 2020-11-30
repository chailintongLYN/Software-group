import React,{useState} from 'react'
import  "./BttomBar.css"
import bottom_btn1_active from "../Img/bottom_btn1_active.png"
import bottom_btn1 from  "../Img/bottom_btn1.png"

import bottom_btn2_active from "../Img/bottom_btn2_active.png"
import bottom_btn2 from  "../Img/bottom_btn2.png"

import bottom_btn3_active from "../Img/bottom_btn3_active.png"
import bottom_btn3 from  "../Img/bottom_btn3.png"

import bottom_btn4_active from "../Img/bottom_btn4_active.png"
import bottom_btn4 from  "../Img/bottom_btn4.png"
const BttomBar=(props)=>{
    let [activeIdx,setActiveIdx] = useState(1)
    let activeClick=(idx)=>{
        setActiveIdx(idx)
    }
    return(
        <div class="BttomBar"> 
         <div class="BttomBar_container"> 
            <div class="BttomBar_container_div" onClick={()=>activeClick(1)}> 
                <div class="BttomBar_container_div_img">
                    {activeIdx==1?
                    <img src={bottom_btn1_active}/>:
                    <img src={bottom_btn1}/>
                    }
                    
                </div>
                <div class="BttomBar_container_div_text"> 
                    发现
                </div>
            </div>
            <div class="BttomBar_container_div" onClick={()=>activeClick(2)}> 
                <div class="BttomBar_container_div_img">
                {activeIdx==2?
                    <img src={bottom_btn2_active}/>:
                    <img src={bottom_btn2}/>
                    }
                </div>
                <div class="BttomBar_container_div_text"> 
                    街区
                </div>
            </div>
            <div class="BttomBar_container_div" onClick={()=>activeClick(3)}> 
                <div class="BttomBar_container_div_img">
                {activeIdx==3?
                    <img src={bottom_btn3_active}/>:
                    <img src={bottom_btn3}/>
                    }
                </div>
                <div class="BttomBar_container_div_text"> 
                    收藏
                </div>
            </div>
            <div class="BttomBar_container_div" onClick={()=>activeClick(4)}> 
                <div class="BttomBar_container_div_img">
                {activeIdx==4?
                    <img src={bottom_btn4_active}/>:
                    <img src={bottom_btn4}/>
                    }
                </div>
                <div class="BttomBar_container_div_text"> 
                    我的
                </div>
            </div>
        </div>
        </div>
    )
}
export default BttomBar