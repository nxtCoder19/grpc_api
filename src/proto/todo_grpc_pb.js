// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_proto_todo_pb = require('../../src/proto/todo_pb.js');

function serialize_todo_Empty(arg) {
  if (!(arg instanceof src_proto_todo_pb.Empty)) {
    throw new Error('Expected argument of type todo.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_Empty(buffer_arg) {
  return src_proto_todo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_TodoList(arg) {
  if (!(arg instanceof src_proto_todo_pb.TodoList)) {
    throw new Error('Expected argument of type todo.TodoList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_TodoList(buffer_arg) {
  return src_proto_todo_pb.TodoList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_TodoResponse(arg) {
  if (!(arg instanceof src_proto_todo_pb.TodoResponse)) {
    throw new Error('Expected argument of type todo.TodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_TodoResponse(buffer_arg) {
  return src_proto_todo_pb.TodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_createTodoRequest(arg) {
  if (!(arg instanceof src_proto_todo_pb.createTodoRequest)) {
    throw new Error('Expected argument of type todo.createTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_createTodoRequest(buffer_arg) {
  return src_proto_todo_pb.createTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  createTodo: {
    path: '/todo.TodoService/createTodo',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_todo_pb.createTodoRequest,
    responseType: src_proto_todo_pb.TodoResponse,
    requestSerialize: serialize_todo_createTodoRequest,
    requestDeserialize: deserialize_todo_createTodoRequest,
    responseSerialize: serialize_todo_TodoResponse,
    responseDeserialize: deserialize_todo_TodoResponse,
  },
  // rpc updateTodo(updateTodoRequest) returns (TodoResponse) {}
getTodo: {
    path: '/todo.TodoService/getTodo',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_todo_pb.Empty,
    responseType: src_proto_todo_pb.TodoList,
    requestSerialize: serialize_todo_Empty,
    requestDeserialize: deserialize_todo_Empty,
    responseSerialize: serialize_todo_TodoList,
    responseDeserialize: deserialize_todo_TodoList,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
