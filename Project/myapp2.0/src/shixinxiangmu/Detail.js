import React ,{Component}from 'react'
import touxiang from './tupian/touxiang.png'
import './detail.css'
import xing from './tupian/xing.png'
import {guanzhu} from './action/attentionaction'
import {shoucang} from'./action/shoucangaction'
import {myself} from './action/myselfaction'
import { connect } from 'react-redux'
import { home } from './action/homeaction'
import {commend} from './action/commendaction'
import {goodthingsrecommend} from'./action/goodthingsrecaction'
class Detail extends Component{
    constructor(props){
        super(props);
        this.schandleClick=this.schandleClick.bind(this);
        this.gzhandleClick=this.gzhandleClick.bind(this);
        if(this.props.location.state.from=='guanzhu'){
            this.props.dispatch(guanzhu());
        }else if(this.props.location.state.from=='shoucang'){
            this.props.dispatch(shoucang());
        }else if(this.props.location.state.from=='myself'){
            this.props.dispatch(myself());
        }else if(this.props.location.state.from=='home'){
            this.props.dispatch(home());
        }else if(this.props.location.state.from =='commend'){
            this.props.dispatch(commend())
        }else if(this.props.location.state.from =='goodthingsrecommend'){
            this.props.dispatch(goodthingsrecommend())
        }
        this.state={
            count:'',
            sc:'',
            gz:''
        }
        //是否已关注
        let iffollowdata={
            textusername:this.props.location.state.textusername,
            username:sessionStorage.getItem('username')
        }
        fetch('http://localhost:1234/iffollow',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(iffollowdata)
            }).then(res=>res.json())
            .then(res=>{
                sessionStorage.setItem('isgz',res.status);
                if(sessionStorage.getItem('isgz')=='false'){
                    console.log('未关注');
                    this.setState({
                        gz:'关注'
                    })
                }else{
                    this.setState({
                        gz:'已关注'
                    })
                }
                console.log('123123follow:',res,'123123follow:',sessionStorage.getItem('isgz'),);
            })
            //是否收藏
        let data = {
            username:sessionStorage.getItem('username'),
            textid:this.props.location.state.id
        }
        fetch('http://localhost:1234/ifsave',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
            .then(res=>{
                sessionStorage.setItem('issc',res.status);
                this.setState({
                    sc:sessionStorage.getItem('issc'),
                })
                console.log('123123:',res,'123123:',sessionStorage.getItem('issc'),);
            })
        var number=this.props.location.state.scnumber;
        console.log(number);
        this.state.count=number;
    }
     schandleClick(){
        if(this.state.sc=='false'){
            console.log('zhixing')
            var newCount=this.state.count+1;
            this.setState({
                count:newCount,
            })
            let data ={
                username:sessionStorage.getItem('username'),
                textid:this.props.location.state.id
            }
           console.log(data);
            fetch('http://localhost:1234/addmysave',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
            .then(res=>{
                this.state.sc='true';
                console.log(this.state.sc);
                sessionStorage.setItem('issc',this.state.sc);
                console.log(res);
            })
        }else{
            let data = {
                username:sessionStorage.getItem('username'),
                textid:this.props.location.state.id
            }
            fetch('http://localhost:1234/deletemysave',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
            .then(res=>{
                if(this.props.count<=0){
                    console.log('000');
                    this.setState({
                        count:0,
                    })
                }else{
                    var newCount=this.state.count-1;
                    this.setState({
                        count:newCount,
                    })
                }
                this.state.sc='false'
                console.log(this.state.sc);
                sessionStorage.setItem('issc',this.state.sc);
                console.log(res);
            })
        }
    }
    gzhandleClick(){
        if(this.state.gz=='关注'){
            console.log('123123123123123')
            let data ={
                username:this.props.location.state.textusername,
                followuser:sessionStorage.getItem('username')
            }
           console.log(data);
            fetch('http://localhost:1234/addmyfollows',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
            .then(res=>{
                // this.state.gz='已关注';
                this.setState({
                    gz:'已关注'
                })
                console.log(this.state.gz);
                sessionStorage.setItem('isgz',this.state.gz);
                console.log(res);
            })
        }else{
            let data = {
                username:this.props.location.state.textusername,
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
                // this.state.gz='关注'
                this.setState({
                    gz:'关注'
                })
                console.log(this.state.gz);
                sessionStorage.setItem('isgz',this.state.gz);
                console.log(res);
            })
        }
    }
    render(props){
        console.log('guanzhu:',this.props.content);
        console.log(this.props.location.state.from);
        var from =this.props.location.state.from;
        var type=this.props.location.state.type;
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
                                    <button class="attention" onClick={this.gzhandleClick}>已关注</button>
                                </div>
                                <div class="article">
                                    <p class="wz">{this.props.content[index].text}</p>
                                </div>
                                <div class="bottomdiv">
                                    <div class="time">{this.props.content[index].ctime.substring(0,10)+" "+this.props.content[index].ctime.substring(11,16)}</div>
                                    <div class="shoucang">
                                        <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                        <div class='shoucang-number'>{this.state.count}</div>
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
                                    <button class="attention" onClick={this.gzhandleClick}>{this.state.gz}</button>
                                </div>
                                <div class="article">
                                    <p class="wz">{this.props.shoucang[index].text}</p>
                                </div>
                                <div class="bottomdiv">
                                    <div class="time">{this.props.shoucang[index].ctime.substring(0,10)+" "+this.props.shoucang[index].ctime.substring(11,16)}</div>
                                    <div class="shoucang">
                                        <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                        <div class='shoucang-number'>{this.state.count}</div>
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
                                    <button class="attention" onClick={this.gzhandleClick}>关注</button>
                                </div>
                                <div class="article">
                                    <p class="wz">{this.props.getmytext[index].text}</p>
                                </div>
                                <div class="bottomdiv">
                                    <div class="time">{this.props.getmytext[index].ctime.substring(0,10)+" "+this.props.getmytext[index].ctime.substring(11,16)}</div>
                                    <div class="shoucang">
                                        <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                        <div class='shoucang-number'>{this.props.getmytext[index].savenumber}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    })}
                </div>
            )
            case'home':
               switch(type){
                   case'newtext':
                        return(
                            <div class="de-container">
                                <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                                {this.props.newtext.map((item,index)=>{
                                    if(this.props.newtext[index].textid==this.props.location.state.id){
                                        return(
                                            <div class="de-detail">
                                            <div class="wx-title">{this.props.newtext[index].title}</div>
                                            <div class="tou">
                                                <img src={touxiang} class="touxiang"/>
                                                <span class="username">{this.props.newtext[index].username}</span>
                                                <button class="attention" onClick={this.gzhandleClick}>关注</button>
                                            </div>
                                            <div class="article">
                                                <p class="wz" dangerouslySetInnerHTML={{__html:this.props.newtext[index].text}}></p>
                                            </div>
                                            <div class="bottomdiv">
                                                <div class="time">{this.props.newtext[index].ctime.substring(0,10)+" "+this.props.newtext[index].ctime.substring(11,16)}</div>
                                                <div class="shoucang">
                                                    <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                                    <div class='shoucang-number'>{this.props.newtext[index].savenumber}</div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    case'react':
                        return(
                            <div class="de-container">
                                <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                                {this.props.react.map((item,index)=>{
                                    if(this.props.react[index].textid==this.props.location.state.id){
                                        return(
                                            <div class="de-detail">
                                            <div class="wx-title">{this.props.react[index].title}</div>
                                            <div class="tou">
                                                <img src={touxiang} class="touxiang"/>
                                                <span class="username">{this.props.react[index].username}</span>
                                                <button class="attention" onClick={this.gzhandleClick}>关注</button>
                                            </div>
                                            <div class="article">
                                                <p class="wz">{this.props.react[index].text}</p>
                                            </div>
                                            <div class="bottomdiv">
                                                <div class="time">{this.props.react[index].ctime.substring(0,10)+" "+this.props.react[index].ctime.substring(11,16)}</div>
                                                <div class="shoucang">
                                                    <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                                    <div class='shoucang-number'>{this.props.react[index].savenumber}</div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    case"js":
                        return(
                            <div class="de-container">
                                <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                                {this.props.js.map((item,index)=>{
                                    if(this.props.js[index].textid==this.props.location.state.id){
                                        return(
                                            <div class="de-detail">
                                            <div class="wx-title">{this.props.js[index].title}</div>
                                            <div class="tou">
                                                <img src={touxiang} class="touxiang"/>
                                                <span class="username">{this.props.js[index].username}</span>
                                                <button class="attention" onClick={this.gzhandleClick}>关注</button>
                                            </div>
                                            <div class="article">
                                                <p class="wz" dangerouslySetInnerHTML={{__html:this.props.js[index].text}}></p>
                                            </div>
                                            <div class="bottomdiv">
                                                <div class="time">{this.props.js[index].ctime.substring(0,10)+" "+this.props.js[index].ctime.substring(11,16)}</div>
                                                <div class="shoucang">
                                                    <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                                    <div class='shoucang-number'>{this.props.js[index].savenumber}</div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    case"css":
                        return(
                            <div class="de-container">
                                <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                                {this.props.css.map((item,index)=>{
                                    if(this.props.css[index].textid==this.props.location.state.id){
                                        return(
                                            <div class="de-detail">
                                            <div class="wx-title">{this.props.css[index].title}</div>
                                            <div class="tou">
                                                <img src={touxiang} class="touxiang"/>
                                                <span class="username">{this.props.css[index].username}</span>
                                                <button class="attention" onClick={this.gzhandleClick}>关注</button>
                                            </div>
                                            <div class="article">
                                                <p class="wz">{this.props.css[index].text}</p>
                                            </div>
                                            <div class="bottomdiv">
                                                <div class="time">{this.props.css[index].ctime.substring(0,10)+" "+this.props.css[index].ctime.substring(11,16)}</div>
                                                <div class="shoucang">
                                                    <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                                    <div class='shoucang-number'>{this.props.css[index].savenumber}</div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    }
                                })}
                            </div>
                        )
               }
            case'commend':
            return(
                <div class="de-container">
                    <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                    {this.props.commend.map((item,index)=>{
                        if(this.props.commend[index].textid==this.props.location.state.id){
                            return(
                                <div class="de-detail">
                                <div class="wx-title">{this.props.commend[index].title}</div>
                                <div class="tou">
                                    <img src={touxiang} class="touxiang"/>
                                    <span class="username">{this.props.commend[index].username}</span>
                                    <button class="attention" onClick={this.gzhandleClick}>关注</button>
                                </div>
                                <div class="article">
                                    <p class="wz">{this.props.commend[index].text}</p>
                                </div>
                                <div class="bottomdiv">
                                    <div class="time">{this.props.commend[index].ctime.substring(0,10)+" "+this.props.commend[index].ctime.substring(11,16)}</div>
                                    <div class="shoucang">
                                        <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                        <div class='shoucang-number'>{this.props.commend[index].savenumber}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    })}
                </div>
            )
            case'goodthingsrecommend':
            return(
                <div class="de-container">
                    <span class='biao' onClick={()=>this.props.history.goBack()}>﹤</span>
                    {this.props.goodthingsrecommend.map((item,index)=>{
                        if(this.props.goodthingsrecommend[index].textid==this.props.location.state.id){
                            return(
                                <div class="de-detail">
                                <div class="wx-title">{this.props.goodthingsrecommend[index].title}</div>
                                <div class="tou">
                                    <img src={touxiang} class="touxiang"/>
                                    <span class="username">{this.props.goodthingsrecommend[index].username}</span>
                                    <button class="attention" onClick={this.gzhandleClick} >关注</button>
                                </div>
                                <div class="article">
                                    <p class="wz">{this.props.goodthingsrecommend[index].text}</p>
                                </div>
                                <div class="bottomdiv">
                                    <div class="time">{this.props.goodthingsrecommend[index].ctime.substring(0,10)+" "+this.props.goodthingsrecommend[index].ctime.substring(11,16)}</div>
                                    <div class="shoucang">
                                        <img src={xing} class="shoucang-img" onClick={this.schandleClick}/>
                                        <div class='shoucang-number'>{this.props.goodthingsrecommend[index].savenumber}</div>
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
    getmytext:state.myselfreducer.getmytext,
    newtext:state.homereducer.newtext,
    js:state.homereducer.js,
    react:state.homereducer.react,
    html:state.homereducer.html,
    css:state.homereducer.css,
    commend:state.commendreducer.commend,
    goodthingsrecommend:state.goodthingsrecommendreducer.goodthingsrecommend
    
})

export default connect(mapStateToProps)(Detail);