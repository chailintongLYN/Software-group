var db = require("../model/db"); //引入数据库封装模块

exports.list = (req, res) => {
  let params = Object.keys(req.query).length ? req.query : req.body
  let { name } = params;
  const where = `where username LIKE '%${name}%'`
  db.query(`select * from login ${name ? where : ''}`, [name], (result) => {
    return res.json(result)
  })
}
exports.del = (req, res) => {
  let params = Object.keys(req.query).length ? req.query : req.body
  let { id } = params;
  console.log('id :>> ', id);
  db.query(`delete from login where uid = '?' `, [id], (result) => {
    return res.json({ msg: '删除成功' })
  })
}