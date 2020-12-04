import React ,{Component}from 'react'
import touxiang from './tupian/touxiang.png'
import './detail.css'
import shoucang from './tupian/shoucang.png'

class Detail extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            count:108,
            shoucang:false
        }
        console.log(this.state)
    }
    
    handleClick(){
        if(this.state.shoucang==false){
            var newCount=this.state.count+1;
            this.setState({
                count:newCount,
                shoucang:true
            })
            var textid =1;
            fetch('http://localhost:1234/addmysave',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(textid)
            }).then(res=>res.json())
            .then(res=>{
                console.log(res);
            })
        }else{
            var textid =1;
            var newCount=this.state.count-1;
            this.setState({
                count:newCount,
                shoucang:false
            })
            fetch('http://localhost:1234/deletemysave',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(textid)
            }).then(res=>res.json())
            .then(res=>{
                console.log(res);
            })
        }
    }
    render(props){
        return (
            <div class="de-container">
               <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
               <div class="de-detail">
                    <div class="wx-title">react-router-dom示例讲解（一）——基本使用</div>
                    <div class="tou">
                        <img src={touxiang} class="touxiang"/>
                        <span class="username">会飞的鱼</span>
                        <button class="attention" >关注</button>
                    </div>
                    <div class="article">
                        <p class="wz">Router作为App.js一个根组件，其中里面的Link组件申明了路由的跳转路径，Route组件申明了组件根据不同的路径，所展示的不同视图。
    然后就实现了不同的路径切换的时候，展示了不同的视图。
    但是这个示例的另一个难点就是Topics组件，在这个组件中，它自己会展示自己的子路由！！！
    我是这样进行Topics组件的子路由实现的：</p>
                    </div>
                    <div class="bottomdiv">
                        <div class="time">2020-12-4   14:33</div>
                        <div class="shoucang">
                            <img src={shoucang} class="shoucang-img" onClick={this.handleClick}/>
                            <div class='shoucang-number'>{this.state.count}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
}

export default Detail