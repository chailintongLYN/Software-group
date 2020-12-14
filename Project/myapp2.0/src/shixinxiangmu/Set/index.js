import React, {useState, useEffect,Component} from 'react'
import "./index.css"
import rightArrow from './Img/rightArrow.png'
import leftArrow from './Img/leftArrow.png'
import img from './Img/img.png'
import search from './Img/md-search.svg'


const Set=(props)=>{  
    return(
        <div className="set">
               <div className="set_header">
                    <img src={leftArrow} onClick={()=>window.location="/myself"}></img>
                    <div className="set_header_input_text">设置</div>
               </div> 
               <div className="set_content"  onClick={()=>window.location="/changepwd"}>
                  <div className="set_list set_list_start">
                      <div className="set_list_text">修改密码</div>
                    <img src={rightArrow}></img>
                  </div>
               </div>
               <div className="set_content"  onClick={()=>props.history.push('/avatarchange')}>
                  <div className="set_list " >
                      <div className="set_list_text">修改头像</div>
                    <img src={rightArrow}></img>
                  </div>
               </div>
               <div className="set_content"  onClick={()=>alert("xx")}>
                  <div className="set_list ">
                      <div className="set_list_text">数据缓存</div>
                    <img src={rightArrow}></img>
                  </div>
               </div>
               <div className="set_content"  onClick={()=>alert("xx")}>
                  <div className="set_list ">
                      <div className="set_list_text">分享软件</div>
                    <img src={rightArrow}></img>
                  </div>
               </div>
               <div className="set_content"  onClick={()=>alert("xx")}>
                  <div className="set_list set_list_end">
                      <div className="set_list_text">关于软件</div>
                    <img src={rightArrow}></img>
                  </div>
               </div>
               <div className="set_content_tc"  onClick={()=>alert("xx")}>
                 退出登录
               </div>
        </div>
    )
}

export default Set;