const Gameboard = () => {
    const boardXaxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const boardYaxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const fullBoard = boardXaxis.map((Xele) => {
        return boardYaxis.map((Yele) => Xele + Yele)
    }).flat()

    return fullBoard
}

export default Gameboard