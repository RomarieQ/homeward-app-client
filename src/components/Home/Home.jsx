import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import AddLocation from './AddLocation/AddLocation';
import DisplayLocation from './DisplayLocation/DisplayLocation';
import './Home.css';
import Fetch from '../Map/Fetch';


const Home = (props) => {

    return(
        <div>
            <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/addlocations'>Add a trip location</Link></li>
                <li><Link to='/displaylocations'>See my locations</Link></li>
            </ul>
            </div>
            <div>
                <Switch>
                    <Route exact path='/addlocations'><AddLocation token={props.token} /></Route>
                    <Route exact path='/displaylocations'><DisplayLocation token={props.token} /></Route>
                </Switch>
            </div>
            <Fetch></Fetch>
        </div>
    )
}

export default Home;