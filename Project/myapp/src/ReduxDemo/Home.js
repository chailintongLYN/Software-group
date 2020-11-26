import React,{useState} from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import {login} from './actionCreators'

const Home = (props) => {
    const [isShow,setShow] = useState(false);
    const log = () => {
        props.dispatch(login())
    }
    return (
        <div>
            {
                props.username
                    ? <div>
                        { props.username }
                        <button
                            onClick={ log }
                        >退出</button>
                    </div>
                    : <button
                        onClick={ log }
                    >登录</button>
            }
            <ActivityIndicator 
                toast
                text="登录中..."
                animating={isShow}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    username: state.homereducer.username
})
export default connect(mapStateToProps)(Home);
