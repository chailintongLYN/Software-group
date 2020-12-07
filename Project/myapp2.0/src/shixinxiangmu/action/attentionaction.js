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
            console.log(2);
            console.log(res.results);
            dispatch({
                type:'GUANZHU',
                content:res.results
                
            })
            // list = res.results
            
        })
    }
}
export {guanzhu}