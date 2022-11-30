import React from 'react'



const ResortCard = ({ resort, addResort, removeFromTravelList, travelList, travelListId }) => {



    const button = !travelList ? (

        <button className='resort-btn' onClick={() => addResort(resort)}>Add to list</button>
    ) : (

        <button className='resort-btn' onClick={() => removeFromTravelList(travelListId)}>Remove from list</button>

    );

    return (
        <div>
            <div className='resort-card'>
                <div>
                    <img className='resort-img' src={resort.image} />
                </div>
                <h3>Name of resort: {resort.name}</h3>
                <h3>Day pass Price: ${resort.price}</h3>
                <h3>State: {resort.state}</h3>
                <h3>City: {resort.city}</h3>
                <h3>Skiable Runs:{resort.slopeCount}</h3>
                <h3>Ski lifts:{resort.lifts}</h3>
                <div className='resort-btn'>
                    {button}
                </div>
            </div>
        </div>
    )
}

export default ResortCard