/* eslint-disable react/prop-types */
const Header = ({ name }) => {
  return <h1>{name}</h1>;
};
const Part = ({ part }) => {
  return (
    <p>
      {part.name} - {part.exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );
};
const Total = ({ total }) => {
  return <p>Number of exercises - {total}</p>;
};

function CourseInfo() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div className="App">
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
}

export default CourseInfo;
