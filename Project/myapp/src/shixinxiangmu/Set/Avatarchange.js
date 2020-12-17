import React ,{Component}from 'react'
import './avatarchange.css'
import {myself} from '../action/myselfaction'
import { connect } from 'react-redux'
class Avatarchange extends Component{
    constructor(props){
        super(props);
        this.handleImageUpload=this.handleImageUpload.bind(this);
        this.props.dispatch(myself())
    }
    handleImageUpload(event){
        const files = event.target.files;
        let formData = new FormData();
        formData.append('image',files[0])
        console.log(formData.get('image'));
        formData.append('username',sessionStorage.getItem('username'))
        console.log('username:',formData.get('username'));
        fetch('http://localhost:1234/uploaduserimg',{
            method:'POST',
            body:formData
        }).then(res=>res.json())
        .then(res=>{
            document.getElementsByTagName('img')[0].src = res
            console.log(res);
        })
    }
    
    render(){
        return(
            <div className='avatar-container'>
                <div className='avatar-head'>
                    <div className='back' onClick={()=>this.props.history.goBack()}>﹤</div>
                    <div>修改头像</div>
                </div>
                <div className='avatar-kongbai'></div>
                {this.props.fansandfllow.map((item,index)=>{
                    return(
                        <div className='now-avatar'><img src={this.props.fansandfllow[index].userimg}/></div>
                    )
                })}
                <input type='file' accept='image/*' id='fileUpload' onChange={(event)=>this.handleImageUpload(event)} className='avatar-change'/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    fansandfllow:state.myselfreducer.fansandfllow
    
})
export default connect(mapStateToProps)( Avatarchange)