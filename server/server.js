import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors()); // allow frontend requests
app.use(express.json()); // parse JSON bodies

// In-memory storage for moods
let moods = [];

// GET all moods
app.get("/api/mood", (req, res) => {
  res.json({ mood: moods });
});

// POST new mood
app.post("/api/mood", (req, res) => {
  const newMood = req.body;
  newMood.date = new Date().toISOString();
  moods.push(newMood);
  res.json({ success: true, mood: newMood });
});

// Clear all moods (optional)
app.delete("/api/mood", (req, res) => {
  moods = [];
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
