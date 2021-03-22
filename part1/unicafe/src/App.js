import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({ text, value }) => <div>{text} {value}</div>

const Statistics = ({good, neutral, bad }) => {
  const total = good + neutral + bad;

  if(total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h3>statistics</h3>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={total} />
      <Statistic text="average" value={((good * 1) + (bad * -1))/total} />
      <Statistic text="positive" value={((good/total) * 100) + "%"} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <h3>give feedback</h3>
        <Button text="good" handleClick={() => setGood(good + 1) } />
        <Button text="neutral" handleClick={() => setNeutral(neutral + 1) } />
        <Button text="bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App