const Gameboard = () => {
    const boardXaxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const boardYaxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const fullBoard = boardXaxis.map((Xele) => {
        return boardYaxis.map((Yele) => Xele + Yele)
    })

    const placedShips = []

    const placeShip = (ship, index, placeStart) => {
        const shipStartPos = fullBoard[index].indexOf(placeStart)

        if (shipStartPos + ship.length > 10) {
            throw new Error("Ship Position OverBoard!");
        } else {
            const shipsFullPos = fullBoard[index].slice(shipStartPos, shipStartPos + ship.length)
            ship.shipCoords = shipsFullPos
            placedShips.push(ship)
        }
    }

    const receiveAttack = (attackCoords) => {
        const foundShip = placedShips.find((ship) => ship.shipCoords.includes(attackCoords))
        return foundShip.hit(attackCoords)
    }

    return { fullBoard, placedShips, placeShip, receiveAttack }
}

export default Gameboard