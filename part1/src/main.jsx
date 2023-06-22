import React from "react";
import ReactDOM from "react-dom/client";
// import CourseInfo from "./part1/CourseInfo";
// import State from "./State";
// import UniCafe from "./UniCafe";
// import Anecdotes from "./Anecdotes";
// import Notes from "./part2/Notes";
import PhoneBook from "./part2/PhoneBook";
import "./index.css";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Notes notes={notes} /> */}
    <PhoneBook />
  </React.StrictMode>
);
