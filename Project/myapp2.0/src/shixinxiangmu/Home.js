import React,{useState,useEffect} from 'react'
import  "./Home.css"
import { Carousel, WingBlank } from 'antd-mobile';
import lunBoImg from  "./HomeImg/lunbo.jpg"
import tuijian1_btn from  "./HomeImg/tuijian1.png"
import tuijian2_btn from  "./HomeImg/tuijian2.png"
import tuijian3_btn from  "./HomeImg/tuijian3.png"
import tuijian4_btn from  "./HomeImg/tuijian4.png"
import remen1 from  "./HomeImg/remen1.png"
import remen2 from  "./HomeImg/remen2.png"
import remen3 from  "./HomeImg/remen3.png"
import dashen from  "./HomeImg/dashen.png"
import youzhi from  "./HomeImg/youzhi.png"
import jingxuan from  "./HomeImg/jingxuan.png"
import BttomBar from '../components/BttomBar'
const Home=(props)=>{
    let [data,setData] = useState(['1', '2', '3',"4"])
    let [imgHeight,setImgHeight] = useState(176)
    useEffect(()=>{
        setTimeout(() => {
            setData((pre)=>['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI2']);
          }, 100);
    },[])
    return(
        <div className="home">

            <div className="home_head">
                <div   className="home_headInput"  onClick={()=>props.history.push('/search')}>
                   <span className="home_headInput_search"></span> 专题搜索
                </div>
                <span className="head_btn">
                </span>
            </div>

            {/* <div className="home_lunBo">
                <img src={lunBoImg}/>
            </div> */}
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //   afterChange={index => console.log('slide to', index)}
          className=" home_lunBo"
        >
          {data.map(val => (
            <a
              key={val}
            //   href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                src={lunBoImg}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  setImgHeight((preHeight)=>{
                      return "auto"
                  })
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>

            <div className="home_tuiJian">
                <div className="home_tuijian_btn_container">
                    <div className="home_tuijian_btn">
                        <img src={tuijian1_btn}/>
                    </div>
                    <div className="home_tuijian_text">
                        新锐推荐
                    </div>
                </div>
                <div className="home_tuijian_btn_container">
                    <div className="home_tuijian_btn">
                        <img src={tuijian2_btn}/>
                    </div>
                    <div className="home_tuijian_text">
                    实战操作
                    </div>
                </div>
                <div className="home_tuijian_btn_container">
                    <div className="home_tuijian_btn">
                        <img src={tuijian4_btn}/>
                    </div>
                    <div className="home_tuijian_text">
                    好物推荐
                    </div>
                </div>
                <div className="home_tuijian_btn_container">
                    <div className="home_tuijian_btn">
                        <img src={tuijian3_btn}/>
                    </div>
                    <div className="home_tuijian_text">
                    官方文档
                    </div>
                </div>
            </div>
           
            <div className="home_remen">
                <h2 className="home_remen_title">最新专贴</h2>
                <div className="home_remen_container">
                    <div className="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                            <img src={remen1} />
                        </div>
                        <div className="home_remen_container_div_text">
                        MAC更新险遭灾难
                        </div>
                    </div>
                    <div className="home_remen_container_div"onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                        <img src={remen2} />
                        </div>
                        <div className="home_remen_container_div_text">
                        Vokenization：一种比GPT-3更有常识的视觉语言模型
                        </div>
                    </div>
                    <div className="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                        <img src={remen3} />
                        </div>
                        <div className="home_remen_container_div_text">
                        变强——GitHub 热点速览 Vol.46
                        </div>
                    </div>
                  
                </div>
            </div>

            <div className="home_dashen home_remen">
                <h2 className="home_remen_title">REACT</h2>
                <div className="home_dashen_container">
                    <div className="home_dashen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_dashen_container_div_img">
                            <img src={dashen} />
                        </div>
                        <div className="home_dashen_container_div_text">
                        xxx
                        </div>
                    </div>
                    <div className="home_dashen_container_div"  onClick={()=>props.history.push('/detail')}>
                        <div className="home_dashen_container_div_img">
                        <img src={dashen} />
                        </div>
                        <div className="home_dashen_container_div_text">
                        Vxxx
                        </div>
                    </div>
                    <div className="home_dashen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_dashen_container_div_img">
                        <img src={dashen} />
                        </div>
                        <div className="home_dashen_container_div_text">
                        xxx
                        </div>
                    </div>
                    <div className="home_dashen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_dashen_container_div_img">
                        <img src={dashen} />
                        </div>
                        <div className="home_dashen_container_div_text">
                        xxx
                        </div>
                    </div>
                  
                </div>
            </div>


            <div className="home_youzhi home_remen">
                <h2 className="home_remen_title">JAVASCRIPT</h2>
                <div className="home_remen_container">
                    <div className="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                            <img src={youzhi} />
                        </div>
                        <div className="home_remen_container_div_text">
                        携程技术
                        </div>
                    </div>
                    <div className="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                        <img src={youzhi} />
                        </div>
                        <div className="home_remen_container_div_text">
                        携程技术
                        </div>
                    </div>
                    <div className="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                        <img src={youzhi} />
                        </div>
                        <div className="home_remen_container_div_text">
                        携程技术
                        </div>
                    </div>
                  
                </div>
            </div>


            <div className="home_jingxuan home_remen">
                <h2 className="home_remen_title">NODEJS</h2>
                <div className="home_remen_container">
                    <div className="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                            <img src={jingxuan} />
                        </div>
                        <div className="home_remen_container_div_text">
                        程序员是怎么炫富的
                        </div>
                    </div>
                    <div className="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                        <img src={jingxuan} />
                        </div>
                        <div className="home_remen_container_div_text">
                        程序员的凡尔赛文学
                        </div>
                    </div>
                    <div className="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div className="home_remen_container_div_img">
                        <img src={jingxuan} />
                        </div>
                        <div className="home_remen_container_div_text">
                        2020程序大会
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="kongbai_bottom"></div>
            <BttomBar />
        </div>
        
    )
}
export default Home