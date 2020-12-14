import React, {useState, useEffect,Component} from 'react'
import "./index.css"
import leftArrow from './Img/leftArrow.png'
import img from './Img/img.png'
import search from './Img/md-search.svg'


const Guangfangwd=()=>{  
    let [actIdx,setActIdx] = useState(0)
let data =[
    {
        img:img,
        name:"react",
        text:"这是一个 React 文档及相关资源的概览页面。React 是一个用于构建用户界面的 JavaScript 库。你可以在首页或教程中学习什么是 React。States, located in the state of New York."
    },
    {
        img:search,

        name:"react1",
        text:"这是一个 React 文档及相关资源的概览页面。React 是一个用于构建用户界面的 JavaScript 库。你可以在首页或教程中学习什么是 React。States, located in the state of New York."
    },
    {
        img:leftArrow,

        name:"react2",
        text:"这是一个 React 文档及相关资源的概览页面。React 是一个用于构建用户界面的 JavaScript 库。你可以在首页或教程中学习什么是 React。States, located in the state of New York."
    },

]
let clickFuc=(idx)=>{
    setActIdx(idx)
}
    return(
        <div className="wd">
               <div className="wd_header">
                    <img src={leftArrow} onClick={()=>window.location="/home"}></img>
                    <div className="wd_header_input" onClick={()=>alert("去搜索页面")}>
                    <img src={search}></img>
                        <div className="wd_header_input_text">搜索官方文档</div>
                    </div>
               </div> 
               <div className="wd_content">
                   {
                       data?.map((item,idx)=>{
                            return(
                                <div kye={idx} className={`wd_list ${idx==actIdx?"wd_active":""}`} onClick={()=>clickFuc(idx)}>
                                <div className="wd_list_1">
                                </div>
                                <div className="wd_list_2">
                                    <img src={item.img}></img>
                                </div>
                                <div className="wd_list_3">
                                    <div  className="wd_list_3_0">{item.name}</div>
                                   <div  className="wd_list_3_1">{item.text}</div>
                                </div>
                              </div>
                            )
                       })

                   }
               </div>
        </div>
    )
}

export default Guangfangwd;