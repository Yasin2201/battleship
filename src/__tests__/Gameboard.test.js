import Gameboard from '../factoryModules/Gameboard'
import Ship from '../factoryModules/Ship'

test('Generate GameBoard', () => {
    const gameboard = Gameboard().fullBoard
    expect(gameboard).toEqual([
        ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
        ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
        ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
        ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'],
        ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
        ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
        ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79'],
        ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
        ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99']
    ])
})

describe('test ship placement and positioning', () => {
    test('placeship at coordinates matching ship.length', () => {
        const ship = Ship(3)
        const gameboard = Gameboard()
        gameboard.placeShip(ship, 0, 1)
        expect(ship.shipCoords).toEqual(['01', '02', '03'])
    })

    test('error if ship position extends board length', () => {
        const ship = Ship(4)
        const gameboard = Gameboard()

        expect(() => {
            gameboard.placeShip(ship, 0, 7);
        }).toThrow('Ship Position OverBoard!');
    })

    test('error if ship is place where another ship is', () => {
        const gameboard = Gameboard()
        const ship1 = Ship(3)
        const ship2 = Ship(3)

        gameboard.placeShip(ship1, 1, 1)

        expect(() => {
            gameboard.placeShip(ship2, 1, 2)
        }).toThrow('Ship Position Already Taken!');

    })
})

describe('test ships attacks and how they are recorded', () => {
    test('test gameboard sends attack to correct ship', () => {
        const gameboard = Gameboard()
        const ship = Ship(4)
        gameboard.placeShip(ship, 0, 1)
        gameboard.receiveAttack(0, 3)

        expect(ship.shipHit).toEqual(['03'])
    })

    test('gameboard sends Miss to missed attack', () => {
        const gameboard = Gameboard()
        const ship = Ship(1)
        gameboard.placeShip(ship, 1, 2)

        gameboard.receiveAttack(1, 0)
        gameboard.receiveAttack(1, 1)
        gameboard.receiveAttack(1, 2) //hit

        expect(gameboard.fullBoard[1]).toEqual(['Miss', 'Miss', 'Hit', '13', '14', '15', '16', '17', '18', '19'])
    })
})

describe('Check if all placedShips are sunk or not', () => {
    const gameboard = Gameboard()
    const ship1 = Ship(1)
    const ship2 = Ship(1)
    gameboard.placeShip(ship1, 0, 1)
    gameboard.placeShip(ship2, 1, 1)


    test('check if all ships are NOT sunk', () => {
        gameboard.receiveAttack(0, 1)
        expect(ship1.isSunk()).toBeTruthy()
        expect(gameboard.placedShipsSunk()).toBeFalsy()
    })

    test('check if all ships are sunk', () => {
        gameboard.receiveAttack(1, 1)
        expect(ship1.isSunk()).toBeTruthy()
        expect(gameboard.placedShipsSunk()).toBeTruthy()
    })
})


