



 
// export default App;


//react-redux的todolist
// import React,{useState,useEffect} from 'react';
// import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
// import store from './ReduxDemo/store';
// import { Provider } from 'react-redux'
// import Todos from './ReduxDemo/Todos';
// import Input from './ReduxDemo/input';
// import Home from './ReduxDemo/Home'
// // redux react-redux
// // webpack
// // umi框架
// // Router（react-router）怎么实现的（源码）
// //action是更新状态唯一的途径，就是一个普通的对象，包含一个type属性
// const App = ()=>{
// 	return <Provider store={store}>
// 		<Router>
// 			<Todos/>
// 			<Home/>
// 			<Input/>
// 		</Router>
// 	</Provider>
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Login from './shixinxiangmu/Login'
import Home from './shixinxiangmu/Home'
import Search from './shixinxiangmu/Search'
import Logon from './shixinxiangmu/Logon'
import Loginn from './shixinxiangmu/pc/Loginn'
import Editor from "./shixinxiangmu/pc/Editor"

import JieQu from "./shixinxiangmu/JieQu"
import ShouChang from "./shixinxiangmu/ShouChang"
import MySelf from "./shixinxiangmu/MySelf"
const App=()=>{
	return(
		<Router>
			<Switch>
				<Route exact path='/' component={Login}/>
				<Route path='/home' component={Home}/>
				<Route path='/jiequ' component={JieQu}/>
				<Route path='/shouchang' component={ShouChang}/>
				<Route path='/myself' component={MySelf}/>
				<Route path='/search' component={Search}/>
				<Route path='/logon' component={Logon}/>
				<Route path='/loginn' component={Loginn}/>
				<Route path='/editor' component={Editor}/>
			</Switch>
		
		</Router>
	)
}
export default App

//作业
//第三次作业
// import React from 'react';
// import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
// import Header from './pages/myHeader';
// import routes from './router.config';
// import {Button,TabBar} from 'antd-mobile'
// import Home from './Taobao/Home';
// import Cart from './Taobao/Cart';
// import List from './Taobao/List';
// import Search from './Taobao/Search'
// import {store} from './Taobao/Store'
// import { Provider } from 'react-redux';
// import Login from './Taobao/Login';
// import Goods from './Taobao/Goods';

// // https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg
// const App = ()=>{
// 	return <Provider store={store}>
// 			<Router>
// 				<Switch>
// 					<Route exact path='/' component={Home} />
// 					<Route path='/cart' component={Cart} />
// 					<Route path='/list' component={List}/>
// 					<Route path='/search' component={Search}/>
// 					<Route path='/service' component={Login}/>
// 					<Route path='/goods' component={Goods}/>

// 					{/* <Route component={Home} /> */}
// 					<Route render={()=><Redirect to='/'/>} />
					
// 				</Switch>
// 			{/* <Mytab /> */}		
// 		</Router>
// 	</Provider>
	
// }
// const RouteWithSubRoutes=(props)=>{
// 	return <Route
// 	path={props.path}
// 	render={
// 		()=><props.component routes={props.routes}/>
// 	}/>
// }
// export default App;
// export {RouteWithSubRoutes};


// function PrivateRoute({ routes,component: Com, ...rest }) {
// 	return (
// 		<Route
// 			{ ...rest }
// 			render={ ({ location }) =>
// 				localStorage.getItem('userinfo')
// 					? <Com routes={routes}/>
// 					: (
// 						<Redirect
// 							to={ {
// 								pathname: "/login",
// 								state: location
// 							} }
// 						/>
// 					)
// 			}
// 		/>
// 	);
// }

//  const RouteWithSubRoute = (props)=>{
// 	if(props.pri){
// 		return <PrivateRoute {...props}/>
// 	}
// 	return <Route 
// 				path={props.path} 
// 				render={
// 					(pro)=><props.component {...pro} routes={props.routes}/>
// 				}
// 			/>
// }
// 1、搜索框（点击跳转搜索页面，顶部是searchBar，
// 点取消，返回首页）
// 2、轮播图
// 3、商品列表（10个）（点击跳转商品详情页，
// 详情页写上面的图片和返回箭头，点返回箭头返回首页
// 和底部按钮（店铺、客服、收藏、加入购物车和立即购买）
// ）

// 路由基本配置
// 路由传参(以及获取参数-props)
// 动态路由(/:page)
// js跳转
// 权限路由
// npm i antd-mobile --registry https://
// function Core(){
//     return <h2>Core</h2>;
// }
// function Guide(){
//     return <h2>Guide</h2>;
// }
// function Api(){
//     return <h2>Api</h2>;
// }
// function Hooks(){
//     return <h2>Hooks</h2>;
// }
//  function RouteWithSubRoutes(route,i){
// 	return (
// 		<Route key={i} path={route.path} 
// 			render={(props)=>{
// 				if(route.routes){
// 					return(
// 						<div>
// 							<Switch>
// 								{
// 									route.routes.map((routes,i)=>(<Route key={i} path={routes.path} component={routes.component}/>))
// 								}
// 								<Redirect to={route.routes[0].path}></Redirect>
// 							</Switch>
// 						</div>
// 					)
// 				}else{
// 					return (
// 						<div>
// 							<route.component props={props}></route.component>
// 						</div>
// 					)
// 				}
// 			}}
// 		/>
// 	)
// }

// function PrivateRoute({ component: Com, ...rest }) {
// 		return (
// 			<Route
// 				{ ...rest }
// 				render={ ({ location }) =>
// 					localStorage.getItem('userinfo')
// 						? <Com routes={routes}
// 						: (
// 							<Redirect
// 								to={ {
// 									pathname: "/login",
// 									state: location
// 								} }
// 							/>
// 						)
// 				}
// 			/>
// 		);
// 	}
//老师的代码：
// const RouteWithSubRoutes=(props)=>{
// 	if(props.pri){
// 		return <PrivateRoute {...props}/>
// 	}
// 	return <Route
// 	path={props.path}
// 	render={
// 		()=><props.component routes={props.routes}/>
// 	}
// }
// const App = () => {
// 	return <Router>
// 		<Header />
// 		<Switch>
// 			{
// 				routes.map(({pri,...rest})=>{
// 					if(pri){
// 						return <PrivateRoute {...rest} />
// 					}
// 					return <RouteWithSubRoutes {...rest}/>
// 				})
// 			}
// 		</Switch>
// 	</Router>
// }

// export default App;
// export {RouteWithSubRoutes}

// home组件这种配置方式会在
// Home组件的props内注入四个属性
// <Route exact path='/' component={ Home } />
// <PrivateRoute path='/doc' component={ Doc } /> 
// <Route path='/doc/:id' component={ Doc } /> 
// <PrivateRoute path='/tuto' component={ Tuto } />
// <PrivateRoute path='/blog' component={ Blog } />
// <Route path='/comm' component={ Comm } />
// <Route path='/login' component={ Login } /> 
// no-match 
// <Route component={()=><div>404</div>} /> 
// <Route path='*' component={ () => <div>404</div> } />