const home = (username)=>{
    return(dispatch)=>{
        fetch('http://localhost:1234/gethomedata',{
            headers:{
                'content-type' : 'application/json'
            }
        }).then(res => res.json())
        .then(res=>{
            console.log(res);
            dispatch({
                type:'HOME',
                newtext:res.newtext,
                js:res.js,
                react:res.react,
                html:res.html,
                css:res.css
            })
        })
    }
}

export {home}