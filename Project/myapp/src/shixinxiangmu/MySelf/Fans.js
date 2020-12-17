import React,{Component} from 'react'
import avatr from'../JieQuImg/avatr.png'
import './followers.css';
import { connect } from 'react-redux'
import {fans} from '../action/fansaction'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

const alert = Modal.alert;
class Fans extends Component{
    constructor(props){
        super(props);
        this.deleteFans=this.deleteFans.bind(this);
        this.props.dispatch(fans())
    }
    deleteFans(username){
        let data = {
            username:sessionStorage.getItem('username'),
            followuser:username
        }
        fetch('http://localhost:1234/deletemyfansorfollows',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(res=>{
            console.log('删除粉丝:',res);
            console.log(res);
        })
        window.location.href=window.location.href;
    }
    render(){
        return(
            <div class='followers-container'>
                <div class='header'>
                    <div className='back' onClick={()=>this.props.history.goBack()}> ﹤</div>
                    <div>我的粉丝</div>
                </div>
                <div class='center'>
                    {this.props.fans.map((item,index)=>{
                        return(
                            <div class='liebiao'>
                                <img src={this.props.fans[index].followuserimg} class='liebiao-touxiang'/>
                                <div class='liebiao-username'>{this.props.fans[index].followuser}</div>
                                <button className='delete' onClick={()=>alert('删除粉丝','是否此删除粉丝',[{text:'取消',onPress:()=>console.log('cancel')},{text:'确定',onPress:()=>this.deleteFans(this.props.fans[index].followuser)}])}>删除粉丝</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    fans:state.fansreducer.fans
    
})
export default connect(mapStateToProps)(Fans)