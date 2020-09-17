import React, {useState} from 'react';
import './Auth.css';

const Auth = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        
        return login ? 'Login': 'Signup'
    }

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setEmail('');
        setPassword('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = login ? 'http://localhost:3002/user/login'
            : 'http://localhost:3002/user/create'

        const bodyObj = {
            user: {
                email: email,
                password: password
            }
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => props.updateToken(json.sessionToken))
    }

    return(
        <div>
            <form>
                <h1>{title()}</h1>
                <br></br>
                <label htmlFor="email">Email:</label>
                <br></br>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <label htmlFor="password">Password:</label>
                <br></br>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <button className="submit" onClick={handleSubmit}>Submit</button>
                <br></br>
                <button onClick={loginToggle}>{login ? 'Signup' : 'Login'}</button>
            </form>
        </div>
    )
}

export default Auth;