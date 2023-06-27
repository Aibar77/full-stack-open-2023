import React from "react";
import ReactDOM from "react-dom/client";
// import CourseInfo from "./part1/CourseInfo";
// import State from "./State";
// import UniCafe from "./UniCafe";
// import Anecdotes from "./Anecdotes";
// import Notes from "./part2/Notes";
// import PhoneBook from "./part2/PhoneBook";
import "./index.css";
import Countries from "./part2/Countries";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Countries />
    {/* <Notes /> */}
    {/* <PhoneBook /> */}
  </React.StrictMode>
);
