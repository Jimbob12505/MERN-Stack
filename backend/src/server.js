import notesRoutes from "./routes/notesRoutes.js";
import express from "express"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // middleware
app.use(rateLimiter);
app.use((req,res,next) => {
  console.log("NEW REQUEST RECIEVED");
  console.log("________________\n");
  console.log(`Method: ${req.method}\nEndpoint: ${req.url}`);
  console.log(req.body);
  console.log("________________\n");
  next();
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
  });
});

