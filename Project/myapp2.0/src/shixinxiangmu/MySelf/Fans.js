import React,{Component} from 'react'
import avatr from'../JieQuImg/avatr.png'
import './followers.css';
import { connect } from 'react-redux'
import {fans} from '../action/fansaction'
class Fans extends Component{
    constructor(props){
        super(props);
        this.props.dispatch(fans())
    }
    render(){
        return(
            <div class='followers-container'>
                <div class='header'>
                    <div className='back' onClick={()=>this.props.history.goBack()}> ﹤</div>
                    <div>我的粉丝</div>
                </div>
                <div class='center'>
                    {this.props.fans.map((item,index)=>{
                        return(
                            <div class='liebiao'>
                                <img src={this.props.fans[index].followuserimg} class='liebiao-touxiang'/>
                                <div class='liebiao-username'>{this.props.fans[index].followuser}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    fans:state.fansreducer.fans
    
})
export default connect(mapStateToProps)(Fans)