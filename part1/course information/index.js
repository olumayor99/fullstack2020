import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
};

const Parts = (props) => {
  return (
    <p>
      {props.name} {props.excercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Parts name={props.parts[0].name} excercises={props.parts[0].exercises} />
      <Parts name={props.parts[1].name} excercises={props.parts[1].exercises} />
      <Parts name={props.parts[2].name} excercises={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of excercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  );
};

const App = () => {
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
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
