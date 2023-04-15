import Content from './components/Content'
import './App.css'
import Die from './components/Die'
import React from 'react';



function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = []
        for (let i = 0; i < 6; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
  }

  function rollDice() {
    setDice(
      allNewDice()
    )
  }

  const diceElements = dice.map(die => <Die value={die} />)

  return (
    <div className='main'>
      <Content />

      <div className='die_container'>
        {diceElements}
      </div>
      
      <button className="roleDice" onClick={rollDice}> Roll </button>

    </div>
  )
}

export default App
