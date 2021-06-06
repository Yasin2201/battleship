import Ship from '../factoryModules/Ship'

const ship1 = Ship(2)

test('ship length', () => {
    expect(ship1.length).toBe(2)
})

test('shipHit Array Empty', () => {
    expect(ship1.shipHit).toEqual([])
})

test('shipHit Array Hit', () => {
    ship1.hit('A1')
    expect(ship1.shipHit).toEqual(['A1'])
})

test('ship isSunk = false', () => {
    expect(ship1.isSunk()).toBe(false)
})

test('ship isSunk = true', () => {
    ship1.hit('A2')
    expect(ship1.shipHit).toEqual(['A1', 'A2'])
    expect(ship1.isSunk()).toBe(true)
})