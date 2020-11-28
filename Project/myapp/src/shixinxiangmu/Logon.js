import React, { Component } from "react";
let newinfo={
    username:"",
    password:""
}
class Logon extends Component{
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
            newinfo.username=e.target.value;
        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value,
            });
            newinfo.password=e.target.value;
            console.log(JSON.stringify(newinfo));
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
        fetch('/newdata', {
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
            }else{
              alert('注册失败')
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
            : "/login";
        // 登陆成功之后的跳转
        this.props.history.push(RedirectUrl);
    }
    render(props) {
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
                        <input type="submit" value="完成注册" class="complete"/>
                    </form>
                </div>
            </body>
        );
    }
}
export default Logon