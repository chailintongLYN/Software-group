import React from 'react'

const Home = (props) => {
    console.log(props);
    return (
        <div style={{textAlign:'center'}}>
            <h2>React</h2>
            <p>用于构建用户界面的 JavaScript 库</p>
            <div>
                <button onClick={
                    ()=>props.history.push('/doc')
                }>快速开始</button>
                <button onClick={
                    ()=>props.history.push('/tuto')
                }>入门教程</button>
            </div>
        </div>
    )
}

export default Home
