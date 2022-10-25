const express = require("express");
const cors = require("cors");
const app = express();
const { dbconnection } = require("./db/dbconnection");
const userHandler = require("./routes/users.routes");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api/user", userHandler);

app.get("/", (req, res) => {
  res.send("Server is running");
});

//port
const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
  dbconnection();
});
