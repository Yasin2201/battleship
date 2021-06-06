const Ship = (shipLength) => {
    const length = shipLength
    const shipHit = []

    const hit = (hitCoords) => {
        shipHit.push(hitCoords)
    }

    const isSunk = () => {
        return shipHit.length === shipLength ? true : false
    }

    return { length, shipHit, hit, isSunk }
}

export default Ship