import notesRoutes from "./routes/notesRoutes.js";
import express from "express"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});


