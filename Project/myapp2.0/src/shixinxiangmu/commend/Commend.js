import React,{useState,useEffect,Component} from 'react'
// import "./index.css"
import BttomBar from '../../components/BttomBar'
import img from '../ShoouChangImg/img.png'
import heart from '../ShoouChangImg/heart.png'
// import remen1 from  "../HomeImg/remen1.png"
// import remen2 from  "../HomeImg/remen2.png"
// import remen3 from  "../HomeImg/remen3.png"
// import dashen from  "../HomeImg/dashen.png"
import {commend} from '../action/commendaction'
import { connect } from 'react-redux'


class Commend extends Component{
    constructor(props){
        super(props);
        this.props.dispatch(commend())
    }
    
    render(props){
        console.log('commend:',this.props.commend);
        return (
        <div className="sc">
            <div className="sc_header">
                <div className="back" onClick={()=>this.props.history.goBack()}>﹤</div>
                <div>新锐推荐</div>
            </div>
            {this.props.commend.map((item,index)=>{
                return(
                    <div className="sc_container">
                    <div className="sc_list" onClick={()=>this.props.history.push('/detail',{from:'commend',id:this.props.commend[index].textid})}>
                        <img src={img} />
                        <div className="sc_list_text" >
                            <div className="sc_list_head">{this.props.commend[index].title}</div>
                            <div className="sc_list_foot">
                                <div className="sc_list_foot1">{this.props.commend[index].type}</div>
                                <div className="sc_list_foot2">{this.props.commend[index].ctime.substring(0,10)+" "+this.props.commend[index].ctime.substring(11,16)}</div>
                                <div className="sc_list_foot3">收藏 <span>{this.props.commend[index].savenumber}</span></div>
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
    commend:state.commendreducer.commend
    
})
export default connect(mapStateToProps)(Commend)