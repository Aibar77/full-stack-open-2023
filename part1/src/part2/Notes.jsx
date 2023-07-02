/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import noteService from "../services/notes";
import Notification from "./components/Notification";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      <span>{note.content}</span>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div className="footer" style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science 2023</em>
    </div>
  );
};

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    const noteObj = {
      content: newNote,
      important: Math.random() > 0.5,
    };
    noteService.create(noteObj).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportanceOf = (note) => {
    const changedNote = {
      ...note,
      important: !note.important,
    };

    noteService
      .update(note.id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((n) => (n.id !== note.id ? n : returnedNote)));
      })
      .catch((err) => {
        setErrorMsg(`Note '${note.content}' was already removed from server`);
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
        console.error(err);
        setNotes(notes.filter((n) => n.id !== note.id));
      });
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  return (
    <div className="App">
      <h1>Notes</h1>
      <Notification message={errorMsg} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul className="notes">
        {notesToShow.map((note) => (
          <Note
            note={note}
            key={note.id}
            toggleImportance={() => toggleImportanceOf(note)}
          />
        ))}
      </ul>
      <form className="addNote" onSubmit={addNote}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type="submit">save note</button>
      </form>
      <Footer />
    </div>
  );
};
export default Notes;
