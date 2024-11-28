const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../models/data.json");

// Fetch categories
const getCategories = (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath));
    res.status(200).json(data.categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

module.exports = { getCategories };
