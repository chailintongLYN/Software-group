import React,{Component} from 'react'
import avatr from '../JieQuImg/avatr.png'
import './index.css'
class Liebiao extends Component{
    render(){
        return(
            <div container>
                <div class="tou">
                    <div class='back'>﹤</div>
                    <div class='tou-name'>我的粉丝</div>
                </div>
                <div class='zhuti'>
                    <div class='zhuti-1'>
                        <img src={avatr} class='touxiang-1'/>
                        <div class='username'>土豆不哭不闹不爱笑</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Liebiao