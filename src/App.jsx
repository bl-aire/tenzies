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
    return newDice
  }

  function rollDice() {
    setDice(
      allNewDice()
    )
    console.log("hello")
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}

const diceElements = dice.map(die => (
  <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)}
  />
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
