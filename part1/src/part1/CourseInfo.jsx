/* eslint-disable react/prop-types */

const Part = ({ part }) => {
  return (
    <p>
      {part.name} - {part.exercises}
    </p>
  );
};
const Content = ({ parts, name }) => {
  const total = parts.reduce((acc, obj) => acc + obj.exercises, 0);
  return (
    <>
      <h2
        style={{
          color: "blueviolet",
        }}
      >
        {name}
      </h2>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
      <Total total={total} />
    </>
  );
};
const Total = ({ total }) => {
  return (
    <p>
      <strong
        style={{
          color: "orangered",
        }}
      >
        Number of exercises - {total}
      </strong>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div className="App">
      <h1>Web development curriculum</h1>
      {course.map((a) => (
        <Content parts={a.parts} key={a.id} name={a.name} />
      ))}
    </div>
  );
};

function CourseInfo() {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "MiddleWares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return <Course course={course} />;
}

export default CourseInfo;
