import Ship from '../factoryModules/Ship'

const Player = () => {
    const shipLengths = [5, 4, 3, 2, 1]
    const fleet = [];
    (() => {
        shipLengths.map((len) => fleet.push(Ship(len)))
    })();

    return fleet
}

export default Player