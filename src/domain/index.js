import { graphqltodoDomain } from "./todo_domain.js";

const createTodo = async function createTodo(call, callback) {
  const { name, todo } = call.request;
  const addedTodo = await graphqltodoDomain.addTodo(name, todo);
  callback(null, addedTodo);
};

const getAlltodos = async function getAllTodos(call, callback) {
  const todos = await graphqltodoDomain.getTodos();
  callback(null, { todos: todos });
};

export const TodoDomain = {
  createTodo,
  getAlltodos,
};
