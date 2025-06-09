

const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

const db = require('./models')

async function testDbConnection() {
  try {
    await db.sequelize.authenticate();
    console.log('데이터베이스 연결 성공!');
  } catch (error) {
    console.error('데이터베이스 연결 실패:', error);
  }
}
testDbConnection();

app.post('/users', async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;

    const newUser = await db.User.create({
      firstName,
      lastName,
      email
    });

    // User 생성 후 한 번만 응답 보내기
    return res.send({
      msg: "새로운 유저를 넣었습니다.",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: '서버 에러가 발생했습니다.' });
  }
});



app.listen(PORT, () => {
  console.log(`Start server!!! http://localhost:${PORT}`);
})