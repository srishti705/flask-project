const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/tododb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const todoSchema = new mongoose.Schema({
  itemName: String,
  itemDescription: String
});

const Todo = mongoose.model("Todo", todoSchema);

// Route
app.post("/submittodoitem", async (req, res) => {
  const { itemName, itemDescription } = req.body;

  try {
    const newItem = new Todo({ itemName, itemDescription });
    await newItem.save();
    res.json({ message: "To-Do Item Saved Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving item" });
  }
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

