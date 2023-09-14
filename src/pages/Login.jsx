import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [navigate, setNavigate] = useState(false);

    const handleEmailChanege = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/authenticate',
                { email, password });

            const { data } = response;
            if (data && data.username) {
                console.log(data.username);
                setUsername(data.username);
                console.log(response.data);
                setNavigate(true);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    if (navigate) {
        return <Navigate to="/home" />
    }

    return (
        <div>
            <div className="container my-5">
                <div className="row justify-content-sm-center my-5">
                    <div className="col-sm-4 shadow rounded g-5">
                        <h2 className="text-center pt-3 text-secondary h2">Login</h2>
                        {username && <p>Welcome, {username}!</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input type="email" className="form-control" placeholder="email" value={email}
                                    onChange={handleEmailChanege} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input type="password" className="form-control" placeholder="password" value={password}
                                    onChange={handlePasswordChange} required />
                            </div>
                            <div>
                                <input type="submit" className="btn btn-success my-3" value="Login" />
                                <button className="btn btn-link"><Link to="/register">SignUp</Link></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
