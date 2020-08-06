const mongoose = require("mongoose");

// NoSQL에서 마치 RDB처럼 Schema를 만듦

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // 필수적인가?
    trim: true, // 앞뒤 공백 제거
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
});

// 모델명s -> 컬렉션이 만들어짐
module.exports = mongoose.model("user", UserSchema);
