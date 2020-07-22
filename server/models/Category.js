// 模型文件
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: {
    type: String
  },
  // ref 表示关联的是哪个模型，这块它关联的是Category
  parent: {
    type: mongoose.SchemaTypes.ObjectId, ref: 'Category'
  },
})

module.exports = mongoose.model('Category', schema)