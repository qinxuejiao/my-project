// 模型文件
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  title: { type: String }, // 分类
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number },
  },
  // 技能
  skills:[{
    icon: { type: String },
    name: { type: String },
    description: { type: String },
    tips: { type: String },
  }],
  // 装备
  // 顺风出装
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
  // 逆风出装
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  // 使用技巧
  usageTips: { type: String },
  // 对抗技巧
  battleTips: {type: String},
  // 团战思路
  teamTips: { type: String },
  // 最佳搭档
  partner: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: String },
  }]
})

module.exports = mongoose.model('Hero', schema)