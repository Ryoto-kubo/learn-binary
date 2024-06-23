const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const port = 3000;

app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });
app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("Success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
