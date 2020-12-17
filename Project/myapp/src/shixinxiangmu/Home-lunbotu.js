import React,{useState,useEffect,Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import lunBoImg from  "./HomeImg/lunbo.jpg";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {home} from './action/homeaction'
class Lunbotu extends Component{
    // let [data,setData] = useState(['1', '2', '3',"4"])
    // let [imgHeight,setImgHeight] = useState(176)
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setData((pre)=>['http://localhost:1234/static/turningimg/lunbo.jpg','http://localhost:1234/static/turningimg/jQuery.jpg', 'http://localhost:1234/static/turningimg/react.png', 'http://localhost:1234/static/turningimg/webqianduankaifajichuzhishi.jpg']);
    //       }, 100);
    // },[])
    constructor(props){
      super(props);
      // this.dislunbotu=this.dislunbotu.bind(this);
      this.state={
        data:['1','2','3','4'],
        imgHeight:176
      }
      this.props.dispatch(home())
    }
    componentDidUpdate(){
      setTimeout(() => {
        this.setState({
          data:['http://localhost:1234/static/turningimg/lunbo.jpg', 'http://localhost:1234/static/turningimg/react.jpg', 'http://localhost:1234/static/turningimg/webqianduankaifajichuzhishi.jpg','http://localhost:1234/static/turningimg/jQuery.jpg'],
        })
      }, 100);
    }
    dislunbotu=(val)=>{
      console.log(val);
      
    }
    render(){
      return(
        <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //   afterChange={index => console.log('slide to', index)}
          className=" home_lunBo"
        >
          {this.state.data.map((val,index)=>{
            // console.log(val);
            // console.log(index)
            return(
              <div>
              {/* {this.dislunbotu(`${val}`)} */}
              <a
              key={val}
              // href="http://www.alipay.com"
              // onClick={()=>this.props.history.push('/detail')}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top'}}
                // onClick={(val)=>this.props.history.push('/detail')}
                // onClick={()=>console.log(this.props.lunbotu[index].textid)}
                onClick={()=>this.props.history.push('/detail',{from:'home',id:this.props.lunbotu[index].textid,type:this.props.lunbotu[index].type,textusername:this.props.lunbotu[index].username,scnumber:this.props.lunbotu[index].savenumber})}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({imgHeight:'auto'});
                  
                }}
                // onClick={(val) =>{console.log(val,index)}}
                // onClick={(index)=>this.props.history.push('/detail',{from:'lunbotu',id:this.props.lunbotu[index].textid,type:this.props.lunbotu[index].type,textusername:this.props.lunbotu[index].username,scnumber:this.props.lunbotu[index].savenumber})}
                // onClick={(val)=>this.props.history.push('/detail')}
              />
            </a>
            </div>
            )
          })}
        </Carousel>
      </WingBlank>
    )
    }
}
const mapStateToProps=(state)=>({
  lunbotu:state.homereducer.lunbotu
})
export default connect(mapStateToProps)(withRouter(Lunbotu))