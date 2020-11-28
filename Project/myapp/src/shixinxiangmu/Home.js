import React from 'react'
const Home=(props)=>{
    return(
        <div>
            Home
            {/* 二级路由 */}
            <input type='button' value="某个触发登录的按钮" onClick={()=>props.history.push('/')}/>
        </div>
        
    )
}
export default Home