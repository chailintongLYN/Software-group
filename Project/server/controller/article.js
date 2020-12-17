var db = require("../model/db"); //引入数据库封装模块

exports.list = (req, res) => {
  let params = Object.keys(req.query).length ? req.query : req.body
  let { title } = params;
  const where = `where title LIKE '%${title}%'`
  db.query(`select * from text ${title ? where : ''}`, [title], (result) => {
    return res.json(result)
  })
}
exports.del = (req, res) => {
  let params = Object.keys(req.query).length ? req.query : req.body
  let { id } = params;
  console.log('id :>> ', id);
  db.query(`delete from text where textid = '?' `, [id], (result) => {
    return res.json({ msg: '删除成功' })
  })
}