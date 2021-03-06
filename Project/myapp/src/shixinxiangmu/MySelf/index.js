import React,{useState,useEffect,Component} from 'react'
import "./index.css"
import BttomBar from '../../components/BttomBar'
import img1 from  "../MySelfImg/1.png"
import img2 from  "../MySelfImg/2.png"
import img3 from  "../MySelfImg/3.png"
import edit from  "../MySelfImg/edit.png"
import add from  "../MySelfImg/add.png"
import shezhi from  "../MySelfImg/shezhi.png"
import avatr_img from  "../MySelfImg/avatr.png"
import img from '../ShoouChangImg/img.png'
import { connect } from 'react-redux'
import {myself} from '../action/myselfaction'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

const alert = Modal.alert;

class MySelf extends Component{
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this);
        this.ismytextkong=this.ismytextkong.bind(this);
        this.props.dispatch(myself());
        console.log(this.props.fansandfllow);
        console.log(this.props.getmytext);
        this.state={
            textid:''
        }
    }
    // function name(params) {
        
    // }
    ismytextkong=()=>{
        if(this.props.getmytext==undefined){
            return(
                <div></div>
            )
        }else{
            return(
                this.props.getmytext.map((item,index)=>{
                    return(
                        <div class="mp-list" onClick={(e)=>{e.stopPropagation();this.props.history.push('/detail',{from:'myself',id:this.props.getmytext[index].textid,scnumber:this.props.getmytext[index].savenumber})}}>
                            <img src={this.props.getmytext[index].titleimg} className='mp_list_img'/>
                                <div className="mp-list-text">
                                    <div className="mp_list_title">{this.props.getmytext[index].title}</div>
                                    <div className="mp_list_foot">
                                        <div className="mp_list_type">{this.props.getmytext[index].type}</div>
                                        <div className="mp_list_time">{this.props.getmytext[index].ctime.substring(0,10)}</div>
                                        <div className="mp_list_shoucang">收藏 <span>{this.props.getmytext[index].savenumber}</span></div>
                                        
                                        <button className='mp_list_delete' 
                                        onClick={(e)=>{e.stopPropagation();alert('删除','是否确认删除？',[{text:'取消',onPress:()=>console.log('cancel')},{text:'确定',onPress:()=>this.delete(this.props.getmytext[index].textid)}]) }} >
                                            删除</button>
                                        
                                    </div>
                                </div>         
                        </div>
                    )
                })
            )
        }
    }
 delete(textid){
        console.log('textid:',textid);
        fetch('http://localhost:1234/deletetextdata',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(textid)
            }).then(res=>res.json())
            .then(res=>{
                console.log('删除:',res);
                this.setState({
                    textid:textid
                })
                console.log(res);
            })
            window.location.href=window.location.href;
    }
    render(){
        console.log(this.props.fansandfllow);
        console.log(this.props.getmytext);
        return (
            <div className="myse" id="myse">
                <div className="myse_bg" id="myse_bg"></div>
                <div className="myse_kongbai">
                    <div className="myse_shezhi">
                            <img src={shezhi} onClick={()=>this.props.history.push('/set')}/>
                    </div>
                </div>
                {this.props.fansandfllow.map((item,index)=>{
                    return(
                        <div className="myse_avatr">
                            <img src={this.props.fansandfllow[index].userimg}/>
                        </div>
                    )
                })}
                <div className="myse_name">
                {sessionStorage.getItem('username')}  
                </div>
                <div className="myse_gz_fs">
                    {this.props.fansandfllow.map((item,index)=>{
                        return(
                            <div className="myse_gz" onClick={()=>this.props.history.push('./followers')}>关注 <span style={{fontWeight:"bold"}}>{this.props.fansandfllow[index].followusernumber}</span></div>    
                        )
                    })}
                    {this.props.fansandfllow.map((item,index)=>{
                        return(
                            <div className="myse_fs" onClick={()=>this.props.history.push('./fans')}>粉丝 <span style={{fontWeight:"bold"}}>{this.props.fansandfllow[index].fansnumber}</span></div>    
                        )
                    })}
                </div>
                <div className="myse_project">
                    <div className="myse_project_head">我的作品</div>
                    <div className="myse_project_content">
                        {/* {this.props.getmytext=='undefined'?{}:
                        } */}
                        {/* <div  className="myse_project_list_add">
                            <img src={add}/>
                        </div> */}
                        {this.ismytextkong()}
                        <div className="kongbai_bottom"></div>
                    </div>
                </div>
                
                <BttomBar />
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    fansandfllow:state.myselfreducer.fansandfllow,
    getmytext:state.myselfreducer.getmytext
    
})

export default connect(mapStateToProps)(MySelf)