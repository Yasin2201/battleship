const Ship = (shipLength) => {
    const length = shipLength
    const shipHit = []
    let shipCoords;

    const hit = (hitCoords) => {
        shipHit.push(hitCoords)
    }

    const isSunk = () => {
        return shipHit.length === shipLength ? true : false
    }

    return { length, shipHit, shipCoords, hit, isSunk }
}

export default Ship