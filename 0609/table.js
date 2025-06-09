const express = require('express');
const router = express.Router();

const tableList = 	
{
  "tableList": [
    "rawQueryTable",
    "rawQueryTable1"
  ]
}


//테이블 목록
router.get("/", (req, res) => {
  res.send(tableList);
});

//테이블 생성
router.post("/", (req, res) => {
  const { tableName } = req.body;
  if (!tableName) {
    return res.send({ message: "tableName이 필요합니다." });
  }
  
  tableList.tableList.push(tableName);
  
  res.send({ message: "테이블 생성에 성공하였습니다." });
});

// router.post("/", (req, res) => {
//   const { tableName } = req.body;

//   const newTable = {
//     tableName
//   };

//   tableList.push(newTable);

//   res.send({message:"테이블 생성에 성공하였습니다."});
// });

//데이터 삽입

//데이터 조회

module.exports = router;
