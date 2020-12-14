import React, {useState, useEffect,Component} from 'react'
import {Button,  InputItem } from 'antd-mobile';
import "./index.css"
import leftArrow from './Img/leftArrow.png'

const Changepwd=()=>{  
    let [oldPwd,setOldPwd] = useState()
    let [newPwd1,setNewPwd1] = useState()
    let [newPwd2,setNewPwd2] = useState()
    let sure=(idx)=>{
        if(!oldPwd){
            alert("请输入旧密码")
        }else if(!newPwd1){
            alert("请输入新密码")
        }
        if(newPwd1!==newPwd2){
            alert("两次密码不相同")
        }
        return;
    }
    return(
        <div className="Changepwd">
              <div className="set_header">
                    <img src={leftArrow} onClick={()=>window.location="/set"}></img>
                    <div className="set_header_input_text">修改密码</div>
               </div> 
            <div className="Changepwd_list Changepwd_list_0">
            <InputItem
            type="password"
            placeholder="****"
            onChange={(val)=>setOldPwd(val)}
          >旧密码</InputItem>
            </div>
            <div className="Changepwd_list">
            <InputItem
            type="password"
            placeholder="****"
             onChange={(val)=>setNewPwd1(val)}
          >新密码</InputItem>
            </div>
            <div className="Changepwd_list">
            <InputItem
            type="password"
            placeholder="****"
             onChange={(val)=>setNewPwd2(val)}
          >再次输入</InputItem>
            </div>

              
    <Button  className="Changepwd_btn" type="warning" onClick={()=>sure()}>确定修改</Button>
        </div>
    )
}

export default Changepwd;