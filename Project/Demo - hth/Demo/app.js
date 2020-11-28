'use strict'
const titbit = require('titbit'),
fs = require('fs')

let index = fs.readFileSync('./loginandnewdata/index.html').toString('utf-8');

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
    c.res.body = fs.readFileSync('./text/index.html').toString('utf-8')
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

app.post('/newdata',async c=>{
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
    c.res.body = fs.readFileSync('.loginandnewdata/login.html').toString('utf-8');
})

app.get('/new',async c=>{
    c.res.body = fs.readFileSync('.loginandnewdata/newdata.html').toString('utf-8');
})

app.post('/gettext',async c=>{
    let username = JSON.parse(c.body)
    console.log(JSON.parse(c.body))

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM text where username=? ',[username],function(error,results,fields){
            console.log(results)
            if(results.length == 0 ){
                console.log(1)
                resolve({'status': 'faild','code':'400'})
            }
            else{
                console.log(2)
                resolve({'status':'success','results':results}) 
            }
        })
    }) 
    c.res.body = result;
    console.log(result)

    // connection.query('SELECT *FROM text where username=? ',username,function(error,results,fields){
    //     console.log(results)
    //     let object = {}
    //     object.title = results[0].title
    //     object.text = results[0].text
    //     c.res.body = {'title':results[0].title,'text':results[0].text}
    // })
    // console.log(c.res.body);
})


// app.post('/text',async c=>{
    // let{username} = JSON.parse(c.body);
    // console.log(c.body);

    // var result = await  new Promise((resolve) => {
    //     connection.query('SELECT * FROM text where username=? ',[username],function(error,results,fields){
    //         console.log(results)
        
    //         if(results.length == 0 ){
    //             console.log(1)
    //             resolve({'status': 'faild','code':'400'})
    //         }
    //         else{
    //             console.log(2)
    //             resolve({'status':'success'}) 
    //         }
    //     })
    // }) 
    // c.res.body = result;
    // console.log(result)
// })
app.run(1234,2)
