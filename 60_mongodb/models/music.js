const mongoose = require("mongoose");

// NoSQL에서 마치 RDB처럼 Schema를 만듦

const MusicSchema = new mongoose.Schema({
  singer: {
    type: String,
    required: true, // 필수적인가?
    trim: true, // 앞뒤 공백 제거
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now, // 현재 일시
  },
});

// 모델명s -> 컬렉션이 만들어짐
module.exports = mongoose.model("music", MusicSchema);
