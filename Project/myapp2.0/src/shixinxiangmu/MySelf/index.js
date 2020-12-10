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

class MySelf extends Component{
    constructor(props){
        super(props);
        this.props.dispatch(myself());
        console.log(this.props.fansandfllow);
        console.log(this.props.getmytext);
    }
    
    render(){
        console.log(this.props.fansandfllow);
        console.log(this.props.getmytext);
        return (
            <div className="myse" id="myse">
                <div className="myse_bg" id="myse_bg"></div>
                <div className="myse_kongbai">
                    <div className="myse_shezhi">
                            <img src={shezhi} onClick={()=>alert("进入设置页面")}/>
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
                {/* <img src={edit} onClick={()=>alert("进入编辑页面")} /> */}
                </div>
                <div className="myse_gz_fs">
                    {this.props.fansandfllow.map((item,index)=>{
                        return(
                            <div className="myse_gz">关注 <span style={{fontWeight:"bold"}}>{this.props.fansandfllow[index].fansnumber}</span></div>    
                        )
                    })}
                    {this.props.fansandfllow.map((item,index)=>{
                        return(
                            <div className="myse_fs">粉丝 <span style={{fontWeight:"bold"}}>{this.props.fansandfllow[index].followusernumber}</span></div>    
                        )
                    })}
                </div>
                <div className="myse_project">
                    <div className="myse_project_head">我的作品</div>
                    <div className="myse_project_content">
                        {this.props.getmytext.map((item,index)=>{
                            return(
                                <div class="mp-list" onClick={()=>this.props.history.push('/detail',{from:'myself',id:this.props.getmytext[index].textid})}>
                                    <img src={this.props.getmytext[index].titleimg} className='mp_list_img'/>
                                        <div className="mp-list-text">
                                            <div className="mp_list_title">{this.props.getmytext[index].title}</div>
                                            <div className="mp_list_foot">
                                                <div className="mp_list_type">{this.props.getmytext[index].type}</div>
                                                <div className="mp_list_time">{this.props.getmytext[index].ctime.substring(0,10)+""+this.props.getmytext[index].ctime.substring(11,16)}</div>
                                                <div className="mp_list_shoucang">收藏 <span>{this.props.getmytext[index].savenumber}</span></div>
                                            </div>
                                        </div>         
                                </div>
                            )
                        })}
                        {/* <div  className="myse_project_list_add">
                            <img src={add}/>
                        </div> */}
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