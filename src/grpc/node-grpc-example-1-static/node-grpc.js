const fs = require("fs");

const messages = require("./api_pb");
// console.log({messages});

const services = require("./api_grpc_pb");
// console.log({services});

const grpc = require("@grpc/grpc-js");

function greet({request}, callback) {
    const reply = new messages.GreetResponse();
    reply.setMessage("hello");
    callback(null, reply);
}

function getSupportedEndpoints({request}, callback) {
    const reply = new messages.EndpointsResponse();
    try {
        const endpoint_data = JSON.parse(fs.readFileSync("./data/endpoints.json").toString());
        console.log({endpoint_data});
        reply.setEndpointsList(endpoint_data);
    } catch (e) {
        console.error(e);
    } finally {
        callback(null, reply);
    }
}

const server = new grpc.Server;
server.addService(services.APIServiceService, {
    getGreet: greet,
    getEndpoints: getSupportedEndpoints
});
server.bindAsync("localhost:50052", grpc.ServerCredentials.createInsecure(), (error) => {
    if (error) {
        console.error("Cannot run server on port 50052.", error.message);
    }
    console.log("starting server on localhost:50052");
    server.start();
});
