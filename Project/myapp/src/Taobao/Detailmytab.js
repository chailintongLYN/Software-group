import React,{useEffect} from 'react'
import './detailshow.css'
import {connect} from 'react-redux'
import {Shuju} from './Actioncreator'
export function dis(props){
    props.dispatch({
        type:'sc',
        index:props.datalist[id]
    })
}
 const Detailmytab=(props)=> {
    useEffect(() => {
        props.dispatch(Shuju())
    }, [])
     let id=props.location.state.id
        return (
            <div className='dmcontainer'>
                <div class='dianpu'>
                    <i className='iconfont icon-taobaodianpu'></i>
                    <span>店铺</span>
                </div>
                <div class='kefu'>
                    <i className='iconfont icon-taobaokefu-01'></i>
                    <span>客服</span>
                </div>
                <div class='shoucang' onClick={dis}>
                    <i className='iconfont icon-shoucang2'></i>
                    <span>收藏</span>
                </div>
                <div class='jiaru'>
                    <span>加入购物车</span>
                </div>
                <div class='liji'>
                    <span>立即购买</span>
                </div>
            </div>

        )

}
const mapStateToProps = (state)=>({
    shoucang:state.cartreducer,
    datalist:state.homereducer.datalist
})
export default connect(mapStateToProps)(Detailmytab)
