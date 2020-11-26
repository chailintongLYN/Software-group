'use strict'
const titbit = require('titbit'),
fs = require('fs')

let index = fs.readFileSync('./index.html').toString('utf-8');

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

    var result = await  new Promise((resolve) => {
        connection.query('SELECT * FROM login where username=? and password=?',[username,passwd],function(error,results,fields){
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

app.get('/login',async c=>{
    c.res.body = fs.readFileSync('./login.html').toString('utf-8');
})

app.get('/new',async c=>{
    
})

app.run(1234,2)
