import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

function Fetch () {

const [viewPort, setViewPort] = useState({
    latitude: 39.7683331,
    longitude: -86.1583502,
    width: '50vw',
    height: '50vh',
    zoom: 10
  })

  return (
    <div className="Fetch">
      <ReactMapGL{...viewPort} mapboxApiAccessToken={process.env.REACT_APP_HOMEWARD_TOKEN}
      mapStyle="mapbox://styles/romiquin86/ckf5mvb9c078k19npnzu2j7bv"
      onViewportChange={viewport => {
        setViewPort(viewport);
      }}
      >
      </ReactMapGL>
      
    </div>
  );

}

export default Fetch;