import Gameboard from '../factoryModules/Gameboard'
import ComputerAI from '../factoryModules/ComputerAI'


test('Computer AI randomly place a ship in fleet', () => {
    const gameboard = Gameboard()
    const comp = ComputerAI(null, gameboard)
    comp.placeFleet()
    const isFleetPlaced = comp.fleet.every((ship) => ship.shipCoords.length > 0)

    expect(isFleetPlaced).toBeTruthy()
})

test('ComputerAI sends attack to Opponents Gameboard', () => {
    const humanGB = Gameboard()
    const compGB = Gameboard()
    const comp = ComputerAI(humanGB, compGB)
    const attack = comp.attackOpp()

    expect(humanGB.fullBoard[attack[0]][attack[1]]).toBe('Miss')
})
