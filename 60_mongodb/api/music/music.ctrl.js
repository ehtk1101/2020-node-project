const MusicModel = require("../../models/music");
const mongoose = require("mongoose");

// id 유효성 체크
const checkId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).end();
  }
  next();
};

// 목록조회 (localhost:3000/api/music?limit=10)
// - 성공 : limit 수만큼 music 객체를 담은 배열을 리턴 (200 : OK)
// - 실패 : limit가 숫자형이 아닐 경우 400 응답 (400: Bad Request)
const list = (req, res) => {
  const limit = parseInt(req.query.limit || 10, 10);
  if (Number.isNaN(limit)) return res.status(400).end();

  MusicModel.find((err, result) => {
    if (err) return res.status(500).end(); // internal server error
    //res.json(result);
    res.render("music/list", { result }); // {result : result}
  })
    .limit(limit)
    .sort({ created: -1 });
};

// 상세조회 (localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 music 객체 리턴 (200: OK)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const detail = (req, res) => {
  const { id } = req.params;

  MusicModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) res.status(404).end();

    //res.json(result);
    res.render("music/detail", { result });
  });
};

// 등록 (localhost:3000/api/music)
// - 성공 : 입력값으로 music 객체를 생성 후 배열에 추가 (201 : Created)
// - 실패 : singer, title 값 누락 시 400 응답 (400: Bad Request)
const create = (req, res) => {
  const { singer, title } = req.body;

  if (!singer || !title)
    return res.status(400).send("필수값이 입력되지 않았습니다.");

  /*// 1. Model -> Document
  const music = new MusicModel({ singer, title });
  music.save((err, result) => {
    if (err) return res.status(500).end();
    res.status(201).json(result);
  });*/

  // 2. Model
  MusicModel.create({ singer, title }, (err, result) => {
    if (err) return res.status(500).send("등록 시 오류가 발생했습니다.");
    res.status(201).json(result);
  });
};

// 수정 (localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 객체의 정보를 수정 후 반환 (200: OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const update = (req, res) => {
  const id = req.params.id;

  const { singer, title } = req.body;
  // 2. update
  MusicModel.findByIdAndUpdate(
    id,
    { singer, title },
    { new: true },
    (err, result) => {
      if (err) return res.status(500).send("수정 시 오류가 발생했습니다.");
      if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
      res.json(result);
    }
  );
};

// 삭제 (localhost:3000/api/music/{id})
// - 성공 : id에 해당하는 music 객체 삭제 후 결과 배열 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const remove = (req, res) => {
  const id = req.params.id;

  MusicModel.findByIdAndDelete(id, (err, result) => {
    if (err) res.status(500).send("삭제 시 오류가 발생했습니다.");
    if (!result) res.status(404).send("해당하는 정보가 없습니다.");
    res.json(result);
  });
};

const showCreatePage = (req, res) => {
  res.render("music/create");
};

const showUpdatePage = (req, res) => {
  const id = req.params.id;

  MusicModel.findById(id, (err, result) => {
    if (err) return res.status(500).send("조회 시 오류가 발생했습니다.");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
    res.render("music/update", { result });
  });
};

module.exports = {
  list,
  detail,
  create,
  update,
  remove,
  checkId,
  showCreatePage,
  showUpdatePage,
};
