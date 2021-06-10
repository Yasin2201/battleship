import Ship from '../factoryModules/Ship'

const ComputerAI = (gameboard) => {

    const fleet = [Ship(5), Ship(3), Ship(2), Ship(1), Ship(1)]

    const placeFleet = () => {
        fleet.map((ship) => {
            autoPlaceShips(ship)
        })
    }

    //recursive function to re-try placing ship if error is thrown --note: could blow stack but unlikely---
    const autoPlaceShips = (ship) => {
        let randomX = Math.floor(Math.random() * 10)
        let randomY = Math.floor(Math.random() * (10 - ship.length))
        try {
            gameboard.placeShip(ship, randomX, randomY)
        }
        catch (err) {
            autoPlaceShips(ship)
        }
    }

    return { fleet, placeFleet }
}



export default ComputerAI