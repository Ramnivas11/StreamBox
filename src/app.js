const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "StreamBox API is running",
  });
});

app.get("/", (req, res) => {
  res.send("hello World");
});

module.exports = app;
