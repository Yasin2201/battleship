import Gameboard from '../factoryModules/Gameboard'
import ComputerAI from '../factoryModules/ComputerAI'

test('Computer AI randomly place a ship in fleet', () => {
    const gameboard = Gameboard()
    const comp = ComputerAI(gameboard)
    comp.placeFleet()
    const isFleetPlaced = comp.fleet.every((ship) => ship.shipCoords.length > 0)
    expect(isFleetPlaced).toBeTruthy()
})
