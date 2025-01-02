import express from "express";
import dbConnection from "../database/db.js";

/*
    This route file handles all API requests relating to the likeButton 
    It accepts GET /api/likeCount, POST /api/likeCount/increase and POST /api/likeCount/decrease

    It also checks the connection with the database. 
*/

dbConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("connected to MySQL as ID " + dbConnection.threadId);
});

let db;

const router = express.Router();

// get like count
// GET /api/likeCount
router.get("/", async (req, res, next) => {
  try {
    const [results] = await dbConnection
      .promise()
      .query("SELECT SUM(press_value) AS totalLikes FROM likeButtons;");
    const totalLikes = results[0]?.totalLikes || 0; // Use optional chaining to avoid errors
    db = { likeCount: totalLikes };
    res.status(200).json(db);
  } catch (err) {
    console.error("Error executing query: " + err.stack);
    res.status(500).json({ error: "Error fetching likes" });
  }
});

// increase like count
// PUT /api/likeCount/increase
router.put("/increase", async (req, res, next) => {
  try {
    await dbConnection
      .promise()
      .query(
        "INSERT INTO likeButtons (press_value, timestamp_like) VALUES (1, CURRENT_TIMESTAMP);"
      );
    db.likeCount++;
    res.status(200).json({ msg: "likeCount has been increased", db });
  } catch (err) {
    console.error("Error executing query: " + err.stack);
    res.status(500).json({ error: "Error increasing likes" });
  }
});

// decrease like count
// PUT /api/likeCount/decrease
router.put("/decrease", async (req, res, next) => {
  try {
    await dbConnection
      .promise()
      .query(
        "INSERT INTO likeButtons (press_value, timestamp_like) VALUES (-1, CURRENT_TIMESTAMP);"
      );
    db.likeCount--;
    res.status(200).json({ msg: "likeCount has been decreased", db });
  } catch (err) {
    console.error("Error executing query: " + err.stack);
    res.status(500).json({ error: "Error decreasing likes" });
  }
});

export default router;
