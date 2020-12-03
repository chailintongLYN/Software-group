import React ,{Component}from 'react'
import touxiang from './tupian/touxiang.png'
import './detail.css'

const Detail=(props)=>{
    var guanzhu=false;
        return (
            <div class="de-container">
               <span class='biao' onClick={()=>props.history.goBack()}>﹤</span>
               <div class="de-detail">
                    <div class="wx-title">react-router-dom示例讲解（一）——基本使用</div>
                    <div class="tou">
                        <img src={touxiang} class="touxiang"/>
                        <span class="username">会飞的鱼</span>
                        <button class="attention" onClick={()=>{guanzhu=true}}>关注</button>
                    </div>
                    <div class="article">
                        <p class="wz">Router作为App.js一个根组件，其中里面的Link组件申明了路由的跳转路径，Route组件申明了组件根据不同的路径，所展示的不同视图。
    然后就实现了不同的路径切换的时候，展示了不同的视图。
    但是这个示例的另一个难点就是Topics组件，在这个组件中，它自己会展示自己的子路由！！！
    我是这样进行Topics组件的子路由实现的：</p>
                    </div>
                </div>
            </div>
        )
}
export default Detail