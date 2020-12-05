import React, {useState, useEffect,Component} from 'react'
import "./index.css"
import BttomBar from '../../components/BttomBar'
import jq_header_logo from '../JieQuImg/header_logo.svg'
import avatr from '../JieQuImg/avatr.png'

import pinglun from '../JieQuImg/pinglun.png'
import share from '../JieQuImg/share.png'
import comment from '../JieQuImg/comment.png'
import hot from '../JieQuImg/hot.png'
import fetchJsonp from 'fetch-jsonp';


class JieQu extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         list:[]
    //     }
    //     console.log(2);
        
    // }
    async componentWillMount(){
        var  list={}
        await fetch('http://localhost:1234/getmyfollowstext',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(sessionStorage.getItem('username'))
        }).then(res => res.json())
        .then(res=>{
            console.log(res);
            
            list = res.results
            // this.setState({
            //     list:res.results,
                
            // })
            console.log(3);
            // console.log('list:',list);
            
        })
        console.log(list);
        console.log('123');
        
    }
    // let [headerIdx,setHeaderIdx] =JuseState(0)
    
    //  headClick=(idx)=>{
    //     setHeaderIdx(idx)
    //     document.querySelectorAll(".jq_center")[0].scrollIntoView(true)
    // }
    // let data=[ //换成从接口请求来的数据就行了
    //     {
    //         avatr:avatr,
    //         name:"土豆不哭不闹",
    //         time:"刚刚",
    //         text:"这只是一个例子！",
    //         img:[pinglun,pinglun,pinglun],
    //         biaoqian:["说唱江湖1","说唱江湖2"],
    //         share:99,
    //         hot:88,
    //         comment:66,
    //     },
    //     {
    //         avatr:pinglun,
    //         name:"xxxx",
    //         time:"3分钟前",
    //         text:"这只是二个例子！",
    //         img:[pinglun,pinglun,pinglun],
    //         biaoqian:["说唱江湖1说唱江湖1","说唱江湖2"],
    //         share:9,
    //         hot:18,
    //         comment:26,
    //     },
    // ]
