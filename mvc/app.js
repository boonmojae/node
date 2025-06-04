const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const PORT = 8080;

// app.set("views", "./views");

// app.set('view engine', 'ejs');
// app.use('/views', express.static(__dirname + '/views'));
// app.use('/static', express.static(__dirname + '/static'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);








app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})