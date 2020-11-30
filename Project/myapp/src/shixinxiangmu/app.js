'use strict'
const titbit = require('titbit')

const {cors} = require('titbit-toolkit')

const fs = require('fs')

const app = new titbit({
    debug: true,

    globalLog:true

})

app.use( (new cors()).mid() )

app.options('/*', async c => {})

const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'myfavorite'
})

connection.connect();


app.get('/',async c=>{
    c.res.body = fs.readFileSync('../index.js').toString('utf-8');
})

app.post('/data',async c=>{

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
        connection.query('SELECT * FROM login where username=?',post.username,function(error,results,fields){
            if(error) throw error;
            if(results.length == 0){
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
            }else{
                resolve({'status': 'usernamefaild','code':'400'})
            }
        })
    }) 
    c.res.body = result;
    console.log(result)
        
})

// app.get('/login',async c=>{
//     c.res.body = fs.readFileSync('./login.js').toString('utf-8');
// })

// app.get('/logon',async c=>{
//     c.res.body = fs.readFileSync('./Logon.js').toString('utf-8');
// })

app.run(1234)
