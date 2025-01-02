import cors from "cors";
/*
    This file contains the CORS policy that currently allows two origins. 
    1 for testing and the other is the actual website origin. 
*/
const corsOptions = {
  origin: ["http://127.0.0.1:3000", "https://hongjinhao.github.io"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

export default cors(corsOptions);
