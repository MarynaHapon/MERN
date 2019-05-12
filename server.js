const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;

const app = express();
connectDB();

app.get("/", (req, res) => res.send("API running"));

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
