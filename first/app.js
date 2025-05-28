// const express = require("express");
// const app = express();
// const port = 3000;

// app.set("view engine", "ejs");

// app.use("/views", express.static(__dirname + "/views"));
// app.use("/public", express.static(__dirname + "/public"));

// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// app.get("/", function (req, res) {
//   res.render("index", { title: "폼 실습을 해봅시다" });
// });

// app.get("/getForm", (req, res) => {
//   console.log(req.query);

//   res.render("result", {
//     title: "GET 요청 폼 결과 확인하기",
//     userInfo: req.query,
//   });
// });

// app.post("/postForm", (req, res) => {
//   console.log(req.query);

//   res.render("result", {
//     title: "Post 요청 폼 결과 확인하기", 
//     userInfo: req.body
//   });
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "options": ["side mirror", "smart sensor", "built-in cam"]
}`;
console.log(car); // format: JSON