import express from "express";
import like from "./routes/like.js";
import logger from "./middleware/logger.js";
import cors from "./middleware/cors.js";

/*  Basic Java Data API server using express 
    Allows frontend website (hongjinhao.github.io) to get the like counts and also change it
    It has a logger that logs each request
    It also has a CORS policy that currently allows two origins. 1 for testing and the other 
    is the actual website origin. 
*/
const PORT = process.env.PORT || 8080;

const app = express();

// logging
app.use(logger);
// CORS
app.use(cors);

// routing
app.use("/api/likeCount", like);

// set up server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
