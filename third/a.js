const express = require('express');

const router = express.Router();
//app.js에 있는 express를 변수 express에 담음
//그리고 express.Router()를 적용해 사용함

router.get("/", (req, res) => {// - /a/인 상태
  res.send("/a연결");
});

module.exports = router;//외부에서도 사용가능하게 exports