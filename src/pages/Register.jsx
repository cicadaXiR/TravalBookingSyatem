import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/sign-up',
                { firstName, lastName, email, password });
            console.log(response.data)
            setNavigate(true);
        }
        catch (error) {
            console.log(error);
        }
    };

    if (navigate) {
        return <Navigate to="/" />
    }

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input type="text" className="form-control" placeholder="firstname"
                                    value={firstName} onChange={handleFirstName} required />
                            </div>

                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input type="text" className="form-control" placeholder="lastname"
                                    value={lastName} onChange={handleLastName} required />
                            </div>

                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input type="email" className="form-control" placeholder="email"
                                    value={email} onChange={handleEmail} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input type="password" className="form-control" placeholder="password"
                                    value={password} onChange={handlePassword} required />
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-success">save</button>
                                <button className="btn btn-link"><Link to="/">Login</Link></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
