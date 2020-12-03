import React from 'react'
import  "./Home.css"
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
    console.log(sessionStorage.getItem('username'));
    return(
        <div class="home">

            <div class="home_head">
                <div   class="home_headInput"  onClick={()=>props.history.push('/search')}>
                   <span class="home_headInput_search"></span> 专题搜索
                </div>
                <span class="head_btn">
                    123
                </span>
            </div>

            <div class="home_lunBo">
                <img src={lunBoImg}/>
            </div>

            <div class="home_tuiJian">
                <div class="home_tuijian_btn_container" >
                    <div class="home_tuijian_btn">
                        <img src={tuijian1_btn}/>
                    </div>
                    <div class="home_tuijian_text">
                        新锐推荐
                    </div>
                </div>
                <div class="home_tuijian_btn_container">
                    <div class="home_tuijian_btn">
                        <img src={tuijian2_btn}/>
                    </div>
                    <div class="home_tuijian_text">
                    实战操作
                    </div>
                </div>
                <div class="home_tuijian_btn_container">
                    <div class="home_tuijian_btn">
                        <img src={tuijian4_btn}/>
                    </div>
                    <div class="home_tuijian_text">
                    好物推荐
                    </div>
                </div>
                <div class="home_tuijian_btn_container">
                    <div class="home_tuijian_btn">
                        <img src={tuijian3_btn}/>
                    </div>
                    <div class="home_tuijian_text">
                    官方文档
                    </div>
                </div>
            </div>
           
            <div class="home_remen">
                <h2 class="home_remen_title">热门专贴</h2>
                <div class="home_remen_container">
                    <div class="home_remen_container_div">
                        <div class="home_remen_container_div_img" onClick={()=>props.history.push('/detail')}>
                            <img src={remen1} />
                        </div>
                        <div class="home_remen_container_div_text">
                        MAC更新险遭灾难
                        </div>
                    </div>
                    <div class="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div class="home_remen_container_div_img">
                        <img src={remen2} />
                        </div>
                        <div class="home_remen_container_div_text">
                        Vokenization：一种比GPT-3更有常识的视觉语言模型
                        </div>
                    </div>
                    <div class="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div class="home_remen_container_div_img">
                        <img src={remen3} />
                        </div>
                        <div class="home_remen_container_div_text">
                        变强——GitHub 热点速览 Vol.46
                        </div>
                    </div>
                  
                </div>
            </div>

            <div class="home_dashen home_remen">
                <h2 class="home_remen_title">万能大神</h2>
                <div class="home_dashen_container">
                    <div class="home_dashen_container_div">
                        <div class="home_dashen_container_div_img">
                            <img src={dashen} />
                        </div>
                        <div class="home_dashen_container_div_text">
                        xxx
                        </div>
                    </div>
                    <div class="home_dashen_container_div">
                        <div class="home_dashen_container_div_img">
                        <img src={dashen} />
                        </div>
                        <div class="home_dashen_container_div_text">
                        Vxxx
                        </div>
                    </div>
                    <div class="home_dashen_container_div">
                        <div class="home_dashen_container_div_img">
                        <img src={dashen} />
                        </div>
                        <div class="home_dashen_container_div_text">
                        xxx
                        </div>
                    </div>
                    <div class="home_dashen_container_div">
                        <div class="home_dashen_container_div_img">
                        <img src={dashen} />
                        </div>
                        <div class="home_dashen_container_div_text">
                        xxx
                        </div>
                    </div>
                  
                </div>
            </div>


            <div class="home_youzhi home_remen">
                <h2 class="home_remen_title">优质团队</h2>
                <div class="home_remen_container">
                    <div class="home_remen_container_div" >
                        <div class="home_remen_container_div_img">
                            <img src={youzhi} />
                        </div>
                        <div class="home_remen_container_div_text">
                        携程技术
                        </div>
                    </div>
                    <div class="home_remen_container_div">
                        <div class="home_remen_container_div_img">
                        <img src={youzhi} />
                        </div>
                        <div class="home_remen_container_div_text">
                        携程技术
                        </div>
                    </div>
                    <div class="home_remen_container_div">
                        <div class="home_remen_container_div_img">
                        <img src={youzhi} />
                        </div>
                        <div class="home_remen_container_div_text">
                        携程技术
                        </div>
                    </div>
                  
                </div>
            </div>


            <div class="home_jingxuan home_remen">
                <h2 class="home_remen_title">精选活动</h2>
                <div class="home_remen_container">
                    <div class="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div class="home_remen_container_div_img">
                            <img src={jingxuan} />
                        </div>
                        <div class="home_remen_container_div_text">
                        程序员是怎么炫富的
                        </div>
                    </div>
                    <div class="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div class="home_remen_container_div_img">
                        <img src={jingxuan} />
                        </div>
                        <div class="home_remen_container_div_text">
                        程序员的凡尔赛文学
                        </div>
                    </div>
                    <div class="home_remen_container_div" onClick={()=>props.history.push('/detail')}>
                        <div class="home_remen_container_div_img">
                        <img src={jingxuan} />
                        </div>
                        <div class="home_remen_container_div_text">
                        2020程序大会
                        </div>
                    </div>
                  
                </div>
            </div>
            <div class="kongbai_bottom"></div>
            <BttomBar />

        </div>
        
    )
}
export default Home
