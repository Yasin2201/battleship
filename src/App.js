import { useState } from 'react';
import Gameboard from '../src/factoryModules/Gameboard'
// import Ship from '../src/factoryModules/Ship'
import ComputerAI from '../src/factoryModules/ComputerAI'
import DisplayGameboard from './displayComponents/DisplayGameboard';
import DisplayShipYard from './displayComponents/DisplayShipYard';
import Gameloop from './factoryModules/Gameloop';

function App() {
  // const [turn, setTurn] = useState(1)
  const [humanGB, setHumanGB] = useState(() => Gameboard())
  // const humanGB = Gameboard()
  const cpuGB = Gameboard()
  const cpu = ComputerAI(humanGB, cpuGB)
  cpu.placeFleet()


  const check = () => {
    Gameloop(cpu, humanGB)
    setHumanGB({ ...humanGB }, humanGB.fullBoard)
    console.log(humanGB)

  }

  return (
    <div>
      <h1>BattleShip</h1>
      <button onClick={check}>Placed Fleet?</button>
      <DisplayGameboard board={humanGB.fullBoard} />
      <DisplayShipYard />
    </div>

  );
}

export default App;
