import Content from './components/Content'
import './App.css'
import Die from './components/Die'
import React from 'react';
import {nanoid} from "nanoid"
import Confetti from "react-confetti"



function App() {

  const [dice, setDice] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSame = dice.every(die => die.value === firstValue)
    if (allHeld && allSame) {
      setTenzies(true)
      console.log("You won")
    }
  }, [dice])

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
    if(!tenzies) {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    } else {
        setTenzies(false)
        setDice(allNewDice())
    }
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
      {tenzies && <Confetti />}
      <Content />

      <div className='die_container'>
        {diceElements}
      </div>
      
      <button className="rollDice" onClick={rollDice}> {tenzies ? "New Game" : "Roll dice" }</button>

    </div>
  )
}

export default App
