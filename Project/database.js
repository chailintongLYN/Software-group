'use strict'

const mysql = require('mysql'),
      fs = require('fs'),
      titbit = require('titbit'),
      http = require('http');
const { ok } = require('assert');


let index = fs.readFileSync('./index.html').toString('utf8');
let user = fs.readFileSync('./user.html').toString('utf8');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'uselogin'
});
connection.connect();

const app = new titbit({
    debug:true,
    globalLog:true
})
var {router} = app;
let dt = '';
// let username='',passwd='';
app.get('/',async c=>{
    c.res.body=index
})
router.post('/data', async c => {
    dt = c.body;
    console.log(dt)
    let {username, passwd} = JSON.parse(dt)
    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM userinfor where username=? and passwords=?',[username,passwd],function (error, results, fields){
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

app.get('/user' , async c=>{
    c.res.body = user;
})

app.run(8080)

