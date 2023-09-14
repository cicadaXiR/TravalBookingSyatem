import React, { useState } from 'react'
import '../Css/FromStations.css'
import axios from 'axios';

function TrainTicket() {
  const [input1, setInput1] = useState('');
  const [from, setFromResults] = useState([]);
  const [selectedFromStation, setSelectedFromStation] = useState(null);
  const [showFromStation, setShowFromStation] = useState(true);

  const [input2, setInput2] = useState('');
  const [to, setToResults] = useState([]);
  const [selectedToStation, setSelectedToStation] = useState(null);
  const [showToStation, setShowToStation] = useState(true);

  const handleSelectedFromStation = (data) => {
    setSelectedFromStation(data);
    setInput1(data.station);
    setShowFromStation(false);
  }

  const handleSelectedToStation = (data) => {
    setSelectedToStation(data);
    setInput2(data.name);
    setShowToStation(false);
  }

//From Station
const fetchFromData = (value) => {
  axios.get("http://localhost:8080/api/stations")
    .then(response => setFromResults(response.data))
    .catch((error) => {
      // Handle errors here
      console.error("An error occurred:", error);
    });
};


  const handleFromSearch = (value) => {
    setInput1(value);
    setFromResults(value);
    fetchFromData(value);
  };

  //To Station
  const fetchToData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((users) => {
          return value && users && users.name && users.name.toLowerCase().includes(value);
        });
        setToResults(results);
      });
  };

  const handleToSearch = (value) => {
    setInput2(value);
    fetchToData(value);
  };
  
  return (
    <>
      <div>
        <div className="container my-5">
          <div className="row justify-content-sm-center my-5">
            <h2 className="text-center pt-3 text-secondary h2">Book Train</h2>
            <form>
              <div className="form-row">
                <div className="col">

                  <input type="search" className='from' placeholder="From"
                    value={selectedFromStation ? selectedFromStation.stations : input1}
                    onChange={(e) => {
                      setShowFromStation(true);
                      handleFromSearch(e.target.value);
                    }} required/>

                  {
                    showFromStation && (<div className='list'>
                      {
                        from.map((results, id) => {
                          return <div key={id} onClick={() => handleSelectedFromStation(results)}>
                            {results.station}
                          </div>
                        })
                      }
                    </div>)
                  }

                  <input type="date" className='date' placeholder='date' required/>

                  <input type="search" className='to' placeholder="To" 
                  value={selectedToStation ? selectedToStation.name : input2}
                    onChange={(e) => {
                      setShowToStation(true);
                      handleToSearch(e.target.value);
                    }} required/>

                  {
                    showToStation && (<div className='list'>
                      {
                        to.map((results, id) => {
                          return <div key={id} onClick={() => handleSelectedToStation(results)}>
                            {results.name}
                          </div>
                        })
                      }
                    </div>)
                  }


                  <select className='classes'>
                    <option>All Classes</option>
                    <option>classes</option>
                    <option>classes</option>
                    <option>classes</option>
                    <option>classes</option>
                  </select>
                  <select className='genaral'>
                    <option>Genaral</option>
                    <option>classes</option>
                    <option>classes</option>
                    <option>classes</option>
                    <option>classes</option>
                  </select>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrainTicket
