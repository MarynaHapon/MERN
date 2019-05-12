const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => res.send("API running"));

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
