import { useState } from 'react';
import Gameboard from '../src/factoryModules/Gameboard'
import Ship from '../src/factoryModules/Ship'
import ComputerAI from '../src/factoryModules/ComputerAI'
import DisplayGameboard from './displayComponents/DisplayGameboard';
import DisplayShipYard from './displayComponents/DisplayShipYard';
import Gameloop from './factoryModules/Gameloop';
import './displayComponents/styles/App.css'

function App() {
  const [humanGB, setHumanGB] = useState(() => Gameboard())
  const [cpuGB, setCpuGB] = useState(() => Gameboard())

  const cpu = ComputerAI(humanGB, cpuGB)

  const check = () => {
    Gameloop(cpu, humanGB)
    setHumanGB({ ...humanGB }, humanGB.fullBoard)
    console.log(humanGB)
    console.log(cpuGB)
  }

  const start = () => {
    setHumanGB({ ...humanGB }, humanGB.placeShip(Ship(4), 0, 0))
    setHumanGB({ ...humanGB }, humanGB.placeShip(Ship(3), 1, 0))
    setHumanGB({ ...humanGB }, humanGB.placeShip(Ship(2), 2, 0))

    setCpuGB({ ...cpuGB }, cpu.placeFleet())
    console.log(cpuGB)
  }

  const attack = (e) => {
    let x = e.target.textContent
    let y = parseInt(x[0])
    let z = parseInt(x[1])

    if (x === 'Hit' || x === "Miss") {
      console.log('try again')
    } else {
      setHumanGB({ ...humanGB }, humanGB.fullBoard)
      setCpuGB({ ...cpuGB }, cpuGB.receiveAttack(y, z))
      Gameloop(cpu, humanGB)
    }

    // console.log(cpuGB)
  }

  return (
    <div>
      <h1>BattleShip</h1>
      <button onClick={check}>Placed Fleet?</button>
      <button onClick={start}>Start</button>
      <div className='activeBoards'>
        <DisplayGameboard board={humanGB.fullBoard} />
        <DisplayGameboard board={cpuGB.fullBoard} attack={attack} />
      </div>
      <DisplayShipYard />
    </div>

  );
}

export default App;
