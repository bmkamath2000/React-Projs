// server.js
const express = require("express");

const app = express();
const PORT = 3000;
let products = [
{ id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Phone", price: 20000 }
];

// Built-in middleware
app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
console.log(`${req.method} ${req.url}`);
next();
});

// Root route
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.get("/products", (req, res) => {
res.json(products);
});

app.post("/products", (req, res) => {
const { name, price } = req.body;

const newProduct = {
id: products.length + 1,
name,
price
};

products.push(newProduct);
res.status(201).json(newProduct);
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});