const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://mambetaibar:${password}@cluster0.4f1v3qn.mongodb.net/noteApp`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "Database is important",
//   important: true,
// });

// note.save().then((res) => {
//   console.log("note saved!", res);
//   mongoose.connection.close();
// });

Note.find({ important: false }).then((res) => {
  res.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
