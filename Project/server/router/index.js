const express = require('express')
const router = express.Router()
const user = require('../controller/user')
const article = require('../controller/article')

router.get('/api/user', user.list)
router.post('/api/user/del', user.del)

router.get('/api/article', article.list)
router.post('/api/article/del', article.del)

module.exports = router
