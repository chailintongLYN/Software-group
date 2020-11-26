import React from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import Header from './pages/Header';
import routes from './router.config';
import {Button,TabBar} from 'antd-mobile'
import Mytab from './taobao/Mytab';
import Home from './taobao/Home';
import Cart from './taobao/Cart';
// 1、搜索框（点击跳转搜索页面，顶部是searchBar，
// 点取消，返回首页）
// 2、轮播图
// 3、商品列表（10个）（点击跳转商品详情页，
// 详情页写上面的图片和返回箭头，点返回箭头返回首页
// 和底部按钮（店铺、客服、收藏、加入购物车和立即购买）
// ）
// const App = ()=>{
// 	return <Router>
// 		<Switch>
// 			<Route exact path='/' component={Home} />
// 			<Route path='/cart' component={Cart} />
// 		</Switch>
// 		<Mytab />
// 	</Router>
// }
// export default App;

// 路由基本配置
// 路由传参(以及获取参数-props)
// 动态路由(/:page)
// js跳转
// 权限路由
// npm i antd-mobile --registry https://

function PrivateRoute({ component: Com, ...rest }) {
	return (
		<Route
			{ ...rest }
			render={ ({ location }) =>
				localStorage.getItem('userinfo')
					? <Com />
					: (
						<Redirect
							to={ {
								pathname: "/login",
								state: location
							} }
						/>
					)
			}
		/>
	);
}

const App = () => {
	return <Router>
		<Header />
		<Switch>
			{
				routes.map(({pri,...rest})=>{
					if(pri){
						return <PrivateRoute {...rest} />
					}
					return <Route {...rest} />
				})
			}
		</Switch>
	</Router>
}

export default App;

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