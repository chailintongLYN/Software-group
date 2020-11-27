
import React, { Component } from "react";
// import { Redirect } from "react-router-dom"; //重定向使用

import './login.css'
let loginfo={
    username:'',
    password:''
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSumit = this.handleSumit.bind(this);
    }
    // 处理用户名、密码的变化
    handleChange(e) {
        if (e.target.name === "username") {
            this.setState({
                username: e.target.value,
            });
            loginfo.username=e.target.value;
        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value,
            });
            loginfo.password=e.target.value;
            console.log(JSON.stringify(loginfo));
        }
        
    }
    // 提交登录表单
    async handleSumit(e) {
        e.preventDefault();
        console.log(e.target)
        const username = this.state.username;
        const password = this.state.password;
        if (username.length === 0 || password.length === 0) {
            alert("用户名或密码不能为空！");
            return;
        }
        fetch('/data', {
            method : 'POST',
            headers : {
              'content-type' : 'application/json'
            },
            body : JSON.stringify(loginfo)
          }).then(res => res.json()).catch(err => {
            alert(err.message)
          }).then(response => {
            if(response.status === 'success'){
            //   location.href = '/login';
              console.log(response)
            }else{
              alert('用户名或密码错误')
            }
          });
        // 保存信息到sessionStorage
        sessionStorage.setItem("username", username);
        // 登录成功后，设置redirectToReferrer为true;
        // this.setState({
        //     rediectToReferrer: true,
        // });
        let RedirectUrl = this.props.location.state
            ? this.props.location.state.from.pathname
            : "/";
        // 登陆成功之后的跳转
        this.props.history.push(RedirectUrl);
    }
    render() {
        return (
            <body>
                <div class="container">
                    {/* <div class="ll"></div> */}
                    <form onSubmit={this.handleSumit}>
                        <div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="请输入用户名"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    class="username"
                                />
                        </div>
                        <div>
                                
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="请输入密码"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    class="password"
                                />
                        </div>
                        <span class='tishi'>若您没有账号，请先注册</span>
                        <input type="submit" value="登录" class="denglu" />
                        <input type='botton' value="注册" class="zhuci"/>
                    </form>
                </div>
            </body>
        );
    }
}
export default Login;