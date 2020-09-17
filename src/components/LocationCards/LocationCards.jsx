import React, {useState, useEffect} from 'react';
import {Row} from 'reactstrap';
import LocationCard from './LocationCard/LocationCard';
import UpdateCard from './UpdateCard/UpdateCard';


const LocationCards = (props) => {
  const [locations, setLocations] = useState([]);
  const [updating, setUpdating] = useState(false);
  const [locationToUpdate, setLocationToUpdate] = useState({});

  useEffect(() => {
    fetch('http://localhost:3002/location/mine', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token
      }
    })
    .then(res => res.json())
    .then(json => setLocations(json))
    .catch(err => console.log(err))
  },[locations]);

  const deleteLocation = (location) => {
    console.log('Deleting', location.id)
    fetch(`http://localhost:3002/location/delete/${location.id}`, {
    method: 'DELETE',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
    })
    })
    .catch(err => console.log(err))
}

const editUpdateLocation = (location) => {
  setLocationToUpdate(location);
}

const updateOn = () => {
  setUpdating(true);
}

const updateOff = () => {
  setUpdating(false);
}

  return (
    <div>
      <h3>Here are your destinations</h3>
      <Row>
        <LocationCard locations={locations} deleteLocation={deleteLocation}
        editUpdateLocation={editUpdateLocation} updateOn={updateOn}/>
        {updating ? <UpdateCard locationToUpdate={locationToUpdate} updateOff={updateOff} 
        token={props.token}/> : <></>}
      </Row>
    </div>
  
  );
};

export default LocationCards;
