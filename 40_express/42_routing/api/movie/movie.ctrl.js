// 데이커
let movie = [
  { id: 1, title: "Harry Potter", director: "David Yates", year: 2007 },
  { id: 2, title: "아바타", director: "제임스 카메론", year: 2009 },
  { id: 3, title: "인터스텔라", director: "크리스토퍼 놀란", year: 2014 },
];
let nextId = 4;
// 목록조회 (localhost:3000/api/music?limit=10)
// - 성공 : limit 수만큼 music 객체를 담은 배열을 리턴 (200 : OK)
// - 실패 : limit가 숫자형이 아닐 경우 400 응답 (400: Bad Request)
const list = (req, res) => {
  const limit = parseInt(req.query.limit || 10, 10);
  if (Number.isNaN(limit)) return res.status(400).end();

  res.json(movie.slice(0, limit));
};

// 상세조회
// - 성공 : id에 해당하는 music 객체 리턴 (200: OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답 (400: Bad Request)
//          해당하는 id가 없는 경우 404 dmdekq (404: Not Found)
const detail = (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) return res.status(400).end();

  const result = movie.find((m) => m.id === id);
  if (!result) return res.status(404).end();

  res.json(result);
};

// 등록 (localhost:3000/api/music)
// - 성공 : 입력값으로 music 객체를 생성 후 배열에 추가 (201 : Created)
// - 실패 : singer, title 값 누락 시 400 응답 (400: Bad Request)
const create = (req, res) => {
  const { title, director } = req.body;
  const year = parseInt(req.body.year, 10);

  if (!title || !director || !year) return res.status(400).end();

  const m = { id: nextId++, title, director, year };
  movie.push(m);
  res.status(201).json(movie);
};

// 수정 (localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 객체의 정보를 수정 후 반환 (200: OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  const result = movie.find((m) => m.id === id);
  if (!result) return res.status(404).end();

  const { title, director } = req.body;
  const year = parseInt(req.body.year, 10);

  if (title) result.title = title;
  if (director) result.director = director;
  if (year) result.year = year;

  res.json(result);
};

// 삭제 (localhost:3000/api/music/{id})
// - 성공 : id에 해당하는 music 객체 삭제 후 결과 배열 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400: Bad Request)
//          해당하는 id가 없는 경우 404 응답 (404: Not Found)
const remove = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) return res.status(400).end();

  const result = movie.find((m) => m.id === id);
  if (!result) return res.status(404).end();

  movie = movie.filter((m) => m.id !== id);
  res.json(movie);
};

module.exports = { list, detail, create, update, remove };
