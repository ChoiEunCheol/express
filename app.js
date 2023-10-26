const express = require('express');
const app = express();
const port = 8000;

app.use(express.json()); // JSON 데이터 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터 파싱

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static(__dirname));

// GET 요청을 처리
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

// POST 요청을 처리
app.post('/submit', (req, res) => {
  const data = req.body.inputData; // "inputData"는 입력 필드의 이름입니다
  console.log('POST 요청을 받았습니다:', data);
  res.send('POST 요청을 받았습니다. 입력한 내용: ' + data);
});

// 서버를 8000번 포트에서 시작
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});