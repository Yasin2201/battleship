import './styles/DisplayShipYard.css'

const DisplayShipYard = () => {
    const shipLengthData = [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4],
        [1, 2, 3],
        [1, 2],
        [1],
    ]

    return (
        <div className='shipYard'>
            {shipLengthData.map((ship) => {
                return (
                    <div key={ship} className='ship'>
                        {ship.map((shipSection) => {
                            return (
                                <div key={ship + shipSection} className='playerShipSection'>
                                    {shipSection}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayShipYard