import express from "express";
import { config } from "./config.js";
import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";
import { TodoDomain } from "./domain/index.js";

const packageDefinition = protoLoader.loadSync(
  // `${process.cwd()}/proto/todo.proto`,
  "/home/piyush/WorkSpace/node_workspace/todo_api/todo_grpc_api/src/proto/todo.proto",
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const todoProto = grpc.loadPackageDefinition(packageDefinition).todo;

const server = new grpc.Server();
server.addService(todoProto.TodoService.service, {
  getTodo: TodoDomain.getAlltodos,
  createTodo: TodoDomain.createTodo,
});

server.bind(`0.0.0.0:${config.port}`, grpc.ServerCredentials.createInsecure());
console.log(`Server running at ${config.port}`);
server.start();

// app.use("/", (req, res) => {
//   res.send("grpc server");
// });

// app.listen(config.port, (err) => {
//   if (err) {
//     console.log("server has not started");
//     process.exit(1);
//   }
//   console.log(`server is runnong on ${config.port}`);
// });
