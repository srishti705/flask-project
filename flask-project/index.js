const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
  const data = JSON.parse(fs.readFileSync("api_data.json", "utf-8"));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

