const express = require('express');
const app = express();

const tRouter = require('./table');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/api/table", tRouter);  


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

