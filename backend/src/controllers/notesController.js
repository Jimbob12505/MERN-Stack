import Note from "../models/Note.js";

export async function getNotes(req, res) {

  try {
    const notes = await Note.find({}).sort({createdAt:-1}); // find all Note 
    res.status(200).json(notes);  
  } catch (error) {
    console.error("ERROR! FAILED TO RETRIEVE ALL NOTES", error);
    res.status(500).json({message: "Failure to retrieve all notes"}); 
  }

}

export async function getNoteById(req, res) {

  try {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({message:"Note not found"});
    res.status(200).json(note); 
  } catch (error) {
    console.error("ERROR! FAILED TO RETRIEVE NOTE BY ID", error);
    res.status(500).json({message: "Failure to retrieve note by id"}); 
  }

}

export async function createNote(req, res) {

  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title:title,
      content:content
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote); 
  } catch (error) {
    console.error("ERROR! FAILED TO CREATE NOTE", error);
    res.status(500).json({message: "Failure creating new note"});
  }

}

export async function updateNote(req, res) {
  
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id, 
      {title,content}, 
      {new:true,}
    ); // id associated with declared path in notesRoutes /:id
    
    if(!updatedNote) return res.status(404).json({message:"Note not found"}); // not found

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("ERROR! FAILED TO UPDATE NOTE", error);
    res.status(500).json({"message": "Failure updating note"});
  }

}

export async function deleteNote (req, res) {

  try {
    
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message:"Not note found"});
    
    res.status(200).json(deletedNote);

  } catch (error) {
    console.error("ERROR! FAILED TO DELETE NOTE", error);
    res.status(500).json({"message": "Failure deleting note"});
  }

}
