import './styles/DisplayShipYard.css'
import uniqid from 'uniqid'

const DisplayShipYard = ({ shipLenCheck, shipLenData }) => {
    return (
        <div className='shipYard' draggable='true' onMouseDown={shipLenCheck}>
            {shipLenData.map(() => {
                return (
                    <div key={uniqid()} className='ship' id={shipLenData.length}>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayShipYard