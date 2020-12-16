const lunbotu = (username)=>{
    return(dispatch)=>{
        let textid = 117
        fetch('http://localhost:1234/gettexts',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(textid)
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                dispatch({
                    type:'LUNBOTU',
                    follow:res.results
                })
            })
        }
}

export {lunbotu}