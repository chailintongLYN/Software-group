import {withRouter} from 'react-router-dom'
import React from 'react'
const Login=(props)=>{
    const login=()=>{
        // console.log(props.location.state)
        localStorage.setItem('userinfo','tom')
        props.history.replace(props.location.state)
    }
    return(
        
        <div>
            <button onClick={login}>登录</button>
        </div>
    )
}
export default withRouter(Login);
// export default Login;
