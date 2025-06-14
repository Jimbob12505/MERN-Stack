import notesRoutes from "./routes/notesRoutes.js";
import express from "express"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api/notes", notesRoutes)

connectDB();

app.listen(5001, () => {
  console.log("Server started on port 5001");
});


