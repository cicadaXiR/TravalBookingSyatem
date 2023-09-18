import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChanege = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log("username",username);
        // console.log("password",password);
        try {
            const response = await axios.post('http://localhost:8080/authenticate',
                { email, password });
            localStorage.setItem('access', JSON.stringify(response.access));
            console.log(localStorage)
            //console.log(response.data)
            setNavigate(true);
        }
        catch (error) {
            if (error.response) {
                setErrorMessage("Invalid credentials. Please check your email and password.")
            }
            else {
                console.log(error);
                setErrorMessage("An error occured. Please try again later.")
            }
        }
    };

    if (navigate) {
        return <Navigate to="/home" />
    }

    return (
        <div>
            <div className="container my-5">
                <div className="row justify-content-sm-center my-5">
                    {errorMessage && <div class="alert alert-danger">{errorMessage}</div>}
                    <div className="col-sm-4 shadow rounded g-5">
                        <h2 className="text-center pt-3 text-secondary h2">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <br/>
                                <input type="email" className="form-control" placeholder="email" value={email}
                                    onChange={handleEmailChanege} required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="password" value={password}
                                    onChange={handlePasswordChange} required />
                            </div>
                            <div>
                                <button type='submit' className='btn btn-success'>Login</button>
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                <Link to="/register">SignUp</Link></button>
                            </div>
                            <br/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
