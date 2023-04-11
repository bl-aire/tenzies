import Content from './components/Content'
import './App.css'
import Die from './components/Die'

function App() {
  return (
    <div className='main die_container'>
      <Content />
      
        <Die value="4" />
        <Die value="2" />
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
