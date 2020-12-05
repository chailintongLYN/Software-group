const guanzhu=(username)=>{
    return (dispatch)=>{
        fetch('http://localhost:1234/getmyfollowstext',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(sessionStorage.getItem('username'))
        }).then(res => res.json())
        .then(res=>{
            dispatch({
                type:'GUANZHU',
                content:res.resluts
            })
            // list = res.results
            
        })
    }
}
export {guanzhu}