import Content from './components/Content'
import './App.css'
import Die from './components/Die'
import React from 'react';
import {nanoid} from "nanoid"



function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 6; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      })
    }
    console.log(newDice)
    return newDice
  }

  function rollDice() {
    setDice(
      allNewDice()
    )
  }

  const diceElements = dice.map(die => (
    <Die value={die.value} key={die.id} />
  ))

  return (
    <div className='main'>
      <Content />

      <div className='die_container'>
        {diceElements}
      </div>
      
      <button className="rollDice" onClick={rollDice}> Roll Dice</button>

    </div>
  )
}

export default App
