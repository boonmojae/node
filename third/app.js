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


const users = [1, 2, 3, 4, 5];
const posts = [
  {
    "id": 1,
    "userId": 2,
    "title": "첫 번째 글",
    "content": "안녕하세요 게시판입니다.",
    "createdAt": "2025-05-29T10:00:00Z"
  },
  {
    "id": 2,
    "userId": 2,
    "title": "두 번째 글",
    "content": "안녕하세요 게시판2입니다.",
    "createdAt": "2025-05-29T10:00:00Z"
  }
];


app.get("/users", (req, res) => {
  const tempRes = [];
  users.forEach((element) => {
    tempRes.push({ id: element });
  });
  res.send(tempRes);
});


app.post("/users", (req, res) => {
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


app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const numId = Number(id);
  const userExists = users.includes(numId);

  if (userExists) {
    return res.send({ id });
  }
  res.send({ error: "해당 사용자를 찾을 수 없습니다." });
});


app.delete("/users/:id", (req, res) => {
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



app.get("/posts", (req, res) => {
  res.send(posts);
})


app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const numId = Number(id);

  const post = posts.find(p => p.id === numId);

  if (!post) {
    return res.status(404).send({ error: "게시글을 찾을 수 없습니다." });
  }

  res.send(post);
});


app.get("/users/:id/posts", (req, res) => {
  const { id } = req.params;
  const numId = Number(id);
  const userExists = users.includes(numId);

  if (!userExists) {
    return res.status(404).send({ error: "해당 사용자를 찾을 수 없습니다." });
  }

  const userPosts = posts.filter(post => post.userId === numId);
  res.send(userPosts);
});


app.post("/posts", (req, res) => {
  const { userId, title, content } = req.body;

  const newPost = {
    id: posts.length + 1,
    userId,
    title,
    content,
    createdAt: new Date().toISOString()
  };

  posts.push(newPost);

  res.send({
    post: newPost
  });
});


app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const numId = Number(id);

  const post = posts.find(p => p.id === numId);

  if (!post) {
    return res.status(404).send({ error: "해당 게시글을 찾을 수 없습니다." });
  }

  if (title) post.title = title;
  if (content) post.content = content;

  res.send({
    post,
  });
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const numId = Number(id);

  const postIndex = posts.findIndex(p => p.id === numId);

  if (postIndex === -1) {
    res.send({ error: "해당 게시글을 찾을 수 없습니다." });
  } else {
    posts.splice(postIndex, 1);
    res.send({ message: "게시글이 성공적으로 삭제되었습니다." });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});