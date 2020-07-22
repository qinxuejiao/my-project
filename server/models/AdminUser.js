// 模型文件
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  username: { type: String },
  password: { 
    type: String, 
    select: false, // 默认查的时候不要带有password这个数据，这样密码在编辑状态的时候不会被散列
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)