const express = require("express");
const connectDB = require("./config/db");
const apiRouter = require("./routes");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());

app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log("Server is Up and Running");
});
