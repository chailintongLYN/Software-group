import React from 'react';
import Context from'./Context';
const Demo02 =()=>{
    return (
        <div>
            <h1>Demo02</h1>
            <Context.Consumer>
                {
                    data=>data.data.map(item=><li key={item}>{item}</li>)
                }
            </Context.Consumer>
        </div>
    )
}
export default Demo02;