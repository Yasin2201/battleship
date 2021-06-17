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
  const [shipLength, setShipLength] = useState(undefined)
  const [shipLenData, setShipLenData] = useState(Array(5).fill(1))

  const cpu = ComputerAI(humanGB, cpuGB)

  const start = () => {
    setCpuGB({ ...cpuGB }, cpu.placeFleet())
    console.log(cpuGB.placedShips)
  }

  const attack = (e) => {
    let coord = e.target.textContent
    let yCoord = parseInt(coord[0])
    let xCoord = parseInt(coord[1])

    try {
      setHumanGB({ ...humanGB }, humanGB.fullBoard)
      setCpuGB({ ...cpuGB }, cpuGB.receiveAttack(yCoord, xCoord))
      Gameloop(cpu, humanGB)
    } catch (err) {
      alert('Already Attack Position Try Again!')
    }
  }

  const shipLenCheck = (e) => {
    setShipLength(parseInt(e.target.textContent))
  }

  const dropPlace = (e) => {
    try {
      let coord = e.target.textContent
      let yCoord = parseInt(coord[0])
      let xCoord = parseInt(coord[1])

      setHumanGB({ ...humanGB }, humanGB.placeShip(Ship(shipLength), yCoord, xCoord))
      console.log(e.target)

      setShipLenData(Array(shipLenData.length - 1).fill(1))
    } catch (err) {
      alert(err.message)
    }


  }

  const checker = () => {
    console.log(humanGB)
  }
  console.log(shipLenData)

  return (
    <div>
      <h1>BattleShip</h1>
      <button onClick={start}>Start</button>
      <button onClick={checker}>Check</button>
      <div className='activeBoards'>
        <DisplayGameboard board={humanGB} dropPlace={dropPlace} />
        <DisplayGameboard board={cpuGB} attack={attack} />
      </div>
      <DisplayShipYard shipLenCheck={shipLenCheck} shipLenData={shipLenData} />
    </div>

  );
}

export default App;
