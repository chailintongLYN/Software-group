import React,{useState,useEffect,Component} from 'react'
import "./index.css"
import BttomBar from '../../components/BttomBar'
import img from '../ShoouChangImg/img.png'
import heart from '../ShoouChangImg/heart.png'
import remen1 from  "../HomeImg/remen1.png"
import remen2 from  "../HomeImg/remen2.png"
import remen3 from  "../HomeImg/remen3.png"
import dashen from  "../HomeImg/dashen.png"
import {shoucang} from '../action/shoucangaction'
import { connect } from 'react-redux'


class ShouChang extends Component{
    constructor(props){
        super(props);
        this.props.dispatch(shoucang())
    }
    
    render(props){
        console.log('shoucang:',this.props.shoucang);
        return (
        <div className="sc">
            <div className="sc_header">
                <img src={heart}/> 我的收藏
            </div>
            {this.props.shoucang.map((item,index)=>{
                return(
                    <div className="sc_container">
                    <div className="sc_list" onClick={()=>this.props.history.push('/detail',{from:'shoucang',id:this.props.shoucang[index].textid,scnumber:this.props.shoucang[index].savenumber,textusername:this.props.shoucang[index].username})}>
                        <img src={img} />
                        <div className="sc_list_text" >
                            <div className="sc_list_head">{this.props.shoucang[index].title}</div>
                            <div className="sc_list_foot">
                                <div className="sc_list_foot1">{this.props.shoucang[index].type}</div>
                                <div className="sc_list_foot2">{this.props.shoucang[index].ctime.substring(0,10)+" "+this.props.shoucang[index].ctime.substring(11,16)}</div>
                                <div className="sc_list_foot3">收藏 <span>{this.props.shoucang[index].savenumber}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        <div className="kongbai_bottom"></div>
        <BttomBar />
        </div>
        )
    }
    

}
const mapStateToProps=(state)=>({
    shoucang:state.shoucangreducer.shoucang
    
})
export default connect(mapStateToProps)(ShouChang)