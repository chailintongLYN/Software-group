'use strict'
const titbit = require('titbit')

const {cors,resource} = require('titbit-toolkit')

const mysql = require('mysql')

const fs = require('fs')

const app = new titbit({
    debug: true,
    
    globalLog:true
    
})

app.use( (new cors()).mid() )

//启用静态文件组件
let st = new resource({
    //设定静态资源所在目录
    staticPath: './public',

    //默认就是/static/*,
    //这个是访问静态资源的路由，你必须要有一个路由前缀的，否则容易导致路由冲突。
    /*
      假设在public目录存在文件 css/a.css
      这里设定好/static/*，在前端页面访问css则可以这样使用：
        <link rel="stylesheet" href="/static/css/a.css">

      /static后面的是路径参数。
    */
    routePath : '/static/*',

    //静态资源路由所在分组。
    routeGroup: '_static',

    //设置最大缓存100M，这会缓存读取过的文件，缓存在内存中不会再次去读取文件。
    maxCacheSize: 100000000
  })

  st.init(app)

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'myfavorite'
});
connection.connect();


let index = fs.readFileSync('./editor.html').toString('utf8');
let pcload = fs.readFileSync('./pcload.html').toString('utf8');


let da = fs.readFileSync('./wangeditor.js').toString('utf8');
var {router} = app;
app.get('/',async c=>{

    c.res.body=pcload
})
app.get('/editor',async c=>{
    c.res.body = index
})
app.get('*',async c=>{
    c.res.body = da;
})

app.use(async (c,next)=>{
    let upf = c.getFile('image');
    console.log('image:',c.getFile('image'));
    console.log('这里是app.use');
    if(!upf){
        c.res.body = 'file not found'
        return
    }

    //100k
    else if(upf.length > 100000){
        c.res.body = 'max file size : 100k'
        return
    }
    await next()
},{method : 'POST',name : 'uploadtextimg-image'});

app.post('/uploadtextimg',async c=>{

    console.log('这里是app.post');

    let f = c.getFile('image')

    let fname = `${c.helper.makeName()}${c.helper.extName(f.filename)}`

    console.log(c.path);
    console.log(fname);

    let{title,text,username,type} = c.body
    var results = await  new Promise((resolve) => {
        connection.query('INSERT INTO text (username,type,title,text) VALUES (?,?,?,?)',[username,type,title,text],function (error, results, fields){
            if(error){
                resolve({'status': 'faild'}) 
                throw error;
            }else{
                console.log("ok")
                resolve({'status':'success'}) 
            }
        }) 
    });
    try{
        await c.moveFile(f,'./public/uploadtextimg/'+fname)
        c.res.body =  {'results':results,'imagepath':'http://localhost:12345/static/uploadtextimg/'+fname}
    }catch(err){
        c.res.body = {'results':results,'imageerror':err.message}
    }


    var results = await  new Promise((resolve) => {
        connection.query('SELECT * from text order by textid desc limit 0,1',function(error,results){
            if(error){
                throw error;
            }else{
                resolve(results)
            }
        })
    });

    console.log('textid:',results[0].textid);

    let textid = results[0].textid

    connection.query('UPDATE text SET titleimg = ? WHERE textid = ?',['http://localhost:1234/static'+c.path+'/'+fname,textid],function(error,results,fields){
        if(error) throw error;
    })

},'uploadtextimg-image')

app.get('/static/uploadtextimg/*',async c=>{
    console.log('这里是app.get');
    console.log(c.path);
    c.res.body = fs.readFileSync('.'+c.path)
})

// app.post('/editor',async c=>{
//     let{title,text,username,type} = c.body
//     var results = await  new Promise((resolve) => {
//         connection.query('INSERT INTO text (username,type,title,text) VALUES (?,?,?,?)',[username,type,title,text],function (error, results, fields){
//             if(error){
//                 resolve({'status': 'faild'}) 
//                 throw error;
//             }else{
//                 console.log("ok")
//                 resolve({'status':'success'}) 
//             }
//         }) 
//     });
    
//     c.res.body = {'results':results};
// })
// router.post('/editor', async c => {
//     let {type,title,text,username} = JSON.parse(c.body);
//     console.log(type,title,text,username);
//     var results = await  new Promise((resolve) => {
//     connection.query('INSERT INTO text (username,type,title,text) VALUES (?,?,?,?)',[username,type,title,text],function (error, results, fields){
//             if(error){
//                 resolve({'status': 'faild'}) 
//                 throw error;
//             }else{
//                 console.log("ok")
//                 resolve({'status':'success'}) 
//             }
//         }) 
//     });
//     c.res.body = results; 
// });
app.get('/pcload',async c=>{
    c.res.body=pcload
})

router.post('/data', async c => {
    var dt = c.body;
    console.log(dt)
    let {username, passwd} = JSON.parse(dt)
    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM login where username=? and passwd=?',[username,passwd],function (error, results, fields){
        console.log(results)
            if(results==''){
                resolve({'status': 'faild'})
            }
            else{
                resolve({'status':'success'}) 
            }
        })
    }) 
    c.res.body = result; 
});
app.run(12345)