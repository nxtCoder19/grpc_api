import express from "express";
import bodyParser from "body-parser";
import todoRouter from "./app/todo.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/todo", todoRouter);

app.use("/", (req, res) => {
  res.send("grpc api client connected");
});

const port = 4000;

app.listen(port, (err) => {
  if (err) {
    console.log("server is not listening");
    process.exit(1);
  }
  console.log(`server is listening on ${port}`);
});
