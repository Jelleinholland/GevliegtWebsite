import React, { useState } from 'react';
import '../styles/Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="loginContainer">
            <div className="loginContent">         
                <img src="/assets/Logo.png" alt="Login" className="loginImage" />                                 
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div className="inputField">
                        <input
                            type="text"
                            id="username"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="inputField">
                        <input
                            type="password"
                            id="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="loginButton" type="submit">Login</button>

                    <div className="loginOptions">
                        <p>Geen account? <a href="/register">Registreer</a></p>
                    </div>
                </form>
            </div>
            <div className="registerContainer">
                <h2>Wachtwoord Vergeten?</h2>
                <p>Je kan gemakkelijk je wachtwoord resetten</p>
                <button className="resetButton">Reset Wachtwoord</button>
            </div>
        </div>
    );
};

export default Login;