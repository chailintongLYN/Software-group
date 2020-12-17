const shoucang=(username)=>{
    return(dispatch)=>{
        fetch('http://localhost:1234/getmysavetext',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(sessionStorage.getItem('username'))
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                dispatch({
                    type:'SHOUCANG',
                    shoucang:res.results
                })
            })
        }
}
export {shoucang}
