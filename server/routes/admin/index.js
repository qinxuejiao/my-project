const assert = require('http-assert')
const AdminUser = require('../../models/AdminUser')

module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })

  // 创建资源
  router.post('/', async(req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除资源
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  // 资源列表
  // 获取分类列表，populate关联取出parent字段
  router.get('/', async (req, req, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请提供jwt token')
    const { id } = jwt.verify(token, app.get('secret'))
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录')
    await next()
  }, async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
  // 资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  app.use('/admin/api/rest/:resource', async(req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)

  // __dirname：绝对地址 ;upload.single(file)表示单个文件的上传，同时字段名为file
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads'} )
  app.post('/admin/api/upload', upload.single('file'), async(req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
  
  app.post('/admin/api/login', async (req, res) => {
    // 解构赋值，取body中的username和password，然后分别赋值
    const { username, password } = req.body
    // 1.根据用户名找用户
    const AdminUser = require('../../models/AdminUser')
    const user = await AdminUser.findOne({username}).select('+password')
    
    assert(user, 422, '用户不存在')
    
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    
    assert(isValid, 422, '密码错误')
    
    // 3.返回token
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({ id: user._id}, app.get('secret'))
    res.send({ token })
  })

  // 错误处理
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}