import React,{useState,useEffect} from 'react'
import  "./Home.css"
import { Carousel, WingBlank } from 'antd-mobile';
import lunBoImg from  "./HomeImg/lunbo.jpg"
import tuijian1_btn from  "./HomeImg/tuijian1.png"
import tuijian2_btn from  "./HomeImg/tuijian2.png"
import tuijian3_btn from  "./HomeImg/tuijian3.png"
import tuijian4_btn from  "./HomeImg/tuijian4.png"
import BttomBar from '../components/BttomBar'
import Lunbotu from './Home-lunbotu'
import { Component } from 'react';
import { connect } from 'react-redux'
import {home} from './action/homeaction'
class Home extends Component{
    constructor(props){
        super(props);
        this.props.dispatch(home())
    }
    render(){
        return(
            <div className="home">
    
                <div className="home_head">
                    <div   className="home_headInput"  onClick={()=>this.props.history.push('/search')}>
                       <span className="home_headInput_search"></span> 专题搜索
                    </div>
                    <span className="head_btn">
                    </span>
                </div>
                <Lunbotu/>
    
                <div className="home_tuiJian">
                    <div className="home_tuijian_btn_container" onClick={()=>this.props.history.push('/commend')}>
                        <div className="home_tuijian_btn">
                            <img src={tuijian1_btn}/>
                        </div>
                        <div className="home_tuijian_text" >
                            新锐推荐
                        </div>
                    </div>
                    <div className="home_tuijian_btn_container">
                        <div className="home_tuijian_btn">
                            <img src={tuijian2_btn}/>
                        </div>
                        <div className="home_tuijian_text">
                        实战操作
                        </div>
                    </div>
                    <div className="home_tuijian_btn_container" onClick={()=>this.props.history.push('/goodthingsrecommend')}>
                        <div className="home_tuijian_btn">
                            <img src={tuijian4_btn}/>
                        </div>
                        <div className="home_tuijian_text">
                        好物推荐
                        </div>
                    </div>
                    <div className="home_tuijian_btn_container" onClick={()=>this.props.history.push("/guangfangwd")}>
                        <div className="home_tuijian_btn">
                            <img src={tuijian3_btn}/>
                        </div>
                        <div className="home_tuijian_text">
                        官方文档
                        </div>
                    </div>
                </div>
               
                <div className="home_remen">
                    <h2 className="home_remen_title">最新专贴</h2>
                    <div className="home_remen_container">
                        {this.props.newtext.map((item,index)=>{
                            return(
                                <div className="home_remen_container_div" onClick={()=>this.props.history.push('/detail',{from:'home',id:this.props.newtext[index].textid,type:'newtext',scnumber:this.props.newtext[index].savenumber,textusername:this.props.newtext[index].username},sessionStorage.setItem('textid:',this.props.newtext[index].textid))}>
                                    <div className="home_remen_container_div_img">
                                        <img src={this.props.newtext[index].titleimg} className='biao_img'/>
                                    </div>
                                    <div className="home_remen_container_div_text">
                                    {this.props.newtext[index].title}
                                    </div>
                                </div>
                            )
                        })}
                      
                    </div>
                </div>
    
                <div className="home_dashen home_remen">
                    <h2 className="home_remen_title">REACT</h2>
                    <div className="home_dashen_container">
                        {this.props.react.map((item,index)=>{
                            return(
                                <div className="home_dashen_container_div"  onClick={()=>this.props.history.push('/detail',{from:'home',id:this.props.react[index].textid,type:'react',textusername:this.props.react[index].username,scnumber:this.props.react[index].savenumber},sessionStorage.setItem('textid:',this.props.react[index].textid))}>
                                    <div className="home_dashen_container_div_img">
                                        <img src={this.props.react[index].titleimg} className='biao_img'/>
                                    </div>
                                    <div className="home_dashen_container_div_text">
                                    {this.props.react[index].title}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
    
    
                <div className="home_youzhi home_remen">
                    <h2 className="home_remen_title">JAVASCRIPT</h2>
                    <div className="home_remen_container">
                        {this.props.js.map((item,index)=>{
                            
                            return(
                                <div className="home_remen_container_div" onClick={()=>this.props.history.push('/detail',{from:'home',id:this.props.js[index].textid,type:'js',textusername:this.props.js[index].username,scnumber:this.props.js[index].savenumber},sessionStorage.setItem('textid:',this.props.js[index].textid))}>
                                <div className="home_remen_container_div_img">
                                    <img src={this.props.js[index].titleimg} className='biao_img'/>
                                </div>
                                <div className="home_remen_container_div_text">
                                {this.props.js[index].title}
                                </div>
                            </div>
                            )
                        })}
                        
                      
                    </div>
                </div>
    
    
                <div className="home_jingxuan home_remen">
                    <h2 className="home_remen_title">CSS</h2>
                    <div className="home_remen_container">
                       {this.props.css.map((item,index)=>{
                           return(
                            <div className="home_remen_container_div" onClick={()=>this.props.history.push('/detail',{from:'home',id:this.props.css[index].textid,type:'css',textusername:this.props.css[index].username,scnumber:this.props.js[index].savenumber},sessionStorage.setItem('textid:',this.props.css[index].textid))}>
                                <div className="home_remen_container_div_img">
                                    <img src={this.props.css[index].titleimg} className='biao_img'/>
                                </div>
                                <div className="home_remen_container_div_text">
                                {this.props.css[index].title}
                                </div>
                            </div>
                           )
                       })}
                    </div>
                </div>
                {/* 轮播图 */}
                {/* {this.props.lunbotu.map((item,index)=>{
                    
                })} */}
                <div className="kongbai_bottom"></div>
                <BttomBar />
            </div>
            
        )
    }
}
const mapStateToProps=(state)=>({
    newtext:state.homereducer.newtext,
    js:state.homereducer.js,
    react:state.homereducer.react,
    html:state.homereducer.html,
    css:state.homereducer.css,
    lunbotu:state.homereducer.lunbotu
    
})
export default connect(mapStateToProps)(Home)