render(props){
     console.log(1);
    return (
        <div className="jq">
            <div className="jq_header">
                <div className="jq_header_title">
                    {/* <div className={`jq_header_title1 ${headerIdx==0?"jq_header_title_active":""}`} onClick={()=>headClick(0)}>
                        推荐
                    </div> */}
                    {/* <div className={`jq_header_title2 ${headerIdx==1?"jq_header_title_active":""}`} onClick={()=>headClick(1)}>
                        关注
                    </div> */}
                    <div>关注</div>
                </div>
                <div className="jq_header_logo">
                    <img src={jq_header_logo}></img>
                </div>
            </div>
           
            <div className="jq_center">

                {/* {
                    // 模拟数据
                    data.map((item,idx)=>{
                      return  <div className="jq_content" key={idx}>
                        <div className="jq_content_header">
                            <img src={item.avatr}  className="jq_content_header_img"></img>
                            <div className="jq_content_header_text">
                                    <div className="jq_content_header_text_name">
                                            {item.name}
                                    </div>
                                    <div className="jq_content_header_text_time">
                                            {item.time}
                                    </div>
                            </div>
                        </div>  
                        <div className="jq_content_center">
                            <div className="jq_content_center_text">
                            {item.text}
                            </div> 
                            <div className="jq_content_center_img">
                                {
                                    item.img.map((url,urlIdx)=>{
                                        return <img src={url} key={urlIdx}></img>
                                    })
                                }
                            </div> 
                            <div className="jq_content_center_bq">
                                {
                                    item.biaoqian.map((bq,bqIdx)=>{
                                    return <span key={bqIdx}>#{bq}</span>
                                    })
                                }
                            </div> 
                        </div> 
                        <div className="jq_content_foot">
                            <div  className="jq_content_foot_share">
                                <img src={share}/>
                              {item.share}
                            </div>
                            <div  className="jq_content_foot_hot">
                                <img src={hot}/>
                                {item.hot}
                            </div>
                            <div  className="jq_content_foot_comment">
                                <img src={comment} className="jq_content_foot_comment"/>
                                {item.comment}
                            </div>
                        </div> 
                    </div>
                    })
                } */}



                <div className="jq_content">
                    <div className="jq_content_header">
                        <img src={avatr}  className="jq_content_header_img"></img>
                        <div className="jq_content_header_text">
                                <div className="jq_content_header_text_name">
                                        {/* {this.state.list[0].title} */}
                                </div>
                                <div className="jq_content_header_text_time">
                                        刚刚
                                </div>
                        </div>
                    </div>  
                    <div className="jq_content_center">
                        <div className="jq_content_center_text">
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        </div> 
                        <div className="jq_content_center_img">
                            <img src={pinglun}></img>
                            <img src={pinglun}></img>
                            <img src={pinglun}></img>
                        </div> 
                        <div className="jq_content_center_bq">
                           <span>#说唱江湖</span>
                           <span>#说唱江湖说唱江湖</span>
                           <span>#说唱江湖</span>
                           <span>#说唱江湖</span>
                           <span>#说唱江湖说唱江湖</span>
                        </div> 
                    </div> 
                    <div className="jq_content_foot">
                        <div  className="jq_content_foot_share">
                            <img src={share}/>
                           123
                        </div>
                        <div  className="jq_content_foot_hot">
                            <img src={hot}/>
                            53
                        </div>
                        <div  className="jq_content_foot_comment">
                            <img src={comment} className="jq_content_foot_comment"/>
                            66
                        </div>
                    </div> 
                </div>
              
                <div className="jq_content">
                    <div className="jq_content_header">
                        <img src={pinglun}  className="jq_content_header_img"></img>
                        <div className="jq_content_header_text">
                                <div className="jq_content_header_text_name">
                                        土豆不哭不闹
                                </div>
                                <div className="jq_content_header_text_time">
                                        刚刚
                                </div>
                        </div>
                    </div>  
                    <div className="jq_content_center">
                        <div className="jq_content_center_text">
                        喜欢更高兄弟的看过来！
                        </div> 
                        <div className="jq_content_center_img">
                            <img src={pinglun}></img>
                            <img src={pinglun}></img>
                            <img src={pinglun}></img>
                        </div> 
                        <div className="jq_content_center_bq">
                           <span>#说唱江湖</span>
                           <span>#说唱江湖说唱江湖</span>
                           <span>#说唱江湖</span>
                           <span>#说唱江湖</span>
                           <span>#说唱江湖说唱江湖</span>
                        </div> 
                    </div> 
                    <div className="jq_content_foot">
                        <div  className="jq_content_foot_share">
                            <img src={share}/>
                           123
                        </div>
                        <div  className="jq_content_foot_hot">
                            <img src={hot}/>
                            53
                        </div>
                        <div  className="jq_content_foot_comment">
                            <img src={comment} className="jq_content_foot_comment"/>
                            66
                        </div>
                    </div> 
                </div>
              
                <div className="jq_content">
                    <div className="jq_content_header">
                        <img src={avatr}  className="jq_content_header_img"></img>
                        <div className="jq_content_header_text">
                                <div className="jq_content_header_text_name">
                                        土豆不哭不闹
                                </div>
                                <div className="jq_content_header_text_time">
                                        刚刚
                                </div>
                        </div>
                    </div>  
                    <div className="jq_content_center">
                        <div className="jq_content_center_text">
                        喜欢更高兄弟的看过来！喜欢更高兄弟的看过来！
                        </div> 
                        <div className="jq_content_center_img">
                            <img src={pinglun}></img>
                            <img src={pinglun}></img>
                            <img src={pinglun}></img>
                        </div> 
                        <div className="jq_content_center_bq">
                           <span>#说唱江湖</span>
                           <span>#说唱江湖说唱江湖</span>
                           <span>#说唱江湖</span>
                           <span>#说唱江湖</span>
                           <span>#说唱江湖说唱江湖</span>
                        </div> 
                    </div> 
                    <div className="jq_content_foot">
                        <div  className="jq_content_foot_share">
                            <img src={share}/>
                           123
                        </div>
                        <div  className="jq_content_foot_hot">
                            <img src={hot}/>
                            53
                        </div>
                        <div  className="jq_content_foot_comment">
                            <img src={comment} className="jq_content_foot_comment"/>
                            66
                        </div>
                    </div> 
                </div>
              
            </div>



            <div className="kongbai_bottom"></div>
            <BttomBar/>
        </div>
    )
 }
}
export default JieQu