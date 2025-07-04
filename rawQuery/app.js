//라이브러리 import
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const PORT = 3000;
const app = express();
app.use(express.json());

//데이터베이스 연결
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
}).promise();


app.post('/api/tables/', async (req, res, next) => {

  const { tableName } = req.body;
  console.log(tableName);

  //테이블 생성
  await db.query(`
    CREATE TABLE ${tableName}
    (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      createAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
    `);

  // res.send("태이블 생성")
  return res.json({ message: "테이블 생성에 성공"});
});


app.get('/api/tables', async (req, res, next) => {
  res.send("태이블 조회")
})

app.post('/api/tables/:tableName/items', (req, res, next) => {
  res.send("데이터터 값 등록")
});

app.get('/api/tables/:tableName/items', (req, res, next) => {
  res.send("데이터터 값 조회")
})
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});

