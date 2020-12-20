
import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Login from './shixinxiangmu/Login'
import Home from './shixinxiangmu/Home'
import Search from './shixinxiangmu/Search'
import Logon from './shixinxiangmu/Logon'
// import Loginn from './shixinxiangmu/pc/Loginn'
// import Editor from "./shixinxiangmu/pc/Editor"
import Detail from './shixinxiangmu/Detail'
import Liebiao from './shixinxiangmu/guanzhu&&fans/index'
import store from './shixinxiangmu/store'
import { Provider } from 'react-redux';
import Followers from './shixinxiangmu/MySelf/Followers'
import Fans from './shixinxiangmu/MySelf/Fans'
import Commend from './shixinxiangmu/commend/Commend'
import JieQu from "./shixinxiangmu/JieQu"
import ShouChang from "./shixinxiangmu/ShouChang"
import MySelf from "./shixinxiangmu/MySelf"
import GoodThingsRecommend from './shixinxiangmu/goodthingsrecommend/Goodthrecommend'
import Guangfangwd from "./shixinxiangmu/Guangfangwd"
import Set from "./shixinxiangmu/Set"
import Changepwd from "./shixinxiangmu/Changepwd"
import Avatarchange from './shixinxiangmu/Set/Avatarchange'
const App=()=>{
	return(
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path='/' component={Login}/>
					<Route path='/home' component={Home}/>
					<Route path='/jiequ' component={JieQu}/>
					<Route path='/shouchang' component={ShouChang}/>
					<Route path='/myself' component={MySelf}/>
					<Route path='/search' component={Search}/>
					<Route path='/logon' component={Logon}/>
					{/* <Route path='/loginn' component={Loginn}/>
					<Route path='/editor' component={Editor}/> */}
					<Route path='/detail' component={Detail}/>
					<Route path='/liebiao' component={Liebiao}/>
					<Route path='/followers' component={Followers}/>
					<Route path='/fans' component={Fans}/>
					<Route path='/commend' component={Commend}/>
					<Route path='/goodthingsrecommend' component={GoodThingsRecommend}/>
					<Route path='/guangfangwd' component={Guangfangwd}/>
					<Route path='/set' component={Set}/>
					<Route path='/changepwd' component={Changepwd}/>
					<Route path='/avatarchange' component={Avatarchange}/>
				</Switch>
		
		</Router>
		</Provider>
	)
}
export default App