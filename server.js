const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { dbconnection } = require("./db/dbconnection");
const adminInit = require("./utils/admininit");

const app = express();

dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
const userHandler = require("./routes/users.routes");
const { notFound, errorHandler } = require("./middlewares/defaultErrorMiddlewares");

app.use("/api/user", userHandler);

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("APP is running..");
  });
}
// --------------------------deployment------------------------------

//bad request
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

//error handling
app.use(notFound);
app.use(errorHandler);

//port
const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
  dbconnection();
  adminInit();
});
