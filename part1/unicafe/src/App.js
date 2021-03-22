import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);

  return (
    <>
      <div>
        <h3>give feedback</h3>
        <Button
          text="good"
          handleClick={() => {
            setGood(good + 1)
            setTotal(total + 1)
          }} />
        <Button
          text="neutral"
          handleClick={() => {
            setNeutral(neutral + 1)
            setTotal(total + 1)
          }} />
        <Button text="bad" handleClick={() => {
          setBad(bad + 1)
          setTotal(total + 1)
          }} />
      </div>
      <div>
        <h3>statistics</h3>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {((good * 1) + (bad * -1))/total}</p>
        <p>positive {(good/total) * 100}%</p>
      </div>
    </>
  )
}

export default App