const follow = (username)=>{
    return(dispatch)=>{
        fetch('http://localhost:1234/getmyfollows',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(sessionStorage.getItem('username'))
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                dispatch({
                    type:'FOLLOW',
                    follow:res.results
                })
            })
    }
}


export {follow}