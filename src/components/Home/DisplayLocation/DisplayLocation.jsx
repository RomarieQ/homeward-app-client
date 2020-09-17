import React from 'react';
import LocationCards from '../../LocationCards/LocationCards';

const DisplayLocation = (props) => {

    return(
        <div>
            <LocationCards token={props.token}/>
        </div>
    )
}

export default DisplayLocation;