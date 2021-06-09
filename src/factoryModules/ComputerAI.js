import Ship from '../factoryModules/Ship'

const ComputerAI = (gameboard) => {

    const fleet = [Ship(4)]

    const placeFleet = () => {
        // const randIndexY = Math.floor(Math.random() * 10)
        // const randIndexX = Math.floor(Math.random() * 10)

        //if gameboard.placeShip throws error then redo below until it doesn't
        fleet.map((ship) => {
            gameboard.placeShip(ship, Math.floor(Math.random() * 10), Math.floor(Math.random() * (10 - ship.length)))
        })
    }

    return { fleet, placeFleet }
}

export default ComputerAI