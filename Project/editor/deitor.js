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

let da = fs.readFileSync('./wangeditor.js').toString('utf8');
var {router} = app;
app.get('/',async c=>{

    c.res.body=index
})
app.get('*',async c=>{
    c.res.body = da;
})
router.post('/editor', async c => {
    let {type,title,text,username} = JSON.parse(c.body);
    console.log(type,title,text,username);
    connection.query('INSERT INTO text (username,type,title,text) VALUES (?,?,?,?)',[username,type,title,text],function (error, results, fields){
        if(error)
        { throw error;}else{
            console.log("ok")
            console.log(results)
        }
           
        
    });
});
app.run(12345)