import { useState } from 'react'

const StatisticLine = ({ text, value, text2 }) => { 
  return ( 
    <table>
        <tbody>
          <tr>
            <td>{text}&nbsp;</td>
            <td>{value}{text2}</td>
          </tr>
        </tbody>
    </table>
  )
}

const Statistics = ({good, bad, neutral}) => {
  var all = good+bad+neutral
  
  return(
    <div>
      <StatisticLine text ='good' value={good} />
      <StatisticLine text ='neutral' value={neutral} />
      <StatisticLine text ='bad' value={bad} />
      <StatisticLine text ='all' value={all} />
      <StatisticLine text ='average' value={(good*1+bad*(-1)+neutral*0)/all} />
      <StatisticLine text ='positive' value={good/all*100} text2='%' />
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBad = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
		</div>
  )
}

export default App
