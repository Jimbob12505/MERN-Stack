
export function getNotes(req, res) {
  res.status(200).send("Received notes");
};

export function createNote(req, res) {
  res.status(201).json({
    "message": "post created successfully"
  });
};

export function updateNote(req, res) {
  res.status(200).json({
    "message": "note updated successfully"
  });
};

export function deleteNote (req, res) {
  res.status(200).json({
    "message": "note deleted successfully"
  });
};
