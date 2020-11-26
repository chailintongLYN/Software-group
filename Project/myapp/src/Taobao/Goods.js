import React,{useEffect} from 'react'
import {Shuju} from './Actioncreator'
import { connect } from 'react-redux'
import './detailshow.css'

const Goods = (props) => {
    useEffect(() => {
        props.dispatch(Shuju())
    }, [])
console.log(props)
    let id=props.location.state.id
    return(
        props.datalist.map((item,index)=>{
            if(props.datalist[index].id===id){
                console.log(props.datalist[index].img)
                return(
                    <div class='dcontainer'>
                    <div class='navi-bar' onClick={()=>props.history.goBack()}>
                    <botton class="back">
                        <span class='back-i'>＜</span>
                    </botton>
                    </div>
                    <div class='con-img'>
                        <img src={props.datalist[index].img} class='tupian'/>
                    </div>
                    <div className='dmcontainer'>
                        <div class='dianpu'>
                            <i className='iconfont icon-taobaodianpu'></i>
                            <span>店铺</span>
                        </div>
                        <div class='kefu'>
                            <i className='iconfont icon-taobaokefu-01'></i>
                            <span>客服</span>
                        </div>
                        <div class='shoucang' onClick={props.history.push('/cart'),()=>{
                            if(document.getElementById('shoucang').className!=='iconfont icon-shoucang2')
                            {
                                document.getElementById('shoucang').className='iconfont icon-shoucang2'
                                props.dispatch({
                                    type:"ADD_TODO",
                                    id:id,
                                    title:props.datalist[index].title,
                                    shoucang:[{id,title}]
                                })
                            }else(document.getElementById('shoucang')==="iconfont icon-shoucang2"){
                                props.dispatch({
                                    type:"DEL_TODO",
                                    id:id,
                                    title:props.datalist[index].title,
                                    shoucang:[{id,title}]
                                })
                            }
                        }}>
                            <i className='iconfont icon-shoucang2' id='shoucang'></i>
                            <span>收藏</span>
                        </div>
                        <div class='jiaru'>
                            <span>加入购物车</span>
                        </div>
                        <div class='liji'>
                            <span>立即购买</span>
                        </div>
                    </div>
                </div>
                )
            }
        })
    )
}
const mapStateToProps = (state)=>({
    datalist:state.homereducer.datalist
})
export default connect(mapStateToProps)( Goods)
