const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;

const app = express();
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

// routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
