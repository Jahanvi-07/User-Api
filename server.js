// server.js

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.get("/", (req, res) => {
  res.send("✅ Welcome to the User API! Use /api/users to access users.");
});

// Temporary in-memory database
let users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 22 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 25 }
];

// ✅ GET all users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// ✅ GET user by ID
app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// ✅ CREATE new user
app.post("/api/users", (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    age
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// ✅ UPDATE user
app.put("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email, age } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;
  if (age) user.age = age;

  res.status(200).json(user);
});

// ✅ DELETE user
app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const existingUser = users.find(u => u.id === id);

  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  users = users.filter(u => u.id !== id);
  res.status(200).json({ message: "User deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
