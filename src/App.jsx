import { useState } from 'react'
import Die from './Die.jsx'

function App() {

  const [dice, setDice] = useState(randomNumber())

  function randomNumber(){
    let arr = []
    for(let i = 0; i < 10; i++){
      let random = Math.ceil(Math.random() * 6)
      arr.push(random)
    }
    return arr
  }

  function result(){
    setDice(
      randomNumber()
    )
  }

  const diceResult = dice.map(data => <Die value={data}/>)
  const button = <button onClick={result}>Roll Dice</button>

  return (
    <main>
      <div className='main-container'>
        {diceResult}
      </div>
      {button}
    </main>
  )
}

export default App
