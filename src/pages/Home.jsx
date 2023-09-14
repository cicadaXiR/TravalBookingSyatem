import React, { useState } from 'react'
import "../Css/home.css"
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

function Home() {
  const [loggedOut,setLoggedOut] = useState(false)

  const handleLoggedOut = () =>{
    setLoggedOut(true);
  };

  if(loggedOut){
      return <Navigate to="/"/>
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
                <input type="search" class="form-control" id="datatable-search-input" placeholder="search" style={{width:'250px'}}/>
              </li>
              <li className="nav-item">
                  <button className='btn btn-danger' onClick={handleLoggedOut}>logout</button>
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
