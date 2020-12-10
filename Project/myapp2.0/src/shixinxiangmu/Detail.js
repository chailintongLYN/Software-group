import React ,{Component}from 'react'
import touxiang from './tupian/touxiang.png'
import './detail.css'
import xing from './tupian/xing.png'
import {guanzhu} from './action/attentionaction'
import {shoucang} from'./action/shoucangaction'
import {myself} from './action/myselfaction'
import { connect } from 'react-redux'
class Detail extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        if(this.props.location.state.from=='guanzhu'){
            this.props.dispatch(guanzhu());
        }else if(this.props.location.state.from=='shoucang'){
            this.props.dispatch(shoucang());
        }else if(this.props.location.state.from=='myself'){
            this.props.dispatch(myself());
        }
        {this.props.content.map((item,index)=>{
            if(this.props.content[index].textid==this.props.location.state.id){
                var number=this.props.content[index].savenumber;
                console.log(number);
                this.state={
                    count:number,
                    sc:false
                }
            }
        })}
        console.log(this.state)
        console.log(this.props.location.state);
    }
    handleClick(){
        if(this.state.sc==false){
            var newCount=this.state.count+1;
            this.setState({
                count:newCount,
                isshoucang:true
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
                sc:false
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
        console.log('guanzhu:',this.props.content);
        console.log(this.props.location.state.from);
        var from =this.props.location.state.from;
        switch(from){
            case'guanzhu':
            return(
                <div class="de-container">
                    <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                    {this.props.content.map((item,index)=>{
                        if(this.props.content[index].textid==this.props.location.state.id){
                            return(
                                <div class="de-detail">
                                <div class="wx-title">{this.props.content[index].title}</div>
                                <div class="tou">
                                    <img src={touxiang} class="touxiang"/>
                                    <span class="username">{this.props.content[index].username}</span>
                                    <button class="attention" >已关注</button>
                                </div>
                                <div class="article">
                                    <p class="wz">{this.props.content[index].text}</p>
                                </div>
                                <div class="bottomdiv">
                                    <div class="time">{this.props.content[index].ctime.substring(0,10)+" "+this.props.content[index].ctime.substring(11,16)}</div>
                                    <div class="shoucang">
                                        <img src={xing} class="shoucang-img" onClick={this.handleClick}/>
                                        <div class='shoucang-number'>{this.props.content[index].savenumber}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    })}
                </div>
            );
            case"shoucang":
            return(
                <div class="de-container">
                    <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                    {this.props.shoucang.map((item,index)=>{
                        if(this.props.shoucang[index].textid==this.props.location.state.id){
                            return(
                                <div class="de-detail">
                                <div class="wx-title">{this.props.shoucang[index].title}</div>
                                <div class="tou">
                                    <img src={touxiang} class="touxiang"/>
                                    <span class="username">{this.props.shoucang[index].username}</span>
                                    <button class="attention" >关注</button>
                                </div>
                                <div class="article">
                                    <p class="wz">{this.props.shoucang[index].text}</p>
                                </div>
                                <div class="bottomdiv">
                                    <div class="time">{this.props.shoucang[index].ctime.substring(0,10)+" "+this.props.shoucang[index].ctime.substring(11,16)}</div>
                                    <div class="shoucang">
                                        <img src={shoucang} class="shoucang-img" onClick={this.handleClick}/>
                                        <div class='shoucang-number'>{this.props.shoucang[index].savenumber}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    })}
                </div>
            )
            case'myself':
            return(
                <div class="de-container">
                    <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                    {this.props.getmytext.map((item,index)=>{
                        if(this.props.getmytext[index].textid==this.props.location.state.id){
                            return(
                                <div class="de-detail">
                                <div class="wx-title">{this.props.getmytext[index].title}</div>
                                <div class="tou">
                                    <img src={touxiang} class="touxiang"/>
                                    <span class="username">{this.props.getmytext[index].username}</span>
                                    <button class="attention" >关注</button>
                                </div>
                                <div class="article">
                                    <p class="wz">{this.props.getmytext[index].text}</p>
                                </div>
                                <div class="bottomdiv">
                                    <div class="time">{this.props.getmytext[index].ctime.substring(0,10)+" "+this.props.getmytext[index].ctime.substring(11,16)}</div>
                                    <div class="shoucang">
                                        <img src={shoucang} class="shoucang-img" onClick={this.handleClick}/>
                                        <div class='shoucang-number'>{this.props.getmytext[index].savenumber}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    })}
                </div>
            )
            
        }
    }
        
}
const mapStateToProps=(state)=>({
    content:state.guanzhureducer.content,
    shoucang:state.shoucangreducer.shoucang,
    getmytext:state.myselfreducer.getmytext
    
})

export default connect(mapStateToProps)(Detail);