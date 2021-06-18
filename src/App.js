import { useState } from 'react';
import Gameboard from '../src/factoryModules/Gameboard'
import Ship from '../src/factoryModules/Ship'
import ComputerAI from '../src/factoryModules/ComputerAI'
import DisplayGameboard from './displayComponents/DisplayGameboard';
import DisplayShipYard from './displayComponents/DisplayShipYard';
import './displayComponents/styles/App.css'

function App() {
  const [humanGB, setHumanGB] = useState(() => Gameboard())
  const [cpuGB, setCpuGB] = useState(() => Gameboard())
  const [allShipsPlaced] = useState(humanGB.placedShips)

  const [shipLength, setShipLength] = useState(undefined)
  const [shipLenData, setShipLenData] = useState(Array(5).fill(1))

  const [startGame, setStartGame] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const cpu = ComputerAI(humanGB, cpuGB)

  const start = () => {
    setCpuGB({ ...cpuGB }, cpu.placeFleet())
    setStartGame(true)
  }

  const attack = (e) => {
    let coord = e.target.id
    let yCoord = parseInt(coord[0])
    let xCoord = parseInt(coord[1])

    try {
      setHumanGB({ ...humanGB }, humanGB.fullBoard)
      setCpuGB({ ...cpuGB }, cpuGB.receiveAttack(yCoord, xCoord))
      cpu.attackOpp()
      checkGameOver(humanGB, cpuGB)
    } catch (err) {
      alert('Already Attacked Position Try Again!')
    }
  }

  const shipLenCheck = (e) => {
    setShipLength(parseInt(e.target.id))
  }

  const dropPlace = (e) => {
    try {
      let coord = e.target.id
      let yCoord = parseInt(coord[0])
      let xCoord = parseInt(coord[1])

      setHumanGB({ ...humanGB }, humanGB.placeShip(Ship(shipLength), yCoord, xCoord))
      setShipLenData(Array(shipLenData.length - 1).fill(1))
    } catch (err) {
      alert(err.message)
    }
  }

  const checkGameOver = (checkHuman, checkCPU) => {
    if (checkHuman.placedShipsSunk()) {
      return setGameOver('Lose')
    } else if (checkCPU.placedShipsSunk()) {
      return setGameOver('Win')
    }
  }



  return (
    <div>
      <h1>BattleShip</h1>

      {!gameOver ?
        allShipsPlaced.length < 5
          ? <div className='activeBoards'>
            <DisplayGameboard board={humanGB} dropPlace={dropPlace} boardOwner={'human'} />
            <h2>Place Ship {shipLenData.length}: </h2>
            <DisplayShipYard shipLenCheck={shipLenCheck} shipLenData={shipLenData} />
          </div>

          : startGame

            ? <div className='activeBoards'>
              <DisplayGameboard board={humanGB} dropPlace={dropPlace} boardOwner={'human'} />
              <DisplayGameboard board={cpuGB} attack={attack} />
            </div>

            : <div className='activeBoards'>
              <DisplayGameboard board={humanGB} dropPlace={dropPlace} boardOwner={'human'} />
              <button onClick={start}>Start Game</button>
            </div>
        : <div>
          <h1>GAME OVER! YOU {gameOver}</h1>
        </div>
      }
    </div>

  );
}

export default App;
