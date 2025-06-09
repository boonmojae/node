import express from "express"// const express = require('express');역할을 대신함
import userRouter from "./routers/user.router.js"


const PORT = 4000;
const app = express();
app.use(express.json())

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});