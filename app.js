require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const noteRouter = require("./api/notes/notes.router");

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/notes", noteRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server running on PORT : ", process.env.APP_PORT);
});
