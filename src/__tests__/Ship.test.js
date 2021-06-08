import Ship from '../factoryModules/Ship'

const ship1 = Ship(2)

test('ship length', () => {
    expect(ship1.length).toBe(2)
})

test('shipHit Array Empty', () => {
    expect(ship1.shipHit).toEqual([])
})

test('shipHit Array Hit', () => {
    ship1.hit('01')
    expect(ship1.shipHit).toEqual(['01'])
})

test('ship isSunk = false', () => {
    expect(ship1.isSunk()).toBe(false)
})

test('ship isSunk = true', () => {
    ship1.hit('02')
    expect(ship1.shipHit).toEqual(['01', '02'])
    expect(ship1.isSunk()).toBe(true)
})