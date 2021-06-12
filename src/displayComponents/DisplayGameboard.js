import './styles/DisplayGameboard.css'

const DisplayGameboard = (board) => {
    console.log(board.board)
    return (
        < div className="gameboard" >
            {board.board.map((boardArray) => {
                return (
                    boardArray.map((boardArea) => {
                        return (
                            <div key={boardArea} className="boardAreaDiv">
                                {boardArea}
                            </div>
                        )
                    })
                )
            })}
        </div >
    )
}

export default DisplayGameboard