import express from "express";
import db from "./config/db.js";
import cors from "cors";


// Create an instance of Express
const app = express();

app.use(cors({ methods: ["GET", "POST"] }));
app.use(express.json())


// Define a port (use process.env.PORT for production)
const port = process.env.PORT || 3001;


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});