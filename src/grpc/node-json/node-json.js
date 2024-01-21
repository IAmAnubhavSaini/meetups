// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const endpoints = [
  "GET /api",
  "GET /api/greet",
  "PUT /api/greet",
  "GET /api/users",
  "POST /api/users",
];
let greetings = "Hello, this is a JSON API!";
let users = [];

// GET all api endpoints
app.get("/api", (req, res) => {
  res.json({ endpoints });
});

// GET greetings
app.get("/api/greet", (req, res) => {
  res.json({ message: greetings });
});
// PUT greetings
app.put("/api/greet", (req, res) => {
  const { message } = req.body;
  greetings = message;
  res.json({ message: greetings });
});

// POST users: Create a new user.
app.post("/api/users", (req, res) => {
  const { username, email } = req.body;
  users.push({ username, email });
  res.json({
    message: `User ${username} <${email}> created successfully!\n Total users: ${users.length}`,
  });
});

// GET users: Get all users.
app.get("/api/users", (req, res) => {
  res.json({ users });
});

app.listen(port, () => {
  console.log(`JSON API listening at http://localhost:${port}`);
  console.log("Available endpoints:");
  endpoints.forEach((endpoint) => console.log(`\t${endpoint}`));
});
