import Content from './components/Content'
import './App.css'
import Die from './components/Die'

function App() {

  function allNewDice(){
    const a = Array.from(
      {
        length:6
      }, () => (Math.random() * 6)
    );

    console.log(a);
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
