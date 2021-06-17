import './styles/DisplayGameboard.css'
import uniqid from 'uniqid'

const DisplayGameboard = ({ board, attack, dropPlace }) => {

    return (
        < div className="gameboard" onDragOver={(e) => e.preventDefault()} onDrop={dropPlace}>
            {board.fullBoard.map((boardArray) => {
                return (
                    boardArray.map((boardArea) => {
                        return (
                            <div key={uniqid()} onClick={attack} className="boardAreaDiv">
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