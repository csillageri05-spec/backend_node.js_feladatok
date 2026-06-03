

const express = require("express");
const app = express();

require("./config/db");

app.use(express.json());

// routes import
const termekRoutes = require("./routes/termekRoutes");

// route használat
app.use("/termek", termekRoutes);

app.get("/", (req, res) => {
  res.send("API működik");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Szerver fut a ${PORT} porton`);
});

app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});