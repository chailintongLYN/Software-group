import React, {useState, useEffect,Component} from 'react'
import "./index.css"
import leftArrow from './Img/leftArrow.png'
import { Modal, Button, WhiteSpace, WingBlank, Toast ,InputItem} from 'antd-mobile';

const alert = Modal.alert;

var changeinfo={
    oldPwd:'',
    newPwd1:'',
    newPwd2:'',
    type:'number'
}
class Changepwd extends Component{  
    // let [oldPwd,setOldPwd] = useState()
    // let [newPwd1,setNewPwd1] = useState()
    // let [newPwd2,setNewPwd2] = useState()
    // let sure=(idx)=>{
    //     if(!oldPwd){
    //         alert("请输入旧密码")
    //     }else if(!newPwd1){
    //         alert("请输入新密码")
    //     }
    //     if(newPwd1!==newPwd2){
    //         alert("两次密码不相同")
    //     }
    //     return;
    // }
    constructor(props){
        super(props);
        this.state={
            oldPwd:'',
            newPwd1:'',
            newPwd2:'',
            type:'number'
        }
        this.oldPwd_handleChange=this.oldPwd_handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    //处理密码的变化
    async oldPwd_handleChange(oldPwd){
        // this.setState({
        //     oldPwd:oldPwd
        // });
        changeinfo.oldPwd=oldPwd
        // console.log(this.state);
        console.log(changeinfo)
        this.setState({
            oldPwd:changeinfo.oldPwd
        })
        console.log(this.state)
    }
    newPwd1_handleChange(newPwd1){
        
        changeinfo.newPwd1=newPwd1
        this.setState({
            newPwd1:changeinfo.newPwd1
        })
    }
    newPwd2_handleChange(newPwd2){
        changeinfo.newPwd2=newPwd2
        this.setState({
            newPwd2:changeinfo.newPwd2
        })
    }
    //提交修改
    async handleSubmit(){
        if(changeinfo.newPwd1===changeinfo.newPwd2){
            let data ={
                username:sessionStorage.getItem('username'),
                passwd:changeinfo.oldPwd,
                newpasswd:changeinfo.newPwd1
            }
            console.log(changeinfo);
            fetch('http://localhost:1234/changemypassword',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
            .then(res=>{
                console.log('验证密码:',res);
                if(res.status==='passwdfailed'){
                    alert('输入旧密码错误')
                }if(res.status==='success'){
                    alert('修改成功')
                    this.setState({
                        type:'password'
                    })
                }
                
            })
        }else{
            alert('新密码两次输入不一致');
            return;
        }

        
    }
    render(){
        return(
            <div className="Changepwd">
                  <div className="set_header">
                        <img src={leftArrow} onClick={()=>window.location="/set"}></img>
                        <div className="set_header_input_text">修改密码</div>
                   </div> 
                <div className="Changepwd_list Changepwd_list_0">
                    <InputItem
                    type={this.state.type}
                    placeholder="****"
                    name='oldPwd'
                    onChange={(oldPwd)=>this.oldPwd_handleChange(oldPwd)}
                >旧密码</InputItem>
                </div>
                <div className="Changepwd_list">
                    <InputItem
                    type={this.state.type}
                    placeholder="****"
                    name='newPwd1'
                    onChange={(newPwd1)=>this.newPwd1_handleChange(newPwd1)}
                >新密码</InputItem>
                </div>
                <div className="Changepwd_list">
                    <InputItem
                    type={this.state.type}
                    name='newPwd2'
                    placeholder="****"
                    onChange={(newPwd2)=>this.newPwd2_handleChange(newPwd2)}
                >再次输入</InputItem>
                </div>
    
                  
        <Button  className="Changepwd_btn" type="warning" onClick={this.handleSubmit}>确定修改</Button>
            </div>
        )
    }
}

export default Changepwd;