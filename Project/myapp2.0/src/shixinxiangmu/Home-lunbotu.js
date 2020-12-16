import React,{useState,useEffect,Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import lunBoImg from  "./HomeImg/lunbo.jpg"
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
      this.dislunbotu=this.dislunbotu.bind(this);
      this.state={
        data:['1','2','3','4'],
        imgHeight:176
      }
    }
    componentDidUpdate(){
      setTimeout(() => {
        this.setState({
          data:['http://localhost:1234/static/turningimg/lunbo.jpg','http://localhost:1234/static/turningimg/jQuery.jpg', 'http://localhost:1234/static/turningimg/react.png', 'http://localhost:1234/static/turningimg/webqianduankaifajichuzhishi.jpg'],
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
          {this.state.data.map((val) => (            
            <div>
              {/* {this.dislunbotu(`${val}`)} */}
              <a
              key={val}
              // href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({imgHeight:'auto'});
                }}
                onClick={(val) =>{this.dislunbotu(val)}}
              />
            </a>
            </div>
          ))}
        </Carousel>
      </WingBlank>
    )
    }
}
export default Lunbotu