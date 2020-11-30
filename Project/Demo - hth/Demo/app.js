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

//登录页
app.get('/',async c=>{
    c.res.body = fs.readFileSync('./loginandnewdata/index.html').toString('utf-8')
})

//登录页接口
app.post('/data',async c=>{

    let{username,passwd} = JSON.parse(c.body);

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM login where username=? and passwd=?',[username,passwd],function(error,results,fields){
        
            if(results.length == 0 ){
                resolve({'status': 'failed','code':'400'})
            }
            else{
                resolve({'status':'success'}) 
            }
        })
    }) 
    c.res.body = result;
})

//注册页
app.get('/new',async c=>{
    c.res.body = fs.readFileSync('.loginandnewdata/newdata.html').toString('utf-8');
})

//注册页 接口
app.post('/newdata',async c=>{
    let post={
        username:JSON.parse(c.body).username,
        passwd:JSON.parse(c.body).passwd
    }
    var result = await  new Promise((resolve) => {
        connection.query('INSERT INTO login SET ?',post,function(error,results,fields){
            if(error) throw error;
            if(results.length == 0 ){
                resolve({'status': 'failed','code':'400'})
            }
            else{
                resolve({'status':'注册成功'}) 
            }
        })
    }) 
    c.res.body = result;
})

//首页
app.get('/login',async c=>{
    c.res.body = fs.readFileSync('.loginandnewdata/login.html').toString('utf-8');
})


//获取我的文章
app.get('/gettext',async c=>{
    c.res.body = fs.readFileSync('./gettext/index.html').toString('utf-8')
})


app.post('/gettexts',async c=>{
    let username = JSON.parse(c.body)

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM text where username=? ',[username],function(error,results,fields){
            if(results.length == 0 ){
                console.log(1)
                resolve({'status': 'failed','code':'400'})
            }
            else{
                console.log(2)
                resolve({'status':'success','results':results}) 
            }
        })
    }) 
    c.res.body = result;

})


//获取我的粉丝
app.get('/getfans',async c=>{
    c.res.body = fs.readFileSync('./getfans/index.html').toString('utf-8');
})

app.post('/getmyfans', async c=>{
    let username = JSON.parse(c.body)

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM fans where username=? ',[username],function(error,results,fields){
            if(results.length == 0 ){
                resolve({'status': 'failed','code':'400'})
            }
            else{
                resolve({'status':'success','results':results}) 
            }
        })
    }) 
    c.res.body = result;
})

//获取我的关注
app.get('/getfollows',async c=>{
    c.res.body = fs.readFileSync('./getfollows/index.html').toString('utf-8');
})

app.post('/getmyfollows', async c=>{
    let username = JSON.parse(c.body)

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM fans where followuser=? ',[username],function(error,results,fields){
            if(results.length == 0 ){
                resolve({'status': 'failed','code':'400'})
            }
            else{
                resolve({'status':'success','results':results}) 
            }
        })
    }) 
    c.res.body = result;
})


//获取我的关注的人的文章
app.get('/getfollowstext', async c=>{
    c.res.body = fs.readFileSync('./getfollowstext/index.html').toString('utf-8');
})

//获取我的关注的人的文章 的接口
app.post('/getmyfollowstext', async c=>{
    let username = JSON.parse(c.body)
    let textarr = []
    console.log(JSON.parse(c.body))

    var result = await new Promise((resolve) => {
        connection.query('SELECT * FROM fans where followuser=? ',[username],function(error,results,fields){
            if(results.length == 0 ){
                console.log(1)
                resolve({'status': 'failed','code':'400'})
            }
            else{
                console.log(2)
                results.forEach(item => {
                    console.log(item.username)
                    var anotherresult = new Promise((resolve)=>{
                        
                        connection.query('SELECT * FROM text where username=? ',item.username,function(error,anotherresults,fields){
                            textarr.push(anotherresults)
                            console.log('textarr:',textarr);
                            resolve(textarr)
                        })
                    })
                });
                console.log(1);
                // console.log(anotherresult);
                // resolve({'status':'success','results':anotherresult}) 
            }
        })
    }) 
    c.res.body = result;
    console.log(result)
})

app.run(1234,2)
