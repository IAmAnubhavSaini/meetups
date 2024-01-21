# grpc-node-example-1-static

This example uses static codegen.

```bash
pnpm install google-protobuf
npm install --location=global grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ --grpc_out=grpc_js:./ api.proto
```

## api_pb

```javascript
const messages = require("./api_pb");
console.log({messages});
```

And the output is below; this is basically what is being returned from _pb.js file.

```bash

{
  messages: {
    Empty: [Function (anonymous)] {
      superClass_: [Object],
      base: [Function (anonymous)],
      toObject: [Function (anonymous)],
      deserializeBinary: [Function (anonymous)],
      deserializeBinaryFromReader: [Function (anonymous)],
      serializeBinaryToWriter: [Function (anonymous)]
    },
    EndpointsResponse: [Function (anonymous)] {
      superClass_: [Object],
      base: [Function (anonymous)],
      repeatedFields_: [Array],
      toObject: [Function (anonymous)],
      deserializeBinary: [Function (anonymous)],
      deserializeBinaryFromReader: [Function (anonymous)],
      serializeBinaryToWriter: [Function (anonymous)]
    },
    GreetResponse: [Function (anonymous)] {
      superClass_: [Object],
      base: [Function (anonymous)],
      toObject: [Function (anonymous)],
      deserializeBinary: [Function (anonymous)],
      deserializeBinaryFromReader: [Function (anonymous)],
      serializeBinaryToWriter: [Function (anonymous)]
    },
    UpdateGreetRequest: [Function (anonymous)] {
      superClass_: [Object],
      base: [Function (anonymous)],
      toObject: [Function (anonymous)],
      deserializeBinary: [Function (anonymous)],
      deserializeBinaryFromReader: [Function (anonymous)],
      serializeBinaryToWriter: [Function (anonymous)]
    },
    User: [Function (anonymous)] {
      superClass_: [Object],
      base: [Function (anonymous)],
      toObject: [Function (anonymous)],
      deserializeBinary: [Function (anonymous)],
      deserializeBinaryFromReader: [Function (anonymous)],
      serializeBinaryToWriter: [Function (anonymous)]
    },
    UserRequest: [Function (anonymous)] {
      superClass_: [Object],
      base: [Function (anonymous)],
      toObject: [Function (anonymous)],
      deserializeBinary: [Function (anonymous)],
      deserializeBinaryFromReader: [Function (anonymous)],
      serializeBinaryToWriter: [Function (anonymous)]
    },
    UserResponse: [Function (anonymous)] {
      superClass_: [Object],
      base: [Function (anonymous)],
      toObject: [Function (anonymous)],
      deserializeBinary: [Function (anonymous)],
      deserializeBinaryFromReader: [Function (anonymous)],
      serializeBinaryToWriter: [Function (anonymous)]
    },
    UsersResponse: [Function (anonymous)] {
      superClass_: [Object],
      base: [Function (anonymous)],
      repeatedFields_: [Array],
      toObject: [Function (anonymous)],
      deserializeBinary: [Function (anonymous)],
      deserializeBinaryFromReader: [Function (anonymous)],
      serializeBinaryToWriter: [Function (anonymous)]
    }
  }
}

```

## services 

```bash
{
  services: {
    APIServiceService: {
      getEndpoints: [Object],
      getGreet: [Object],
      updateGreet: [Object],
      createOrUpdateUser: [Object],
      getUsers: [Object]
    },
    APIServiceClient: [class ServiceClientImpl extends Client] {
      service: [Object],
      serviceName: undefined
    }
  }
}

```
