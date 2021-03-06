const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const port = 3000;

// 바디파서 설정 (middleware)
// true: qs(확장모듈), false: querystring(기본모듈 이용)
// content type : x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// 메시지가 JSON인 경우 메시지를 분석해주는 바디파서 설정
app.use(bodyParser.json());

// 정적 파일 위치 설정
// 127.0.0.1:3000/music.html
app.use(express.static("public")); // html을 요청하면 public/xx.html
// 127.0.0.1:3000/static/music.html
//app.use("/static", express.static("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// 로깅 설정
app.use(logger("dev")); // tiny, dev, short, common, combined

// 라우팅 모듈 설정
/*const music = require("./api/music.js");
app.use("/music", music);*/
app.use("/api", require("./api")); // api/index (index.js가 default값이다.)

// 여기까지 내려왔다는 것은 위에서 처리가 안된 것
app.use((req, res, next) => {
  //throw new Error("없는 페이지입니다.");
  const error = new Error("없는 페이지입니다.");
  error.code = 404;
  next(error);
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  //if (err.code) res.status(err.code);
  //else res.status(500);
  res.status(err.code || 500);
  //if (err.message) res.send(err.meassage);
  //else res.send("Internal Server Error");
  res.send(err.message || "Internal Server Error");
});

// get
// - query string : req.query.xxx
// - url parameter : req.params.xxx
// post
// - form : req.body.xxx -> body-parser
// - url parameter : req.params.xxx

// REST API
// HTTP 경로로 자원을 요청 (모든 자원은 명사로 식별)
// 사용자 조회 : 127.0.0.1:3000/searchUser?id=100
// -> 127.0.0.1:3000/user/100
// HTTP 메소드 (CRUD)
// 1. GET : 자원을 조회  -> 127.0.0.1:3000/user, 127.0.0.1:3000/user/100
// 2. POST : 자원을 생성 -> 127.0.0.1:3000/user
// 3. PUT : 자원을 갱신  -> 127.0.0.1:3000/user/100
// 4. DELETE : 자원을 삭제 -> 127.0.0.1:3000/user/100

// (bad case)
// test.com/user/serarch
// test.com/user/create
// test.com/user/update
// test.com/user//delete
