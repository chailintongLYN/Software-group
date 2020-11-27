'use strict'
const titbit = require('titbit'),
fs = require('fs')

let index = fs.readFileSync('./login.html').toString('utf-8');

const app = new titbit({
    debug: true,

    globalLog:true

})

const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'myfavorite'
})

connection.connect();


app.get('/',async c=>{
    c.res.body = index
})

app.post('/data',async c=>{

    // console.log(c.body);
    let{username,passwd} = JSON.parse(c.body);
    console.log(username,passwd);

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM login where username=? and passwd=?',[username,passwd],function(error,results,fields){
            console.log(results)
        
            if(results.length == 0 ){
                console.log(1)
                resolve({'status': 'faild','code':'400'})
            }
            else{
                console.log(2)
                resolve({'status':'success'}) 
            }
        })
    }) 
    c.res.body = result;
    console.log(result)
})

app.post('/logon',async c=>{
    let post={
        username:JSON.parse(c.body).username,
        passwd:JSON.parse(c.body).passwd
    }
    console.log(post);
    var result = await  new Promise((resolve) => {
        connection.query('INSERT INTO login SET ?',post,function(error,results,fields){
            if(error) throw error;
            if(results.length == 0 ){
                console.log(1)
                resolve({'status': 'faild','code':'400'})
            }
            else{
                console.log(2)
                resolve({'status':'注册成功'}) 
            }
        })
    }) 
    c.res.body = result;
    console.log(result)
        // if(results.length == 0 ){
        //     console.log(1)
        //     resolve({'status': 'faild','code':'400'})
        // }
        // else{
        //     console.log(2)
        //     resolve({'status':'success'}) 
        // }
})

app.get('/login',async c=>{
    c.res.body = fs.readFileSync('./login.html').toString('utf-8');
})

app.get('/logon',async c=>{
    c.res.body = fs.readFileSync('./newdata.html').toString('utf-8');
})

app.run(1234,2)
