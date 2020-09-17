import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Main from './components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';
// import ReactMapGL from 'react-map-gl'; 



function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  // console.log(sessionToken);

  const splashPage = () => {
    return sessionToken !== undefined ?
      <Router><Main token={sessionToken}/></Router>
      :<Auth updateToken={updateToken} />
  }

  const updateToken = newToken => {
    localStorage.setItem('token:', newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  // const [viewPort, setViewPort] = useState({
  //   latitude: 39.7683331,
  //   longitude: -86.1583502,
  //   width: '100vw',
  //   height: '100vh',
  //   zoom: 10
  // })

  return (
    <div className="App">
    {/* whatever we want to see on the page, we need to bring in here....<Navbar> from the Navbar.js and <Auth> from the Auth.js */}
      <Navbar clearToken={clearToken}></Navbar>
      {splashPage()}
      {/* <Main></Main> */}
      {/* <ReactMapGL{...viewPort} mapboxApiAccessToken={process.env.REACT_APP_HOMEWARD_TOKEN}
      mapStyle="mapbox://styles/romiquin86/ckf5mvb9c078k19npnzu2j7bv"
      onViewportChange={viewport => {
        setViewPort(viewport);
      }}
      >
      </ReactMapGL> */}
      
    </div>
  );
}

export default App;
