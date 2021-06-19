import './styles/DisplayGameboard.css'
import uniqid from 'uniqid'

const DisplayGameboard = ({ board, attack, dropPlace, boardOwner }) => {
    const placedShipsPositions = board.placedShips.map((ship) => ship.shipCoords).flat()

    function setColor(boardArea) {
        if (boardArea === 'Hit') {
            return ({ backgroundColor: "#e63946" })
        } else if (boardArea === 'Miss') {
            return ({ backgroundColor: "#4361ee" })
        } else if (placedShipsPositions.includes(boardArea) && boardOwner === 'Player') {
            return ({ backgroundColor: "#2a9d8f" })
        }
    }
    return (
        <div>
            <h1>{boardOwner} Board</h1>
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
        </div>
    )
}

export default DisplayGameboard