// #!/usr/bin/env node

// const fs = require('fs'),
//       html = fs.readFileSync('./index.html').toString('utf-8'),
//       http = require('http');


// http.createServer((req,res)=>{

//     if(req.url === '/'){
//         res.end(html);
//     }else{
//         res.end('NOT FOUND')
//     }
// }).listen(8080);
'use strict'
const titbit = require('titbit')

class login {

  constructor () {
    this.param = '/'
  }

  async get (c) {
    
    c.setHeader('content-type', 'text/html; charset=utf-8')

    let html = await c.helper.readb( c.service.pagePath + '/login.html' )

    c.send(html)

  }

  async post (c) {
    try {
      
      let {username, passwd} = JSON.parse(c.body)

      if (c.service.testUser[username] === undefined) {
        c.send('login failed.', 400)
        return
      }

      let u = c.service.testUser[username]

      if (c.service.funcs.hashPasswd(passwd, u.salt) !== u.passwd) {
        c.send('login failed', 400)
        return
      }
      
      //3小时token有效
      let expires = 10800000
      let login_time = Date.now()

      //生成token，之后在userpass中间件中通过解密token即可获得用户信息。
      let token = c.service.token.make({
        id : u.id,
        ip : c.ip,
        time : login_time,
        expires : expires,
      }, c.service.tokenKey)

      c.send({
        token : token,
        userinfo : {
          nickname : u.nickname,
          expires : expires,
          time : login_time
        }
      })

    } catch (err) {

      console.error(err)
      
      //自21.8.1版本开始，send支持第二个参数作为状态码。
      //状态码是数字，你不需要考虑http和http2模块的差异，因为其内部调用status函数已经屏蔽了差异。
      // ！http2要求的返回消息头部状态码必须是字符串，而接收的状态码Node.js会自动转换为数字。

      c.send('login failed', 400)

    }
  }

}

module.exports = login
