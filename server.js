const express = require("express");
const path = require('path');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
