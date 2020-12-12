import React ,{Component}from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './search.css'
import {connect} from 'react-redux'
import img from './ShoouChangImg/img.png'


class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      zhuangtai:''
    }
  }
  render(){
    return (
      <div>
        <SearchBar  
          placeholder="最佳热帖"
          onSubmit={ (value) => {
            console.log(value)
            let data ={
              searchtype:'title',
              sevalue:value
            }
            fetch('http://localhost:1234/gettexts',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res => res.json())
            .then(res=>{
                
                
                this.state.zhuangtai = res.status
                console.log(this, res.status)
                this.props.dispatch({
                    type:'SEARCH',
                    search:res.results
                    
                })
                
            })
          }}
          // onClear={value => console.log(value, 'onClear')}
          // onFocus={() => console.log('onFocus')}
          // onBlur={() => console.log('onBlur')}
          // onCancel={() =>this.props.history.goBack()}
          showCancelButton
        />
        {this.renderninfo()}
        {/* <div class="bangdan">
          <p>热搜榜单</p>
        </div>
        <div class='list'>
          <ol>
            <li><a>阿里云新品发布会</a></li>
            <span><img src='./xiaohuomiao.png'/></span>
          </ol>
        </div> */}
      </div>
    );
  }
  renderninfo=()=>{
    if(this.state.zhuangtai==''){
      return(
        <div className='sc_container'></div>
      )
    }else if(this.state.zhuangtai=='failed'){
      return(
        <div className='sc'>
          <div className='sc_container'>暂无相关内容</div>
        </div>
      )
    }else if(this.state.zhuangtai=='success'){
      return(
        <div className='sc'>
          {this.props.search.map((item,index)=>{
              return(
                  <div className="sc_container">
                  <div className="sc_list" onClick={()=>this.props.history.push('/detail',{from:'search',id:this.props.search[index].textid})}>
                      <img src={img} />
                      <div className="sc_list_text" >
                          <div className="sc_list_head">{this.props.search[index].title}</div>
                          <div className="sc_list_foot">
                              <div className="sc_list_foot1">{this.props.search[index].type}</div>
                              <div className="sc_list_foot2">{this.props.search[index].ctime.substring(0,10)+" "+this.props.search[index].ctime.substring(11,16)}</div>
                              <div className="sc_list_foot3">收藏 <span>{this.props.search[index].savenumber}</span></div>
                          </div>
                      </div>
                  </div>
              </div>
              )
          })}
        </div>
      )
    }
  }
}
const mapStateToProps = (state)=>{
  return {
      search:state.searchreducer.search
  }
}

export default connect(mapStateToProps)(Search);