import Gameboard from '../src/factoryModules/Gameboard'
// import Ship from '../src/factoryModules/Ship'
// import ComputerAI from '../src/factoryModules/ComputerAI'
import DisplayGameboard from './displayComponents/DisplayGameboard';
import DisplayShipYard from './displayComponents/DisplayShipYard';

function App() {

  const humanGameboard = Gameboard()

  return (
    <div>
      <h1>BattleShip</h1>
      <button>Placed Fleet?</button>
      <DisplayGameboard board={humanGameboard.fullBoard} />
      <DisplayShipYard />
    </div>

  );
}

export default App;
