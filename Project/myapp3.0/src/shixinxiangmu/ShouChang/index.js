import React,{useState,useEffect} from 'react'
import "./index.css"
import BttomBar from '../../components/BttomBar'
import img from '../ShoouChangImg/img.png'
import heart from '../ShoouChangImg/heart.png'
import remen1 from  "../HomeImg/remen1.png"
import remen2 from  "../HomeImg/remen2.png"
import remen3 from  "../HomeImg/remen3.png"
import dashen from  "../HomeImg/dashen.png"


const ShouChang = (props)=>{
    return (<div className="sc">
        <div className="sc_header">
            <img src={heart}/> 我的收藏
        </div>
        <div className="sc_container">
        <div className="sc_list">
            <img src={img} />
            <div className="sc_list_text" >
                <div className="sc_list_head">react使用setState注意事项</div>
                <div className="sc_list_foot">
                    <div className="sc_list_foot1">react</div>
                    <div className="sc_list_foot2">9月20日</div>
                    <div className="sc_list_foot4">赞 98</div>
                    <div className="sc_list_foot3">阅读 7.5w</div>
                </div>
            </div>
        </div>
        <div className="sc_list">
            <img src={remen1} />
            <div className="sc_list_text" >
                <div className="sc_list_head">react使用setState注意事项react使用setState注意事项</div>
                <div className="sc_list_foot">
                    <div className="sc_list_foot1">react</div>
                    <div className="sc_list_foot2">9月20日</div>
                    <div className="sc_list_foot4">赞 98</div>
                    <div className="sc_list_foot3">阅读 7.5w</div>
                </div>
            </div>
        </div>
        <div className="sc_list">
            <img src={remen2} />
            <div className="sc_list_text" >
                <div className="sc_list_head">react---------------------------</div>
                <div className="sc_list_foot">
                    <div className="sc_list_foot1">react</div>
                    <div className="sc_list_foot2">9月20日</div>
                    <div className="sc_list_foot4">赞 98</div>
                    <div className="sc_list_foot3">阅读 7.5w</div>
                </div>
            </div>
        </div>
        <div className="sc_list">
            <img src={remen3} />
            <div className="sc_list_text" >
                <div className="sc_list_head">vueaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                <div className="sc_list_foot">
                    <div className="sc_list_foot1">vue</div>
                    <div className="sc_list_foot2">9月20日</div>
                    <div className="sc_list_foot4">赞 98</div>
                    <div className="sc_list_foot3">阅读 7.5w</div>
                </div>
            </div>
        </div>
        <div className="sc_list">
            <img src={dashen} />
            <div className="sc_list_text" >
                <div className="sc_list_head">nodenodenodenodenodenodenodenodenode</div>
                <div className="sc_list_foot">
                    <div className="sc_list_foot1">node</div>
                    <div className="sc_list_foot2">9月20日</div>
                    <div className="sc_list_foot4">赞 98</div>
                    <div className="sc_list_foot3">阅读 7.5w</div>
                </div>
            </div>
        </div>
        <div className="sc_list">
            <img src={dashen} />
            <div className="sc_list_text" >
                <div className="sc_list_head">nodenodenodenodenodenodenodenodenode</div>
                <div className="sc_list_foot">
                    <div className="sc_list_foot1">node</div>
                    <div className="sc_list_foot2">9月20日</div>
                    <div className="sc_list_foot4">赞 98</div>
                    <div className="sc_list_foot3">阅读 7.5w</div>
                </div>
            </div>
        </div>
        </div>
        <div className="kongbai_bottom"></div>
        <BttomBar />
        </div>)

}
export default ShouChang