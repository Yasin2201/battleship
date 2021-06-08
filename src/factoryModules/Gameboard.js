const Gameboard = () => {
    const boardXaxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const boardYaxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const fullBoard = boardXaxis.map((Xele) => {
        return boardYaxis.map((Yele) => `${Xele}${Yele}`)
    })

    const placedShips = []

    const placeShip = (ship, indexY, indexX) => {
        if (indexX + ship.length > 10) {
            throw new Error("Ship Position OverBoard!");
        } else {
            const shipsFullPos = fullBoard[indexY].slice(indexX, indexX + ship.length)
            ship.shipCoords = shipsFullPos
            placedShips.push(ship)
        }
    }

    const receiveAttack = (indexY, indexX) => {
        const foundShip = placedShips.find((ship) => ship.shipCoords.includes(fullBoard[indexY][indexX]))

        if (foundShip === undefined) {
            return fullBoard[indexY].splice(indexX, 1, 'Miss')
        } else {
            return foundShip.hit(fullBoard[indexY][indexX])
        }
    }

    const placedShipsSunk = () => {
        return placedShips.every((ship) => ship.isSunk())
    }

    return { fullBoard, placedShips, placeShip, receiveAttack, placedShipsSunk }
}

export default Gameboard