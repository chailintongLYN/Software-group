import React,{Component} from 'react'
import './loginn.css'
let loginfo={
  username:'',
  passwd:''
}
class Loginn extends Component{
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
        loginfo.username=e.target.value;
    } else if (e.target.name === "passwd") {
        this.setState({
            passwd: e.target.value,
        });
        loginfo.passwd=e.target.value;
        console.log(JSON.stringify(loginfo));
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
    fetch('http://localhost:1234/data', {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(loginfo)
      }).then(res => res.json()).catch(err => {
        alert(err.message)
      }).then(response => {
          console.log(loginfo)
        if(response.status === 'success'){
        //   location.href = '/login';
          console.log(response)
          // 保存信息到sessionStorage
          sessionStorage.setItem("username", username);
          // 登录成功后，设置redirectToReferrer为true;
          // this.setState({
          //     rediectToReferrer: true,
          // });
          // let RedirectUrl = this.props.location.state
          //     ? this.props.location.state.from.pathname
          //     : "/home";
          // // 登陆成功之后的跳转
          // this.props.history.push(RedirectUrl);
        }else{
          alert('用户名或密码错误')
        }
      });
}
render(props) {
    return (
        <body>
            <div class="pccontainer">
                {/* <div class="ll"></div> */}
                <form onSubmit={this.handleSumit}>
                    <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="请输入用户名"
                                value={this.state.username}
                                onChange={this.handleChange}
                                class="pcusername"
                            />
                    </div>
                    <div>
                            
                            <input
                                type="password"
                                name="passwd"
                                placeholder="请输入密码"
                                value={this.state.password}
                                onChange={this.handleChange}
                                class="pcpassword"
                            />
                    </div>
                    <span class='tishi'>若您没有账号，请先注册</span>
                    <a href='./editor.html'><button type="submit" value="登录">登录</button></a>
                    {/* <input type="submit" value="登录" class="denglu" /> */}
                    {/* <input type='botton' value="注册" class="zhuce" onClick={()=>this.props.history.push('/logon')}/> */}
                </form>
            </div>
        </body>
    );
  }
}
export default Loginn
