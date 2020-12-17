import React, {useState, useEffect,Component} from 'react'
import "./index.css"
import leftArrow from './Img/leftArrow.png'
import img from './Img/img.png'
import search from './Img/md-search.svg'
import runoob from './Img/runoob.jpg'
import mdn from './Img/mdn.png'
import jquery from './Img/jquery.gif'
import vue from './Img/Vue.jpg'
import webpack from './Img/webpack.jpg'
import echarts from './Img/echarts.jpg'
import animate from './Img/animate.css.png'
import nodejs from './Img/nodejs.jpg'
const Guangfangwd=(props)=>{  
    let [actIdx,setActIdx] = useState(0)
let data =[
    {
        img:runoob,
        name:"菜鸟教程",
        text:"基础前端学习课程",
        href:'https://www.runoob.com/'
    },
    {
        img:mdn,
        name:"MDN web docs",
        text:"我们是一个由开发者和作者组成的开源社区，目的是为了建设一个更美好的网络，不论品牌、浏览器或平台。任何人都可以参与，每个人的贡献都会让我们更强大。我们可以一起继续推动 Web 创新服务于更广泛的利益。我们和你一起在这里开始。",
        href:'https://developer.mozilla.org/zh-CN/  '
    },
    {
        img:jquery,
        name:"JQUERY",
        text:"jQuery 是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单。如果你是一个 jQuery 新手，我们建议你先到jQuery 学习中心历练历练。",
        href:'https://www.jquery123.com/   '
    },
    {
        img:vue,
        name:'Vue.js',
        text:'渐进式JavaScript框架',
        href:'https://cn.vuejs.org/v2/guide/installation.html  '
    },
    {
        img:webpack,
        name:'webpack',
        text:'webpack它是代码编译工具，有入口，出口、loader和插件。其天生就代码分割、模块化，webpack2.0中加入tree shaking，用来提取公共代码，去掉死亡代码。',
        href:'https://webpack.js.org/ '
    },
    {
        img:echarts,
        name:'ECHARTS',
        text:'ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。',
        href:'https://echarts.apache.org/zh/index.html'
    },
    {
        img:animate,
        name:'Animate.css',
        text:'动画可以极大地改善界面的UX，但重要的是要遵循一些准则，以免过度使用界面并恶化用户对Web事物的体验。遵循以下规则应提供一个良好的开端。',
        href:'https://animate.style/ '
    },
    {
        img:img,
        name:'React',
        text:'React 是一个用于构建用户界面的 JavaScript 库。',
        href:'https://react.docschina.org/'
    },
    {
        img:nodejs,
        name:'NODEJS',
        text:'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。'
    }

]
let clickFuc=(idx)=>{
    setActIdx(idx)
}
    return(
        <div className="wd">
               <div className="wd_header">
                    <img src={leftArrow} onClick={()=>props.history.goBack()}></img>
                    <div className='wd_header_text' >官方文档</div>
                </div> 
               <div className="wd_content">
                   {
                       data?.map((item,idx)=>{
                            return(
                                    <div kye={idx} className={`wd_list ${idx==actIdx?"wd_active":""}` } onClick={()=>window.location.href=item.href}>
                                        <div className="wd_list_1">
                                        </div>
                                        <div className="wd_list_2">
                                            <img src={item.img}/>
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