import Content from './components/Content'
import './App.css'
import Die from './components/Die'
import React from 'react';
import {nanoid} from "nanoid"



function App() {

  const [dice, setDice] = React.useState(allNewDice())


  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 6; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
                die :
                generateNewDie()
    }))
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
