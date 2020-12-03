import React,{useState,useEffect} from 'react'
import "./index.css"
import BttomBar from '../../components/BttomBar'
import img1 from  "../MySelfImg/1.png"
import img2 from  "../MySelfImg/2.png"
import img3 from  "../MySelfImg/3.png"
import edit from  "../MySelfImg/edit.png"
import add from  "../MySelfImg/add.png"
import shezhi from  "../MySelfImg/shezhi.png"
import avatr from  "../MySelfImg/avatr.png"
const MySelf = (props)=>{
    let avatr_img = avatr
    useEffect(()=>{
        document.getElementById("root").style.width="100%";
        document.getElementById("root").style.height="100%";
        document.getElementById("myse_bg").style.backgroundImage= `url(${avatr_img})`;
        return ()=>{
            console.log("卸载")
            document.getElementById("root").style.width=null;
            document.getElementById("root").style.height=null;
            document.getElementById("myse_bg").style.backgroundImage=null;
        }
    },[])
    return (<div className="myse" id="myse">
            <div className="myse_bg" id="myse_bg"></div>
         <div className="myse_kongbai">
         <div className="myse_shezhi">
                    <img src={shezhi} onClick={()=>alert("进入设置页面")}/>
                 </div>
        </div>
        <div className="myse_avatr">
                <img src={avatr_img}/>
               
        </div>
        <div className="myse_name">
            SHAWNZ轩志 <img src={edit} onClick={()=>alert("进入编辑页面")} />
        </div>
        <div className="myse_gz_fs">
            <div className="myse_gz">关注 <span style={{fontWeight:"bold"}}>56</span></div>
            <div className="myse_fs">粉丝 <span style={{fontWeight:"bold"}}>191</span></div>
        </div>
        <div className="myse_project">
            <div className="myse_project_head">我的作品</div>
            <div className="myse_project_content">

                <div  className="myse_project_list" >
                    <img src={img1}/>
                </div>
                <div  className="myse_project_list">
                    <img src={img2}/>
                </div>
                <div  className="myse_project_list">
                    <img src={img3}/>
                </div>
       



                <div  className="myse_project_list_add">
                    <img src={add}/>
                </div>
                <div className="kongbai_bottom"></div>
            </div>
        </div>
        
        <BttomBar />
        </div>)
}

export default MySelf