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
                        resolve({'status': 'failed','code':'400'})
                    }
                    else{
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
app.get('/home',async c=>{
    c.res.body = fs.readFileSync('.loginandnewdata/login.html').toString('utf-8');
})


//首页接口 

var homedata ={};

app.get('/gethomedata',async c=>{
    var datalist = await Promise.all(
            [new Promise((resolve) => {  
                    connection.query("SELECT textid,title,titleimg from text  order by ctime desc limit 0,3",function (err, results){
                            if(err){
                                    throw err
                            }else{
                                    homedata.newtext = results;
                                    resolve({'result':homedata.newtext})

                            };
                    })
                    }),
            new Promise((resolve) => {  
                    connection.query("SELECT textid,title,titleimg from text where type='js' order by savenumber limit 0,3",function (err, results){
                                    if(err){
                                            throw err
                                    }else{
                                            homedata.js=results;
                                            resolve({'result':homedata.js})

                                    };
                            })
                    }),
            new Promise((resolve) => {  
                    connection.query("SELECT textid,title,titleimg from text where type='react' order by savenumber limit 0,3",function (err, results){
                                    if(err){
                                            throw err
                                    }else{
                                            homedata.react=results;
                                            resolve({'result':homedata.react})

                            };
                    })
                    }),
            new Promise((resolve) => {  
                    connection.query("SELECT textid,title,titleimg from text where type='nodejs' order by savenumber limit 0,3",function (err, results){
                            if(err){
                                    throw err
                            }else{
                                    homedata.nodejs=results;
                                    resolve({'result':homedata.nodejs})

                            };
                    })
                    }), 
            new Promise((resolve) => {  
                    connection.query("SELECT textid,title,titleimg from text where type='html' order by savenumber limit 0,3",function (err, results){
                            if(err){
                                    throw err
                            }else{
                                    homedata.html=results;
                                    resolve({'result':homedata.html})

                            };
                    })
                    }),
            new Promise((resolve) => {  
                    connection.query("SELECT textid,title,titleimg from text where type='css' order by savenumber limit 0,3",function (err, results){
                            if(err){
                                    throw err
                            }else{
                                    homedata.css=results;
                                    resolve({'result':homedata.css})
                            };
                    })
            })           
    ]).then(function(result){
            return homedata;

     })
     c.res.body = datalist;

})

//首页获取新锐推荐的文章 //前端代码有了可以删除

app.get('/1getrecommendtext',async c=>{
    c.res.body = fs.readFileSync('./getrecommendtexts/index.html').toString('utf-8')
})

//接口

app.get('/getrecommendtext',async c=>{
    // let username = JSON.parse(c.body);

    var result = await new Promise((resolve)=>{
        //SELECT textid,title from text  order by ctime desc limit 0,3
        connection.query('SELECT * from text order by savenumber desc limit 0,4',function(error,results){
            console.log('results:',results);
            if(results.length === 0){
                resolve({'status':'failed','code':'400'})
            }else{
                resolve({'status':'success','results':results})
            }
        })
    })

    c.res.body = result;
})



//获取发表的文章 //前端代码有了可以删除
app.get('/gettext',async c=>{
    c.res.body = fs.readFileSync('./gettext/index.html').toString('utf-8')
})

//接口
app.post('/gettexts',async c=>{
    let {searchtype,sevalue} = JSON.parse(c.body)
    
    let str = '';
    
    var result = await  new Promise((resolve) => {
        
        if(searchtype !=='title'){
            str = 'SELECT * FROM text where ' + searchtype + '=? '
    
        }else{
            str = "SELECT * FROM text where title like '%"+ sevalue +"%'"
        }

        connection.query(str,[sevalue],function(error,results,fields){
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


//获取我的粉丝数量和关注数量 //前端代码有了可以删除

// app.get

//接口

app.post('/getmyfansandfollowusernumber',async c=>{
    let username = JSON.parse(c.body);

    var result = await new Promise((resolve)=>{
        connection.query('SELECT fansnumber,followusernumber from login where username = ?',username,function(error,results){
            
            if(results.length === 0){
                resolve({'status':'failed','code':'400'})
            }else{
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

    var result = await  new Promise((resolve) => {
        connection.query('DELETE FROM fans where username=? and followuser=? ',[username,followuser],function(error,results,fields){

            if(results.length == 0 ){
                resolve({'status': 'failed','code':'400'})
            }
            else{

                connection.query('UPDATE login SET fansnumber = fansnumber - 1 where username = ?',username,function(error,results){
                    if(error) throw error;
                    console.log('删除我的粉丝成功，',username,'的粉丝数量减1');
                })

                connection.query('UPDATE login SET followusernumber = followusernumber - 1 where username = ? ',followuser,function(error,results){
                    if(error) throw error;
                    console.log('取消关注或被删除粉丝成功',followuser,'的关注数量减一');
                })

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

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM fans where username=? and followuser=? ',[username,followuser],function(error,results,fields){
            
            if(results.length !== 0) {
                resolve({'status':'Already exists','code':'400'})
            }
            else{

                connection.query('UPDATE login SET followusernumber = followusernumber + 1 where username = ? ',followuser,function(error,results){
                    if(error) throw error;
                    console.log('关注成功，',followuser,'的关注数量加1');
                })

                connection.query('UPDATE login SET fansnumber = fansnumber + 1 where username = ? ',username,function(error,results){
                    if(error) throw error;
                    console.log('关注成功，',username,'的粉丝数量加1');
                })

                connection.query('INSERT INTO fans SET ?',{username,followuser},function(error,results,fields){
                    console.log(results);

                    if(results.length == 0 ){
                        resolve({'status': 'failed','code':'400'})
                    }
                    else{
                        resolve({'status':'success'})   
                    }
                })
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

    let username1 = JSON.parse(c.body)
    var result1 = await new Promise((resolve) => {
        connection.query('SELECT * FROM fans where followuser = ? ',username1,function(error,results,fields){
            
            if(results.length == 0 ){
                resolve({'status': 'failed','code':'400'})
            }
            else{
                resolve({'status':'success','results':results}) 
            }
        })
    }) 

    let username = []

    result1.results.forEach((item,index)=>{
        username.push(item.username)
    })
    console.log(username);
    
    

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
})


//添加我的收藏的文章 //前端代码有了可以删除

// app.get('/save',async c=>{
//     c.res.body = index;
// })

//接口

app.post('/addmysave', async c => {
    let {username, textid} = JSON.parse(c.body)
    var result = await new Promise((resolve) => {

        connection.query('SELECT * FROM save where username =? and textid =? ',[username,textid],function(error,results,fields){
            
            if(results.length !==0){
                resolve({'status': 'Already save','code':'400'})
            }else{
                
                connection.query('INSERT INTO save VALUES(?,?)',[username,textid],function(error,results,fields){
                        if(results.length == 0 ){
                            resolve({'status': 'failed','code':'400'})
                        }
                        else{
                            
                            connection.query('UPDATE text SET savenumber = savenumber+1 WHERE textid = ?',[textid],function (err, results){
                                if(err) throw err;
                                console.log('收藏+1');
                            })
                            
                            resolve({'status':'success','results':results})
                            console.log('插入成功');
                        }
                    })
            }
        }) 
    })

    c.res.body = result;
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
                
                connection.query('UPDATE text SET savenumber = savenumber-1 WHERE textid = ?',[textid],function (err, results){
                        if(err) throw err;
                        console.log('收藏-1');
                })
                
                resolve({'status':'success','results':results})
                console.log('删除成功');
            }
        })
    })

    c.res.body = result;
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
                    resolve({'status':'nosave','code':'400'})
                }
                else{
                    resolve({'status':'success','results':results}) 
                }
        })
    })

    if(result.status === 'nosave'){
    
        c.res.body = result
        return
    }

    let textidarr  =  []
    
    result.results.forEach((item,)=>{
        textidarr.push(item.textid)
    })
    
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
})


//text

app.get('/p',async c=>{
    c.res.body = `${c.method} ${c.routepath}`
});

app.post('/p',async c=>{
    console.log('c.body:',c.body);
    c.res.body = c.body;
})

app.get('/q',async c=>{
    c.res.body = c.query;
})

//上传文件 文章图片

app.use(async (c,next)=>{
    let upf = c.getFile('image')
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

app.get('/upload',async c=>{
    c.res.body = fs.readFileSync('./upload/index.html').toString('utf-8')
})



app.post('/uploadtextimg',async c=>{

    // console.log(c.body.textid);
    let f = c.getFile('image')
    let textid = c.body.textid

    let fname = `${c.helper.makeName()}${c.helper.extName(f.filename)}`

    console.log(c.path);
    console.log(fname);

    
    try{
        await c.moveFile(f,'./uploadtextimg/'+fname)
        c.res.body =  JSON.stringify('../uploadtextimg/'+fname)
    }catch(err){
        c.res.body = err.message
    }

    connection.query('UPDATE text SET titleimg = ? WHERE textid = ?',[c.path+'/'+fname,textid],function(error,results,fields){
        if(error) throw error;
    })

},'uploadtextimg-image')

app.get('/uploadtextimg/*',async c=>{
    console.log(c.path);
    c.res.body = fs.readFileSync('.'+c.path)
})

//上传用户头像

app.use(async (c,next)=>{
    let upf = c.getFile('image')
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

},{method : 'POST',name : 'uploaduserimg-image'});

// app.get('/upload',async c=>{
//     c.res.body = fs.readFileSync('./upload/index.html').toString('utf-8')
// })



app.post('/uploaduserimg',async c=>{

    // console.log(c.body.textid);
    let f = c.getFile('image')
    let username = c.body.username

    let fname = `${c.helper.makeName()}${c.helper.extName(f.filename)}`

    console.log(c.path);
    console.log(fname);

    
    try{
        await c.moveFile(f,'./uploaduserimg/'+fname)
        c.res.body =  JSON.stringify('../uploaduserimg/'+fname)
    }catch(err){
        c.res.body = err.message
    }

    connection.query('UPDATE login SET userimg = ? WHERE username = ?',[c.path+'/'+fname,username],function(error,results,fields){
        if(error) throw error;
    })

},'uploaduserimg-image')

app.get('/uploaduserimg/*',async c=>{
    console.log(c.path);
    c.res.body = fs.readFileSync('.'+c.path)
})


//修改我的密码   //前端代码有了可以删除

app.get('/changepassword',async c=>{
    c.res.body = fs.readFileSync('./changepassword/index.html').toString('utf-8')
})

app.post('/changemypassword',async c=>{
    let {username,passwd,newpasswd} = JSON.parse(c.body)
    console.log(username,passwd,newpasswd);
    var result = await new Promise((resolve) => {
        connection.query('SELECT * FROM login where username = ? and passwd = ? ',[username,passwd],function(error,results,fields){
            if(results.length === 0 ){
                resolve({'status': 'passwdfailed','code':'400'})
            }
            else{
                connection.query('UPDATE login SET passwd = ? where username = ? ',[newpasswd,username],function(error,results,fields){
                    if(results.length === 0 ){
                        resolve({'status': 'failed','code':'400'})
                    }
                    else{
                        resolve({'status':'success'}) 
                    }
                })
            }
        })
    })


    c.res.body = result;
})

//后台管理系统

//登录接口

app.post('/getdata',async c=>{

    let{username,passwd} = JSON.parse(c.body);

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM login where username=? and passwd=? and role = 1',[username,passwd],function(error,results,fields){
        
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

//获取用户信息的接口

app.get('/getusersdata',async c=>{

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM login',function(error,results,fields){
        
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

//获取文章信息的接口

app.get('/gettextsdata',async c=>{

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM text',function(error,results,fields){
        
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

//删除用户信息的接口

app.get('/deleteuserdata',async c=>{
    c.res.body = fs.readFileSync('./deleteuserdata/index.html').toString('utf-8')
})

app.post('/deleteuserdata',async c=>{

    let{username} = JSON.parse(c.body);

    var result = await  new Promise((resolve) => {
        //delete from save where username=? and textid=?
        connection.query('DELETE FROM login where username=? ',[username],function(error,results,fields){
        
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


//删除文章信息的接口

app.post('/deletetextdata',async c=>{

    let{textid} = JSON.parse(c.body);

    var result = await  new Promise((resolve) => {
        //delete from save where username=? and textid=?
        connection.query('DELETE FROM text where textid=? ',[textid],function(error,results,fields){
        
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

app.run(1234)