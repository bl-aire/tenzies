import Content from './components/Content'
import './App.css'
import Die from './components/Die'

function App() {
  return (
    <main>
      <Content />
  
      <Die 
        value={6}
      />
      
    </main>
  )
}

export default App
