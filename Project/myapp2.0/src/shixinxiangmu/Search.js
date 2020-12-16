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
    if(sessionStorage.getItem('value')!==null){
      let data ={
        searchtype:'title',
        sevalue:sessionStorage.getItem('value')
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
    }

  }
 
 
  render(){
    return (
      <div>
        <SearchBar  
          placeholder="最佳热帖"
          onSubmit={ (value) => {
            console.log(value)
            sessionStorage.setItem('value',value);
            var invalue=sessionStorage.getItem('value');
            console.log(invalue);
            let data ={
              searchtype:'title',
              sevalue:invalue
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
            console.log(this.props.search);
            
          }
        }
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() =>{
            this.props.history.goBack()
            sessionStorage.removeItem('value')

          }
          }
          showCancelButton
        />
        {this.renderninfo()}
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
      // loacl_search(invalue);
      return(
        <div className='sc'>
          {this.props.search.map((item,index)=>{
              return(
                  <div className="sc_container">
                    <div className="sc_list" onClick={()=>this.props.history.push('/detail',{from:'search',id:this.props.search[index].textid,search:this.props.search[index],scnumber:this.props.search[index].savenumber,textusername:this.props.search[index].username})}>
                        <img src={this.props.search[index].titleimg} id='titleimg'/>
                        <div className="sc_list_text" >
                            <div className="sc_list_head" id='title'>{this.props.search[index].title}</div>
                            <div className="sc_list_foot">
                                <div className="sc_list_foot1" id='type'>{this.props.search[index].type}</div>
                                <div className="sc_list_foot2" id='ctime'>{this.props.search[index].ctime.substring(0,10)+" "+this.props.search[index].ctime.substring(11,16)}</div>
                                <div className="sc_list_foot3" id='shoucang'>收藏 <span id='shoucang_number'>{this.props.search[index].savenumber}</span></div>
                            </div>
                        </div>
                    </div>
              </div>
              )
          })}
          {/* {sessionStorage.getItem('search').map((item,index)=>{
              return(
                  <div className="sc_container">
                    <div className="sc_list" onClick={()=>this.props.history.push('/detail',{from:'search',search:sessionStorage.getItem('search')[index]})}>
                        <img src={sessionStorage.getItem('search')[index].titleimg} id='titleimg'/>
                        <div className="sc_list_text" >
                            <div className="sc_list_head" id='title'>{sessionStorage.getItem('search')[index].title}</div>
                            <div className="sc_list_foot">
                                <div className="sc_list_foot1" id='type'>{sessionStorage.getItem('search')[index].type}</div>
                                <div className="sc_list_foot2" id='ctime'>{sessionStorage.getItem('search')[index].ctime.substring(0,10)+" "+sessionStorage.getItem('search')[index].ctime.substring(11,16)}</div>
                                <div className="sc_list_foot3" id='shoucang'>收藏 <span id='shoucang_number'>{sessionStorage.getItem('search')[index].savenumber}</span></div>
                            </div>
                        </div>
                    </div>
              </div>
              )
          })} */}
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

export default connect(mapStateToProps)(Search)