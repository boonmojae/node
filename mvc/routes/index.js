const express = require('express');
const router = express.Router();
const controller = require('../controller');// '../controller/index'동일하게 적용 => index만 자동으로 찾음

router.get("/", controller.getMain);

router.post('/', controller.postMain);

router.get("/:id", controller.getId);//getId() 괄호가 없는건 함수 자체(참조)



module.exports = router;