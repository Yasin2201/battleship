import './styles/DisplayGameboard.css'
import uniqid from 'uniqid'

const DisplayGameboard = ({ board, attack }) => {
    return (
        < div className="gameboard" >
            {board.map((boardArray) => {
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