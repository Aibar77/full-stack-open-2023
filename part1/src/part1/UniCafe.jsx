/* eslint-disable react/prop-types */
import { useState } from "react";

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const average = all > 0 ? roundToTwo((good - bad) / all) : 0;
  const positive = all > 0 ? roundToTwo((good / all) * 100) : 0;
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive + " %"} />
          </tbody>
        </table>
      )}
    </div>
  );
};
const roundToTwo = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const UniCafe = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <div className="buttons">
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default UniCafe;
