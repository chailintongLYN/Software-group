import React,{Component} from 'react'
import avatr from'../JieQuImg/avatr.png'
import './followers.css';
import { connect } from 'react-redux'
import {follow} from '../action/followersaction'
class Followers extends Component{
    constructor(props){
        super(props);
        this.props.dispatch(follow())
    }
    render(){
        return(
            <div class='followers-container'>
                <div class='header'>
                    <div className='back' onClick={()=>this.props.history.goBack()}> ﹤</div>
                    <div>我的关注</div>
                </div>
                <div class='center'>
                    {this.props.follow.map((item,index)=>{
                        return(
                            <div class='liebiao'>
                                <img src={this.props.follow[index].usernameimg} class='liebiao-touxiang'/>
                                <div class='liebiao-username'>{this.props.follow[index].username}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    follow:state.followersreducer.follow
    
})
export default connect(mapStateToProps)(Followers)