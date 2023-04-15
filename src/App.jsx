import Content from './components/Content'
import './App.css'
import Die from './components/Die'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const a = Array.from(
      {
        length:6
      }, () => (Math.random() * 6)
    );
    return a;
  }

  return (
    <div className='main die_container'>
      <Content />
        <Die value="4" />
        <Die value="2" />
        <Die value="4" />
        <Die value="2" />
        <Die value="4" />
        <Die value="2" />
    </div>
  )
}

export default App
