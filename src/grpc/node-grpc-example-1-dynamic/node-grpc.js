const grpc = require("@grpc/grpc-js");
const loader = require("@grpc/proto-loader");

const fs = require("fs");

const packageDefinition = loader.loadSync("api.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const myapp = grpc.loadPackageDefinition(packageDefinition).myapp;
const server = new grpc.Server();

const endpoints = ["GET /api", "GET /api/greet", "PUT /api/greet", "GET /api/users", "POST /api/users",];
let users = [];

// gRPC Service Implementation
server.addService(myapp.APIService.service, {
    GetEndpoints: (_, callback) => {
        callback(null, {endpoints});
    },
    GetGreet: (_, callback) => {
        const greetings = fs.readFileSync("./greetings").toString().split("\n")[0];
        callback(null, {message: greetings});
    },
    UpdateGreet: (req, callback) => {
        const {message} = req.request;
        // console.log({message});
        fs.writeFileSync("./greetings", Buffer.from(message));
        callback(null, {message});
    },
    CreateOrUpdateUser: (req, callback) => {
        const {
            username,
            email
        } = req.request;
        const maybeUser = users.find(u => u.username === username);
        let message = `User ${username} <${email}> created successfully!\nTotal users: ${users.length}`;
        if (maybeUser) {
            message = `User ${username} <${maybeUser.email}> updated successfully to ${username} <${email}>!\nTotal users: ${users.length}`;
            maybeUser.email = email;
        } else {
            users.push({
                username,
                email
            });
        }
        callback(null, {
            message
        });
    },
    GetUsers: (_, callback) => {
        callback(null, {users});
    },
});

server.bindAsync("localhost:50051", grpc.ServerCredentials.createInsecure(), (error) => {
    if (error) {
        console.error(error);
        return;
    }
    server.start();
});

console.log("gRPC server running on port 50051");
