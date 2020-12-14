import React,{useState,useEffect,Component} from 'react'
import BttomBar from '../../components/BttomBar'
import img from '../ShoouChangImg/img.png'
import heart from '../ShoouChangImg/heart.png'
import {goodthingsrecommend} from '../action/goodthingsrecaction'
import { connect } from 'react-redux'
import './goodthingsrecommend.css'


class GoodThingsRecommend extends Component{
    constructor(props){
        super(props);
        this.props.dispatch(goodthingsrecommend())
    }
    
    render(props){
        console.log('goodthingsrecommend:',this.props.goodthingsrecommend);
        return (
        <div className="sc">
            <div className="sc_header">
                <img src={heart}/> 好物推荐
                <div className='goback' onClick={()=>this.props.history.goBack()}>﹤</div>
            </div>
            {this.props.goodthingsrecommend.map((item,index)=>{
                return(
                    <div className="sc_container">
                    <div className="sc_list" onClick={()=>this.props.history.push('/detail',{from:'goodthingsrecommend',id:this.props.goodthingsrecommend[index].textid,textusername:this.props.goodthingsrecommend[index].username,scnumber:this.props.goodthingsrecommend[index].savenumber})}>
                        <img src={img} />
                        <div className="sc_list_text" >
                            <div className="sc_list_head">{this.props.goodthingsrecommend[index].title}</div>
                            <div className="sc_list_foot">
                                <div className="sc_list_foot1">{this.props.goodthingsrecommend[index].type}</div>
                                <div className="sc_list_foot2">{this.props.goodthingsrecommend[index].ctime.substring(0,10)+" "+this.props.goodthingsrecommend[index].ctime.substring(11,16)}</div>
                                <div className="sc_list_foot3">收藏 <span>{this.props.goodthingsrecommend[index].savenumber}</span></div>
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
    goodthingsrecommend:state.goodthingsrecommendreducer.goodthingsrecommend
    
})
export default connect(mapStateToProps)(GoodThingsRecommend)