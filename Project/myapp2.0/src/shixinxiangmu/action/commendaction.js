const commend= (username)=>{
    return(dispatch)=>{
        fetch('http://localhost:1234/getrecommendtext',{
                method:'GET',
                headers:{
                    'content-type' : 'application/json'
                },
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                dispatch({
                    type:'COMMEND',
                    commend:res.results
                })
            })
        }
    }


export {commend}