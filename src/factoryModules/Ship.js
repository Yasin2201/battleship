const Ship = (shipLength) => {
    const length = shipLength
    const shipHit = []

    const hit = (hitCoords) => {
        shipHit.push(hitCoords)
    }

    return { length, shipHit, hit }
}

export default Ship