import React from 'react'
const Recommend=()=>{
    return (
        <div class="container">
            <div class="tou">
                <div class="back">
                    <span>﹤</span>
                    <p>新锐推荐</p>
                </div>
            </div>
            <div class='zhutilist'>
            </div>
        </div>
    )
    fetch('/data')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        var recommendlist=myJson;
        var recommendCon=document.getElementById('zuiti');
        for(var i=0;i<zhutilist.length;i++){
            
        }
    })
}
export default Recommend