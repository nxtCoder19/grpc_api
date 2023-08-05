import mongoose from "mongoose";
import { config } from "../../config.js";

const connection = mongoose.createConnection(config.mongoUri);

connection.on("error", console.error.bind(console, "connection error:"));
connection.on("connected", (err) => {
  if (err) {
    console.error("could not connect to mongodb because", err);
    process.exit(1);
  }
  console.log("DB connected...");
});
export const grpcTodoDb = connection.useDb("grpcTodo");
