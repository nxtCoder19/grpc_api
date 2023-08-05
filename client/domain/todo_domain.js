import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";

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

const client = new todoProto.TodoService(
  "localhost:6000",
  grpc.credentials.createInsecure()
);

const listTodos = (req, res) => {
  client.getTodo({}, (error, result) => {
    if (!error) {
      res.status(200).json(result);
    } else {
      res.status(400).json(error);
    }
  });
};

const createTodo = (req, res) => {
  const { name, todo } = req.body;
  const newTodo = {
    name: name,
    todo: todo,
  };
  console.log("new todo is", newTodo, req.body, name, todo);
  client.createTodo(newTodo, (error, todo) => {
    if (!error) {
      res.status(201).json(todo);
    } else {
      res.status(400).json(error);
    }
  });
};

export const todoDomain = {
  listTodos,
  createTodo,
};
