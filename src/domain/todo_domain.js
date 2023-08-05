import mongoose from "mongoose";
import { grpcTodoDb } from "../pkg/mongo/connect.js";

const grpcTodoSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  todo: { type: String },
});

const grpcTodoModel = grpcTodoDb.model("grpcListTodo", grpcTodoSchema);

const addTodo = async (name, todo) => {
  const addedTodo = await grpcTodoModel.create({ name, todo });
  return addedTodo;
};

const getTodos = async () => {
  const todos = await grpcTodoModel.find();
  return todos;
};

export const graphqltodoDomain = {
  addTodo,
  getTodos,
};
