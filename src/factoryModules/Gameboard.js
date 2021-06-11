const Gameboard = () => {
    const boardXaxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const boardYaxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const fullBoard = boardXaxis.map((Xele) => {
        return boardYaxis.map((Yele) => `${Xele}${Yele}`)
    })

    const placedShips = []

    const checkShipPositionValid = (fullPosition) => {
        if (fullPosition === undefined) {
            return false
        } else {
            let check = placedShips.map((ship) => {
                return fullPosition.some((position) => ship.shipCoords.includes(position))
            })
            return check.includes(true) ? true : false
        }
    }

    const placeShip = (ship, indexY, indexX) => {
        const shipsFullPos = fullBoard[indexY].slice(indexX, indexX + ship.length)

        if (indexX + ship.length > 10) {
            throw new Error("Ship Position OverBoard!");
        } else if (checkShipPositionValid(shipsFullPos)) {
            throw new Error("Ship Position Already Taken!");
        } else {
            ship.shipCoords = shipsFullPos
            placedShips.push(ship)
        }
    }

    const receiveAttack = (indexY, indexX) => {
        const foundShip = placedShips.find((ship) => ship.shipCoords.includes(fullBoard[indexY][indexX]))

        if (fullBoard[indexY][indexX] === 'Hit' || fullBoard[indexY][indexX] === 'Miss') {
            throw new Error('Already Attacked Position')
        }
        else if (foundShip === undefined) {
            return fullBoard[indexY].splice(indexX, 1, 'Miss')
        } else {
            foundShip.hit(fullBoard[indexY][indexX])
            return fullBoard[indexY].splice(indexX, 1, 'Hit')
        }
    }

    const placedShipsSunk = () => {
        return placedShips.every((ship) => ship.isSunk())
    }

    return { fullBoard, placedShips, placeShip, receiveAttack, placedShipsSunk }
}

export default Gameboard