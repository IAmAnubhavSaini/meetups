const grpc = require('@grpc/grpc-js');
const loader = require('@grpc/proto-loader');

const packageDefinition = loader.loadSync('api.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const myapp = grpc.loadPackageDefinition(packageDefinition).myapp;
const server = new grpc.Server();

const endpoints = [
  'GET /api',
  'GET /api/greet',
  'PUT /api/greet',
  'GET /api/users',
  'POST /api/users',
];
let greetings = 'Hello, this is a GRPC API!';
let users = [];

// gRPC Service Implementation
server.addService(myapp.APIService.service, {
  GetEndpoints: (_, callback) => {
    callback(null, { endpoints });
  },
  GetGreet: (_, callback) => {
    callback(null, { message: greetings });
  },
  UpdateGreet: (req, callback) => {
    const { message } = req;
    greetings = message;
    callback(null, { message: greetings });
  },
  CreateOrUpdateUser: (req, callback) => {
    const { username, email } = req;
    users.push({ username, email });
    callback(null, {
      message: `User ${username} <${email}> created successfully!\nTotal users: ${users.length}`,
    });
  },
  GetUsers: (_, callback) => {
    callback(null, { users });
  },
});

server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), (error) => {
    if (error) {
        console.error(error);
        return;
    }
    server.start();
});

console.log('gRPC server running on port 50051');