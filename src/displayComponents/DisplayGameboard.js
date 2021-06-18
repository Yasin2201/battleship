import './styles/DisplayGameboard.css'
import uniqid from 'uniqid'

const DisplayGameboard = ({ board, attack, dropPlace }) => {
    const placedShipsPositions = board.placedShips.map((ship) => ship.shipCoords).flat()

    function setColor(boardArea) {
        if (boardArea === 'Hit') {
            return ({ backgroundColor: "red" })
        } else if (boardArea === 'Miss') {
            return ({ backgroundColor: "blue" })
        } else if (placedShipsPositions.includes(boardArea)) {
            return ({ backgroundColor: "green" })
        }
    }
    console.log(board.placedShips)
    return (
        < div className="gameboard" onDragOver={(e) => e.preventDefault()} onDrop={dropPlace}>
            {board.fullBoard.map((boardArray) => {
                return (
                    boardArray.map((boardArea) => {
                        return (
                            <div key={uniqid()} id={boardArea} onClick={attack} className="boardAreaDiv" style={setColor(boardArea)}>

                            </div>
                        )
                    })
                )
            })}
        </div >
    )
}

export default DisplayGameboard