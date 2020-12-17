const myself=(username)=>{
    let data ={
        searchtype:'username',
        sevalue:sessionStorage.getItem('username')
    }
    return(dispatch)=>{
        fetch('http://localhost:1234/getmyfansandfollowusernumber',{
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
                type:'FANS&FLLOW',
                fansandfllow:res.results
                
            })
            // list = res.results
            
        })
        fetch('http://localhost:1234/gettexts',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res => res.json())
        .then(res=>{
            console.log(3);
            console.log(res.results);
            dispatch({
                type:'GETMYTEXTS',
                getmytext:res.results
                
            })
            
        })
    }
}
export {myself}