import React,{Component} from 'react'
import avatr from'../JieQuImg/avatr.png'
import './followers.css';
import { connect } from 'react-redux'
import {follow} from '../action/followersaction'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

const alert = Modal.alert;
class Followers extends Component{
    constructor(props){
        super(props);
        this.deletefollower=this.deletefollower.bind(this);
        this.props.dispatch(follow())
    }
    isfollowerkong=()=>{
        if(this.props.follow==undefined){
            return(
                        <div class='liebiao'></div>
            )
        }else{
            return(
                this.props.follow.map((item,index)=>{
                    return(
                        <div class='liebiao'>
                            <img src={this.props.follow[index].usernameimg} class='liebiao-touxiang'/>
                            <div class='liebiao-username'>{this.props.follow[index].username}</div>
                            <button className='delete' onClick={()=>alert('取消关注','是否取消关注',[{text:'取消',onPress:()=>console.log('cancel')},{text:'确定',onPress:()=>this.deletefollower(this.props.follow[index].username)}])}>取消关注</button>
                        </div>
                    )
                })
            )
        }
    }
    deletefollower(username){
        let data = {
            username:username,
            followuser:sessionStorage.getItem('username')
        }
        fetch('http://localhost:1234/deletemyfansorfollows',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(res=>{
            console.log('删除关注:',res);
            console.log(res);
        })
        window.location.href=window.location.href;
        
    }
    render(){
        return(
            <div class='followers-container'>
                <div class='header'>
                    <div className='back' onClick={()=>this.props.history.goBack()}> ﹤</div>
                    <div>我的关注</div>
                </div>
                <div class='center'>
                    {this.isfollowerkong()}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    follow:state.followersreducer.follow
    
})
export default connect(mapStateToProps)(Followers)