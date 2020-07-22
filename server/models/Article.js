// 模型文件
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  // ref 表示关联的是哪个模型，这块它关联的是Category
  categories: [{
    type: mongoose.SchemaTypes.ObjectId, ref: 'Category'
  }],
  title: { type: String },
  body: { type: String },
})

module.exports = mongoose.model('Article', schema)