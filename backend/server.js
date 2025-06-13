const express = require("express")

const app = express();

app.get("/api/notes", (req, res) => {
  // recieve notes
  res.status(200).send("Received notes");
});

app.post("/api/notes", (req, res) => {
  // create note
  res.status(201).json({
    "message": "post created successfully"
  });
});

app.put("/api/notes/:id", (req, res) => {
  // update note
  res.status(200).json({
    "message": "note updated successfully"
  });
});

app.delete("/api/notes/:id", (req, res) => {
  // update note
  res.status(200).json({
    "message": "note deleted successfully"
  });
});

app.listen(5001, () => {
  console.log("Server started on port 5001");
}); 
