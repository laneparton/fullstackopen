import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Statistics = ({good, neutral, bad }) => {
  const total = good + neutral + bad;

  if(total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h3>statistics</h3>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {((good * 1) + (bad * -1))/total}</div>
      <div>positive {(good/total) * 100}%</div>
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