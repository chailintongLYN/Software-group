import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import './Home.css';
import Car from './Car'
import Cart from './Cart'
import Mytab from './Mytab'
import { ActivityIndicator } from 'antd-mobile'
import {Shuju} from './Actioncreator'

// function xianshi(props){
//     props.dispatch(Shuju());
// }
// window.onload=xianshi;
const Home=(props)=>{

    
    useEffect(() => {
        props.dispatch(Shuju())
    }, [])
    console.log(props.datalist)
    // if(props.datalist.length!=='undefined'){
    //     props.history.push('/login')
    // }
    return (
    <div class="container" >
        {/* 搜索框 */}
        <header class="head">
            <i class="tao iconfont icon-taobao1"></i>
            <div class='header-bd' >
                <a class="placeholder" onClick={()=>props.history.push('/cart')}>
                        <span class="text inconfont icon-taobaosousuo">寻找宝贝店铺</span>
                </a>
            </div>
        </header>
        {/* 轮播图 */}
        <div class='lunbotu'>
            <Car/>
        </div>
        {/* 商品 */}
        <div class='shangpin'>{
            props.datalist.map((item,index)=>{
                return(
                <div class='list' onClick={()=>props.history.push('/goods',{id:props.datalist[index].id,img:props.datalist[index].img})}> 
                    <img key={index} src={props.datalist[index].img}/>
                    <p class='p1'>{props.datalist[index].title}</p>
                    <p class='p2'><span class='span1'>¥</span>{props.datalist[index].price}<span class='span2'>666人已购买</span></p>
                </div>
            )
            })}
        </div>
        
        <Mytab/>
    </div>
    )
}
const mapStateToProps=(state)=>({
    datalist:state.homereducer.datalist
})
export default connect(mapStateToProps)(Home);
//import img from '../assets/banner.jpg'
// iconfont.cn官网搜选图标，加入购物车
// 点击页面右上角购物车，将图标添加进项目（没有项目就新建）
// 点击“下载到本地”
// 解压压缩包，全部复制到项目public文件夹下，
// 在index.html中通过link引入iconfont.css
// 使用时，<i className='iconfont icon-具体名字'></i>


// export default withRouter(Home);
//安装：node（npm） npm i(install) packageName
//npm react-router-dom 
//npm i antd-mobile
//npm i redux react-redux redux-thunk

//(npx)create-react-app proName
//组件化（
// UI组件：只展示结构，展示用的（通过属性props传递数据）
// 智能组件：状态（state、setstate）、生命周期（componentDidMount,render(更新阶段））
// ）
//hooks:函数组建内，也可以声明状态，更新状态（useState）
//套到组件的最外层import {BrowerRouter as Route,Link}from 'react-router-dom"和import {HashRouter}from“react——router-dom”
{/* <Router>关于路由
    //在每一页都显示，可以这样写
    <div>title</div>
    //对于切换的,进行匹配
    <Switch>
        <Route exact path='/' component={}/>
        <Route path='/doc' component={Doc}/>
        <Route path='doc：id' component={Doc1}/>
        <Route path='/' component={NOtFound}/>
    </Switch>
    
</Router> */}
//第二次作业在pages文件夹里
// const Home=(props)=>{
//     return(
//         <div style={{textAlign:'center'}}>
//             <h2>React</h2>
//             <p>用户构建用户界面的 JavaScript库</p>
//             <div>
//             <button onClick={
//                     ()=>props.history.push('/doc')
//                 }>快速开始</button>
//                 <button onClick={
//                     ()=>props.history.push('/tuto')
//                 }>入门教程</button>
//             </div>
            
//         </div>
//     )
// }
