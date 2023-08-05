import { Router } from "express";
import { todoDomain } from "../domain/todo_domain.js";

const todoRouter = Router();

todoRouter.get("/get-todos", todoDomain.listTodos);
todoRouter.post("/create-todo", todoDomain.createTodo);

export default todoRouter;
