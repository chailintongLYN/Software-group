import React, { Component } from "react";

import './login.css'
let newinfo={
    username:"",
    passwd:""
}
class Logon extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passwd: ""
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
            newinfo.username=e.target.value;
        } else if (e.target.name === "passwd") {
            this.setState({
                passwd: e.target.value,
            });
            newinfo.passwd=e.target.value;
            console.log(JSON.stringify(newinfo));
        }
        
    }
    // 提交登录表单
    async handleSumit(e) {
        e.preventDefault();
        console.log(e.target)
        const username = this.state.username;
        const passwd = this.state.passwd;
        if (username.length === 0 || passwd.length === 0) {
            alert("用户名或密码不能为空！");
            return;
        }
        fetch('http://localhost:1234/logon', {
            method : 'POST',
            headers : {
              'content-type' : 'application/json'
            },
            body : JSON.stringify(newinfo)
          }).then(res => res.json()).catch(err => {
            alert(err.message)
          }).then(response => {
            if(response.status === '注册成功'){
            //   location.href = '/login';
            alert("注册成功")
              console.log(response)
              // 保存信息到sessionStorage
              sessionStorage.setItem("username", username);
              // 登录成功后，设置redirectToReferrer为true;
              // this.setState({
              //     rediectToReferrer: true,
              // });
              let RedirectUrl = this.props.location.state
                  ? this.props.location.state.from.pathname
                  : "/login";
              // 登陆成功之后的跳转
              this.props.history.push(RedirectUrl);
            }else if(response.status === 'usernamefaild'){
                alert('用户名已存在')
            }
            else{
              alert('注册失败')
            }
          });
    }
    render(props) {
        return (
            <body>
                <div class="container">
                    {/* <div class="ll"></div> */}
                    <form onSubmit={this.handleSumit} class='biaodan1'>
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
                                    name="passwd"
                                    placeholder="请输入密码"
                                    value={this.state.passwd}
                                    onChange={this.handleChange}
                                    class="password"
                                />
                        </div>
                        <input type="submit" value="完成注册" class="zhuce" onClick={()=>this.props.history.push('/home')}/>
                        <input type="button" value="返回登录" class="denglu" onClick={()=>this.props.history.push('/')}/>
                    </form>
                </div>
            </body>
        );
    }
}
export default Logon