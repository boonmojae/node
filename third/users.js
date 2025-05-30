const express = require('express');
const users = require('./usersList');

const router = express.Router();

router.get("/", (req, res) => {
  const tempRes = [];
  users.forEach((element) => {
    tempRes.push({ id: element });
  });
  res.send(tempRes);
});


router.post("/", (req, res) => {
  console.log("요청 body:", req.body);
  const { id } = req.body;
  const numId = Number(id);
  const userExists = users.includes(numId);

  if (userExists) {
    return res.send({ error: "이미 존재하는 사용자입니다." });
  }

  users.push(numId);
  res.send({ message: "사용자가 추가되었습니다", id: numId });
});


router.get("/:id", (req, res) => {
  const { id } = req.params;
  const numId = Number(id);
  const userExists = users.includes(numId);

  if (userExists) {
    return res.send({ id });
  }
  res.send({ error: "해당 사용자를 찾을 수 없습니다." });
});


router.delete("/:id", (req, res) => {
  console.log("삭제 param:", req.params);
  const { id } = req.params;
  const numId = Number(id);
  const userIndex = users.indexOf(numId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return res.send({
      message: "사용자가 삭제되었습니다."
    });
  }

  res.send({
    error: "해당 사용자를 찾을 수 없습니다."
  });
});

module.exports = router;