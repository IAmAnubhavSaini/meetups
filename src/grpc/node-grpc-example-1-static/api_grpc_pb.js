// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_pb = require('./api_pb.js');

function serialize_myapp_Empty(arg) {
  if (!(arg instanceof api_pb.Empty)) {
    throw new Error('Expected argument of type myapp.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_Empty(buffer_arg) {
  return api_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_EndpointsResponse(arg) {
  if (!(arg instanceof api_pb.EndpointsResponse)) {
    throw new Error('Expected argument of type myapp.EndpointsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_EndpointsResponse(buffer_arg) {
  return api_pb.EndpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_GreetResponse(arg) {
  if (!(arg instanceof api_pb.GreetResponse)) {
    throw new Error('Expected argument of type myapp.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_GreetResponse(buffer_arg) {
  return api_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_UpdateGreetRequest(arg) {
  if (!(arg instanceof api_pb.UpdateGreetRequest)) {
    throw new Error('Expected argument of type myapp.UpdateGreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_UpdateGreetRequest(buffer_arg) {
  return api_pb.UpdateGreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_UserRequest(arg) {
  if (!(arg instanceof api_pb.UserRequest)) {
    throw new Error('Expected argument of type myapp.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_UserRequest(buffer_arg) {
  return api_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_UserResponse(arg) {
  if (!(arg instanceof api_pb.UserResponse)) {
    throw new Error('Expected argument of type myapp.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_UserResponse(buffer_arg) {
  return api_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_UsersResponse(arg) {
  if (!(arg instanceof api_pb.UsersResponse)) {
    throw new Error('Expected argument of type myapp.UsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_UsersResponse(buffer_arg) {
  return api_pb.UsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var APIServiceService = exports.APIServiceService = {
  getEndpoints: {
    path: '/myapp.APIService/GetEndpoints',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.Empty,
    responseType: api_pb.EndpointsResponse,
    requestSerialize: serialize_myapp_Empty,
    requestDeserialize: deserialize_myapp_Empty,
    responseSerialize: serialize_myapp_EndpointsResponse,
    responseDeserialize: deserialize_myapp_EndpointsResponse,
  },
  getGreet: {
    path: '/myapp.APIService/GetGreet',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.Empty,
    responseType: api_pb.GreetResponse,
    requestSerialize: serialize_myapp_Empty,
    requestDeserialize: deserialize_myapp_Empty,
    responseSerialize: serialize_myapp_GreetResponse,
    responseDeserialize: deserialize_myapp_GreetResponse,
  },
  updateGreet: {
    path: '/myapp.APIService/UpdateGreet',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.UpdateGreetRequest,
    responseType: api_pb.GreetResponse,
    requestSerialize: serialize_myapp_UpdateGreetRequest,
    requestDeserialize: deserialize_myapp_UpdateGreetRequest,
    responseSerialize: serialize_myapp_GreetResponse,
    responseDeserialize: deserialize_myapp_GreetResponse,
  },
  createOrUpdateUser: {
    path: '/myapp.APIService/CreateOrUpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.UserRequest,
    responseType: api_pb.UserResponse,
    requestSerialize: serialize_myapp_UserRequest,
    requestDeserialize: deserialize_myapp_UserRequest,
    responseSerialize: serialize_myapp_UserResponse,
    responseDeserialize: deserialize_myapp_UserResponse,
  },
  getUsers: {
    path: '/myapp.APIService/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.Empty,
    responseType: api_pb.UsersResponse,
    requestSerialize: serialize_myapp_Empty,
    requestDeserialize: deserialize_myapp_Empty,
    responseSerialize: serialize_myapp_UsersResponse,
    responseDeserialize: deserialize_myapp_UsersResponse,
  },
};

exports.APIServiceClient = grpc.makeGenericClientConstructor(APIServiceService);
