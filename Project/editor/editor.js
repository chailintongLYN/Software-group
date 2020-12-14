'use strict'
const titbit = require('titbit')

const {cors} = require('titbit-toolkit')

const mysql = require('mysql')

const fs = require('fs')

const app = new titbit({
    debug: true,

    globalLog:true

})

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
router.post('/editor', async c => {
    let {type,title,text,username} = JSON.parse(c.body);
    console.log(type,title,text,username);
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
    c.res.body = results; 
});
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
app.run(1234)