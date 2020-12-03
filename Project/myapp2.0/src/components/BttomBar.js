import React,{useState,useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import  "./BttomBar.css"
import bottom_btn1_active from "../Img/bottom_btn1_active.png"
import bottom_btn1 from  "../Img/bottom_btn1.png"

import bottom_btn2_active from "../Img/bottom_btn2_active.png"
import bottom_btn2 from  "../Img/bottom_btn2.png"

import bottom_btn3_active from "../Img/bottom_btn3_active.png"
import bottom_btn3 from  "../Img/bottom_btn3.png"

import bottom_btn4_active from "../Img/bottom_btn4_active.png"
import bottom_btn4 from  "../Img/bottom_btn4.png"
import ShouChang from '../shixinxiangmu/ShouChang'
const BttomBar=(props)=>{
    let [activeUrl,setActiveUrl] = useState("/home")
    useEffect(()=>{
        let url = "";
        if(window.location.pathname.includes("/home")){
            url = "/home"
        }else if(window.location.pathname.includes("/jiequ")){
            url = "/jiequ"
        }else if(window.location.pathname.includes("/shouchang")){
            url = "/shouchang"
        }else if(window.location.pathname.includes("/myself")){
            url = "/myself"
        }
        setActiveUrl(url)
    }, [window.location.pathname])

    let activeClick=(url)=>{
        if(url == activeUrl){            
            return;
        }
        setActiveUrl(url)
        props.history.push(url)

        if(url === '/jiequ'){
            fetch('http://localhost:1234/getmyfollowstext',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(sessionStorage.getItem('username'))
            }).then(res => res.json())
            .then(res=>{

                console.log(res);
            })
        }

        if(url === '/shouchang'){
            fetch('http://localhost:1234/getmysavetext',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(sessionStorage.getItem('username'))
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                
            })
        }

        if(url === '/myself'){
            fetch('http://localhost:1234/getmyfansandfollowusernumber',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(sessionStorage.getItem('username'))
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                
            })
            let data = {}
            data.searchtype = 'username';
            data.sevalue = sessionStorage.getItem('username')
            fetch('http://localhost:1234/gettexts',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                
            })
        }
    }

    return(
        <div className="BttomBar"> 
         <div className="BttomBar_container"> 
            <div className="BttomBar_container_div" onClick={()=>activeClick("/home")}> 
                <div className="BttomBar_container_div_img">
                    {activeUrl.includes("/home")?
                    <img src={bottom_btn1_active}/>:
                    <img src={bottom_btn1}/>
                    }
                    
                </div>
                <div className="BttomBar_container_div_text"> 
                    发现
                </div>
            </div>
            <div className="BttomBar_container_div" onClick={()=>activeClick("/jiequ")}> 
                <div className="BttomBar_container_div_img">
                {activeUrl.includes("/jiequ")?
                    <img src={bottom_btn2_active}/>:
                    <img src={bottom_btn2}/>
                    }
                </div>
                <div className="BttomBar_container_div_text"> 
                    关注
                </div>
            </div>
            <div className="BttomBar_container_div" onClick={()=>activeClick("/shouchang")}> 
                <div className="BttomBar_container_div_img">
                {activeUrl.includes("/shouchang")?
                    <img src={bottom_btn3_active}/>:
                    <img src={bottom_btn3}/>
                    }
                </div>
                <div className="BttomBar_container_div_text"> 
                    收藏
                </div>
            </div>
            <div className="BttomBar_container_div" onClick={()=>activeClick("/myself")}> 
                <div className="BttomBar_container_div_img">
                {activeUrl.includes("/myself")?
                    <img src={bottom_btn4_active}/>:
                    <img src={bottom_btn4}/>
                    }
                </div>
                <div className="BttomBar_container_div_text"> 
                    我的
                </div>
            </div>
        </div>
        </div>
    )
}
export default withRouter(BttomBar)