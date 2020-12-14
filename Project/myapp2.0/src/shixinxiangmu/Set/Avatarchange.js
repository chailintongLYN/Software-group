import React ,{Component}from 'react'
import './avatarchange.css'
class Avatarchange extends Component{
    render(){
        return(
            <div className='avatar-container'>
                <div className='avatar-head'>
                    <div className='back' onClick={()=>this.props.history.goBack()}>﹤</div>
                    <div>修改头像</div>
                </div>
                <div className='avatar-kongbai'></div>
                <div className='now-avatar'><img src=''/></div>
                <button className='avatar-change'>修改头像</button>
            </div>
        )
    }
}
export default Avatarchange