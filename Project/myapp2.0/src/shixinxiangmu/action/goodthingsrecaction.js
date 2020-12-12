const goodthingsrecommend=(username)=>{
    return(dispatch)=>{
        let data = {
            searchtype:'type',
            sevalue:'好物推荐'
        }
        fetch('http://localhost:1234/gettexts',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res => res.json())
            .then(res=>{
                console.log(res);
                dispatch({
                    type:'GOODTHINGSRECOMMEND',
                    goodthingsrecommend:res.results
                })
            })
        }
}
export {goodthingsrecommend}