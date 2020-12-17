const fans = (username)=>{
    return(dispatch)=>{
        fetch('http://localhost:1234/getmyfans',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(sessionStorage.getItem('username'))
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                dispatch({
                    type:'FANS',
                    fans:res.results
                })
            })
        }
    }


export {fans}