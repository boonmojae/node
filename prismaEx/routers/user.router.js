import express from "express";
import { prisma } from "../utils/prisma/index.js"

const router = express.Router();

//새로운 유저 추가
router.post("/users", async (req, res, next) => {
  const { nickname, email, password } = req.body;

  //기존에 DB에 이메일이 있는지 없는지 확인
  try {
    const existingUser = await prisma.users.findUnique({
    where: { email }
  })

  if (existingUser) {
    return res.send({
      message: "중복된 아이디"
    })
  }

  //이메일이 있으면 종복 안내
  //자료형태는 prisma 공식 문서에 있음 data는 쓰라고 지정돼있어서 사용
  await prisma.users.create({
    data: {
      nickname,
      email,
      password
    }
  })
  return res.send({
    message: "회원가입 완료",
  })
  } catch(e) {
    console.log(e);
  }

});



//유저 조회
router.get("/users", async (req, res, next) => {

  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.json({ message: "사용자 목록 조회 실패" });
  }
});


// router.get("/users/:id", async (req, res, next) => {

//   const users = await prisma.users.findMany();
//   const { userId } = req.params;
//   const id = Number(userId);
//   const userExist = users.filter(user => user.userId === id);


//   if (userExist.length > 0) {
//     res.send(userExist);
//   } else {
//     res.send({ error: "못찾음" });
//   }

// });


//전체 유저 조회
router.get("/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const user = await prisma.users.findUnique({
      where: { userId: id },
    });

    if (!user) {
      return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버 에러" });
  }
});














export default router;