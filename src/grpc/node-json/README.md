# node-json

```bash
# setup
# npm init -y
# pnpm install express body-parser

# run
# To install the dependencies
pnpm install
# To run
pnpm start
```

## Updating greetings

```bash

# GET original greeting
curl http://localhost:3000/api/greet
{"message":"Hello, this is a JSON API!"}%

# PUT update greeting to hello
curl -X PUT \
-d '{"message":"hello"}' \
-H 'Content-Type:application/json' \
http://localhost:3000/api/greet
{"message":"hello"}%

# GET greeting
curl http://localhost:3000/api/greet
{"message":"hello"}%

```

## Users


```bash

# GET users
curl http://localhost:3000/api/users
{"users":[]}%

# POST create user
curl -X POST \                      
        -H 'Content-Type: application/json' \
        -d '{"username":"anubhav","email":"someone@example.com"}' \
        http://localhost:3000/api/users
{"message":"User anubhav <someone@example.com> created successfully!\n Total users: 1"}%

# GET users
curl http://localhost:3000/api/users
{"users":[{"username":"anubhav","email":"someone@example.com"}]}% 

```
