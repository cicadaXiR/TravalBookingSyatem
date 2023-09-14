import React, { useState } from 'react'
import "../Css/home.css"
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [loggedOut, setLoggedOut] = useState(false)

  const handleLoggedOut = () => {
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <Navigate to="/" />
  }
  return (
    <>
      <div className="home">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav mx-5">
              <li className="nav-item">
                <Link className="navbar-brand mx-5" to="/home">
                  Online Travel Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand mx-5" to="/train">
                  TrainTicket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand mx-5" to="/bus">
                  BusTicket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand mx-5" to="/flight">FightTicket</Link>
              </li>
              <li className="nav-item">
                <input type="search" class="form-control" id="datatable-search-input" placeholder="search" style={{ width: '250px' }} />
              </li>

              <li className="nav-item">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  profile
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        user Informations
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleLoggedOut}>Logout</button>
                        <button type="button" className="btn btn-primary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>

              </li>

            </ul>
          </div>
        </nav>
        <div className='middle'>

        </div>
      </div >
    </>
  );
}

export default Home
