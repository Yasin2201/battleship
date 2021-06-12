import Ship from '../factoryModules/Ship'

const ComputerAI = (humanGB, compGB) => {

    const fleet = [Ship(5), Ship(4), Ship(3), Ship(2), Ship(1)]

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
            compGB.placeShip(ship, randomX, randomY)
        }
        catch (err) {
            autoPlaceShips(ship)
        }
    }

    const attackOpp = () => {
        let availableAttacks = humanGB.fullBoard.flat().filter((coord) => coord !== 'Miss' && coord !== 'Hit')
        let attackPos = Math.floor(Math.random() * availableAttacks.length)
        humanGB.receiveAttack(availableAttacks[attackPos][0], availableAttacks[attackPos][1])
        return availableAttacks[attackPos]
    }

    return { fleet, placeFleet, attackOpp }
}



export default ComputerAI