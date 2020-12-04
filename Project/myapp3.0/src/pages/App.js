import React from 'react';
import Context from './Context';
import Demo01 from './Demo01';
console.log(Context);


const  App=()=>
{
    let data=['hello','context']
    return (
        <Context.Provider value={{data}}>
            <Demo01/>
        </Context.Provider>
    )
}

export default App;