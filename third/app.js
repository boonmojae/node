const express = require("express");

const aRouter = require('./a');//./a.js
const app = express();

const port = 3000;

//밑에 코드가 있으면 ejs를 사용한다는거라 파일이 없을때는 사용하면 안됨
// app.set("view engine", "ejs");
// app.set("views", "./views");

// app.use("/views", express.static(__dirname + "/views"));
// app.use("/public", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/a", aRouter);// /a가 오면 aRouter로 보내라 => a.js에 있는 router가 잠아줌


app.get("/api/goods", (req, res) => {
  res.send({
    goods: [
      {
        "goodsId": 1,
        "goodName": "상품 1",
        "category": "drink",
        "price": 1000
      },
    ]
  });
});


app.post("/api/todos", (req, res) => {
  res.send({
goods: [{
"goodsId": 1,
"goodName": "상품 1",
"category": "drink",
"price": 1000
},
{
  "goodsId": 2,
  "goodName": "상품 2",
  "category": "drink",
  "price": 3000
},
]});
});


app.get("/api/goods/:id", (req, res) => {
  res.send({
    goods: [{
      "goodsId": 1,
      "goodName": "상품 1",
      "category": "drink",
      "price": 1000
    },
    {
      "goodsId": 2,
      "goodName": "상품 2",
      "category": "drink",
      "price": 5000
    },
    ]
  });
});


app.put("/api/goods/:id", (req, res) => {
  res.render({
    goods: [{
      "goodsId": 1,
      "goodName": "상품 1",
      "category": "drink",
      "price": 1000
    },
    {
      "goodsId": 2,
      "goodName": "상품 2",
      "category": "drink",
      "price": 5000
    },
  ]
});
});


app.delete("/api/goods/:id", (req, res) => {
  res.render({
    goods: [{
      "goodsId": 1,
      "goodName": "상품 1",
      "category": "drink",
      "price": 1000
    }
    ]
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});