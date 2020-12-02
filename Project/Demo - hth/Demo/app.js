'use strict'
const titbit = require('titbit'),
      fs = require('fs')

const {cors} = require('titbit-toolkit')

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

//登录页 //前端代码有了可以删除
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

//注册页 //前端代码有了可以删除
app.get('/new',async c=>{
    c.res.body = fs.readFileSync('.loginandnewdata/newdata.html').toString('utf-8');
})

//注册页 接口
app.post('/logon',async c=>{
    let post={
        username:JSON.parse(c.body).username,
        passwd:JSON.parse(c.body).passwd
    }
    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM login where username=?',post.username,function(error,results,fields){
            if(error) throw error;
            if(results.length == 0){
                connection.query('INSERT INTO login SET ?',post,function(error,results,fields){
                    if(error) throw error;
                    if(results.length == 0 ){
                        console.log(1)
                        resolve({'status': 'failed','code':'400'})
                    }
                    else{
                        console.log(2)
                        resolve({'status':'注册成功'}) 
                    }
                })
            }else{
                resolve({'status': 'usernamefailed','code':'400'})
            }
        })
    })
    
    c.res.body = result;
})

//首页 //前端代码有了可以删除
app.get('/login',async c=>{
    c.res.body = fs.readFileSync('.loginandnewdata/login.html').toString('utf-8');
})


//首页接口 

app.post('/gethomedata',async c=>{
    let username = JSON.parse(c.body)

    //*还没写完
})

//获取发表的文章 //前端代码有了可以删除
app.get('/gettext',async c=>{
    c.res.body = fs.readFileSync('./gettext/index.html').toString('utf-8')
})

//接口
app.post('/gettexts',async c=>{
    let {searchtype,sevalue} = JSON.parse(c.body)

    console.log(searchtype,sevalue)
    
    let str = '';
    
    var result = await  new Promise((resolve) => {
        
        if(searchtype !=='title'){
            str = 'SELECT * FROM text where ' + searchtype + '=? '
    
        }else{
            str = "SELECT * FROM text where title like '%"+ sevalue +"%'"
        }
        connection.query(str,[sevalue],function(error,results,fields){
            if(results.length == 0 ){
                console.log(1);
                resolve({'status': 'failed','code':'400'})
            }
            else{
                resolve({'status':'success','results':results}) 
            }
        })
    }) 
    c.res.body = result;

})


//获取我的粉丝 //前端代码有了可以删除
app.get('/getfans',async c=>{
    c.res.body = fs.readFileSync('./getfans/index.html').toString('utf-8');
})

//接口
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

//删除我的粉丝 ，取消关注//前端代码有了可以删除

// app.get('/getfans')

//接口

app.post('/deletemyfansorfollows',async c=>{
    let {username,followuser} = JSON.parse(c.body)
    console.log(username,followuser);

    var result = await  new Promise((resolve) => {
        connection.query('DELETE FROM fans where username=? and followuser=? ',[username,followuser],function(error,results,fields){
            console.log(results);
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

//添加关注 //前端代码有了可以删除

// app.get('/getfans')

//接口

app.post('/addmyfollows',async c=>{
    let {username,followuser} = JSON.parse(c.body)
    console.log(username,followuser);

    var result = await  new Promise((resolve) => {
        connection.query('INSERT INTO fans SET ?',{username,followuser},function(error,results,fields){
            console.log(results);
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



//获取我的关注 //前端代码有了可以删除
app.get('/getfollows',async c=>{
    c.res.body = fs.readFileSync('./getfollows/index.html').toString('utf-8');
})


//接口
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


//获取我的关注的人的文章 //前端代码有了可以删除
app.get('/getfollowstext', async c=>{
    c.res.body = fs.readFileSync('./getfollowstext/index.html').toString('utf-8');
})

//获取我的关注的人的文章 的接口
app.post('/getmyfollowstext', async c=>{
    let username = JSON.parse(c.body)

    let str = 'SELECT * FROM text where username =? ';

    username.forEach((item,index) => {
        if(index !==0){
            str = str + 'or username =? '
        }
    })

    var result = await new Promise((resolve) => {
        connection.query(str,username,function(error,results,fields){
                if(results.length == 0 ){
                    resolve({'status': 'failed','code':'400'})
                }
                else{
                    resolve({'status':'success','results':results}) 
                }
        })
    }) 
    c.res.body = result;
    console.log(result)
})


//添加我的收藏的文章 //前端代码有了可以删除

// app.get('/save',async c=>{
//     c.res.body = index;
// })

//接口

app.post('/addsave', async c => {
    let {username, textid} = JSON.parse(c.body)
    var result = await new Promise((resolve) => {
        connection.query('INSERT INTO save VALUES(?,?)',[username,textid],function(error,results,fields){
                if(results.length == 0 ){
                    resolve({'status': 'failed','code':'400'})
                }
                else{
                    resolve({'status':'success','results':results})
                    console.log('插入成功');
                }
        })
    }) 
    connection.query('UPDATE text SET savenumber = savenumber+1 WHERE textid = ?',[textid],function (err, results){
        if(err) throw err;
        console.log('收藏+1');
    })
    c.res.body = result;
    console.log(result)

});

//删除我收藏的文章 //前端代码有了可以删除

// app.get('/save',async c=>{
//     c.res.body = index;
// })

//接口

app.post('/deletemysave', async c => {
    let {username, textid} = JSON.parse(c.body)
    var result = await new Promise((resolve) => {
        connection.query('delete from save where username=? and textid=?',[username,textid],function(error,results,fields){
                if(results.length == 0 ){
                    resolve({'status': 'failed','code':'400'})
                }
                else{
                    resolve({'status':'success','results':results})
                    console.log('删除成功');
                }
        })
    })
    connection.query('UPDATE text SET savenumber = savenumber-1 WHERE textid = ?',[textid],function (err, results){
            if(err) throw err;
            console.log('收藏-1');
    })
    c.res.body = result;
    console.log(result)
});




//获取我的收藏的文章 //前端代码有了可以删除
app.get('/getsavetext', async c=>{
    c.res.body = fs.readFileSync('./getsavetext/index.html').toString('utf-8');
})

//获取我的收藏的文章 的接口
app.post('/getmysavetext', async c=>{
    let username = JSON.parse(c.body)

    let str = 'SELECT * FROM save where username =? ';

    var result = await new Promise((resolve) => {
        connection.query(str,username,function(error,results,fields){
                if(results.length == 0 ){
                    console.log(1);
                    resolve({'status':'nosave','code':'400'})
                }
                else{
                    resolve({'status':'success','results':results}) 
                }
        })
    })
    if(result.status === 'nosave'){
        console.log(2);
        c.res.body = result
        return
    }

    let textidarr  =  []
    
    result.results.forEach((item,)=>{
        textidarr.push(item.textid)
    })
    // console.log(textidarr)
    
    let strr = 'SELECT * FROM text where textid =? ';
    
    textidarr.forEach((item,index)=>{
        if(index !==0){
            strr = strr + 'or textid =? '
        }
    })

    var result = await new Promise((resolve) => {
        connection.query(strr,textidarr,function(error,results,fields){
                if(results.length == 0 ){
                    resolve({'status': 'failed','code':'400'})
                }
                else{
                    resolve({'status':'success','results':results}) 
                }
        })
    }) 


    c.res.body = result;
    console.log(result);
})




app.run(1234,2)