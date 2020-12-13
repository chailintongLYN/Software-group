import React, {useState, useEffect,Component} from 'react'
import { connect } from 'react-redux'

import "./index.css"
import BttomBar from '../../components/BttomBar'
import jq_header_logo from '../JieQuImg/header_logo.svg'
import avatr from '../JieQuImg/avatr.png'

import pinglun from '../JieQuImg/pinglun.png'
import share from '../JieQuImg/share.png'
import comment from '../JieQuImg/comment.png'
import hot from '../JieQuImg/hot.png'
import {guanzhu} from '../action/attentionaction' 
// import { connect } from 'react-redux'


class JieQu extends Component {
    constructor(props){
        super(props);
          console.log(4);
        
       this.props.dispatch(guanzhu())
       console.log(this.props.content);
    }

render(props){
     console.log(1);
     console.log(this.props.content)
    return (
        <div className="jq">
            <div className="jq_header">
                <div className="jq_header_title">
                    <div>关注</div>
                </div>
                <div className="jq_header_logo">
                    <img src={jq_header_logo}></img>
                </div>
            </div>
           
            <div className="jq_center">
                {this.props.content.map((item,index)=>{
                    return(
                        <div className="jq_content" onClick={()=>this.props.history.push('/detail',{from:'guanzhu',id:this.props.content[index].textid,scnumber:this.props.content[index].savenumber})}>
                            <div className="jq_content_header">
                                <img src={avatr}  className="jq_content_header_img"></img>
                                <div className="jq_content_header_text">
                                        <div className="jq_content_header_text_name">
                                            {this.props.content[index].username}
                                        </div>
                                        <div className="jq_content_header_text_time">
                                                {this.props.content[index].ctime.substring(0,10)+" "+this.props.content[index].ctime.substring(11,16)}
                                        </div>
                                </div>
                            </div>  
                            <div className="jq_content_center">
                                <div className="jq_content_center_text">
                                    {this.props.content[index].title}
                                </div> 
                                <div className="jq_content_center_img">
                                    <img src={pinglun}></img>
                                    <img src={pinglun}></img>
                                    <img src={pinglun}></img>
                                </div> 
                            </div> 
                            <div className="jq_content_foot">
                                <div  className="jq_content_foot_share">
                                #{this.props.content[index].type}
                                </div>
                                <div  className="jq_content_foot_hot">
                                    {/* <img src={hot}/> */}
                                    收藏<span>{this.props.content[index].savenumber}</span>
                                </div>
                            </div> 
                        </div>
                    )
                })}  
            </div>



            <div className="kongbai_bottom"></div>
            <BttomBar/>
        </div>
    )
 }
}
const mapStateToProps=(state)=>({
    content:state.guanzhureducer.content
    
})
export default connect(mapStateToProps)(JieQu);
// export default JieQu;